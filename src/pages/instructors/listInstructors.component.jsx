import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// AWS Amplify and GraphQL API and Mutations
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {
  onCreateInstructor,
  onUpdateInstructor,
  onDeleteInstructor,
} from "../../graphql/subscriptions";

// import AddInstructor from "./addInstructor.component";
import InstructorsNavbar from "./instructorsNavbar.component";

// @mui Data Grid Pro and Material UI
import {
  DataGridPro,
  GridToolbar,
  useGridApiRef,
  // GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";

import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import LinearProgress from "@mui/material/LinearProgress";

// Process DataGridPro row update for Instructor
function ProcessInstructorUpdate(row) {
  const {
    id,
    instructorFirstName,
    instructorLastName,
    instructorUsername,
    role,
    status,
  } = row;
  const input = {
    id,
    instructorFirstName,
    instructorLastName,
    instructorUsername,
    role,
    status,
  };
  return (
    API.graphql(graphqlOperation(mutations.updateInstructor, { input })) &&
    row && { ...row, isNew: false }
  );
}

const INITIAL_GROUPING_COLUMN_MODEL = ["role"];

// List of all instructors
const ListInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [nextToken, setNextToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    // Get all instructors from the database with paging and sorting options (default) and store in state as instructors and set nextToken

    const fetchData = async () => {
      const instructors = await API.graphql(
        graphqlOperation(queries.listInstructors, {
          // limit: 10,
          // order by last name
          sortDirection: "ASC",
          sortField: "instructorLastName",
          nextToken: nextToken,
        })
      );
      setInstructors(instructors.data.listInstructors.items);
      setNextToken(instructors.data.listInstructors.nextToken);
      setTableData(instructors.data.listInstructors.items);
      setIsLoading(false);
    };
    fetchData();
  }, [nextToken, isLoading]);

  //console.log("instructors", instructors);
  console.log("tableData", tableData);

  // Update the tableData state when a new instructor is created
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateInstructor)
    ).subscribe({
      next: (eventData) => {
        const instructor = eventData.value.data.onCreateInstructor;
        const updatedInstructors = [...instructors, instructor];
        setInstructors(updatedInstructors);
        setTableData(updatedInstructors);
      },
    });
    return () => subscription.unsubscribe();
  }, [instructors]);

  // Update the tableData state when an instructor is updated
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdateInstructor)
    ).subscribe({
      next: (eventData) => {
        const instructor = eventData.value.data.onUpdateInstructor;
        const updatedInstructors = instructors.map((i) =>
          i.id === instructor.id ? instructor : i
        );
        setInstructors(updatedInstructors);
        setTableData(updatedInstructors);
      },
    });

    return () => subscription.unsubscribe();
  }, [instructors]);

  // Update the tableData state when an instructor is deleted
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onDeleteInstructor)
    ).subscribe({
      next: (eventData) => {
        const instructor = eventData.value.data.onDeleteInstructor;
        const updatedInstructors = instructors.filter(
          (i) => i.id !== instructor.id
        );
        setInstructors(updatedInstructors);
        setTableData(updatedInstructors);
      },
    });
    return () => subscription.unsubscribe();
  }, [instructors]);

  const apiRef = useGridApiRef();

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.startRowEditMode({ id });
  };

  const handleSaveClick = (id) => async (event) => {
    event.stopPropagation();
    apiRef.current.stopRowEditMode({ id });
  };

  /*   const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.updateRows([{ id, _action: "delete" }]);
  }; */

  const handleCancelClick = (id) => async (event) => {
    event.stopPropagation();
    apiRef.current.stopRowEditMode({ id, ignoreModifications: true });

    const row = apiRef.current.getRow(id);
    if (row.isNew) {
      apiRef.current.updateRows([{ id, _action: "delete" }]);
    }
  };

  const columns = [
    //  { field: "id", headerName: "ID", width: 100 },
    /* {
      field: "id",
      headerName: "ID",
      width: 10,
      editable: false,
    }, */
    {
      field: "instructorFirstName",
      headerName: "First Name",
      width: 100,
      editable: true,
    },
    {
      field: "instructorLastName",
      headerName: "Last Name",
      width: 200,
      editable: true,
    },
    {
      field: "instructorUsername",
      headerName: "Username",
      width: 250,
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      type: "singleSelect",
      valueOptions: ["INSTRUCTOR", "MO", "SME", "ADMIN", "PMO"],
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      type: "singleSelect",
      valueOptions: ["ACTIVE", "ON-LEAVE", "QUALIFYING", "DEPARTED"],
      multiple: true,
      width: 150,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = apiRef.current.getRowMode(id) === "edit";

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          /* <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />, */
        ];
      },
    },
  ];

  return (
    <div
      style={{
        height: 900,
        width: "100%",
        paddingTop: 100,
        paddingBottom: 100,
        margin: "auto",
        backgroundColor: "#272727",
      }}
    >
      <div
        style={{
          paddingBottom: 20,
        }}
      >
        <InstructorsNavbar />
      </div>
      <Box
        sx={{
          height: "90%",
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <div style={{ width: "96%", height: "100%", paddingLeft: "2%" }}>
          <DataGridPro
            rows={tableData}
            getRowId={(row) => row.id}
            columns={columns}
            apiRef={apiRef}
            rowGroupingColumnMode="single"
            initialState={{
              rowGrouping: {
                model: INITIAL_GROUPING_COLUMN_MODEL,
              },
              sorting: {
                sortModel: [{ field: "instructorLastName", sort: "asc" }],
              },
            }}
            editMode="row"
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={ProcessInstructorUpdate}
            onGridReady={(api) => {
              api.sizeColumnsToFit();
            }}
            components={{
              Toolbar: GridToolbar,
              LoadingOverlay: LinearProgress,
            }}
            loading={isLoading}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            pagination
            experimentalFeatures={{
              newEditingApi: true,
              rowGrouping: true,
              // warnIfFocusStateIsNotSynced: true,
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default ListInstructors;
