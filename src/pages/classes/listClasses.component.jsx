import React, { useEffect, useState } from "react";

// AWS Amplify and GraphQL API and Mutations
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {
  onCreateClass,
  onUpdateClass,
  onDeleteClass,
} from "../../graphql/subscriptions";

// import ClassesNavbar from "./classesNavbar.component";
import ClassesNavbar from "./classesNavbar.component";

// @mui Data Grid Pro and Material UI
import {
  DataGridPro,
  GridToolbar,
  useGridApiRef,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";

import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import LinearProgress from "@mui/material/LinearProgress";

function ProcessClassUpdate(row) {
  const {
    id,
    className,
    shiftPeriod,
    classConveneDate,
    classProjectedDate,
    building,
    room,
    location,
    status,
    graduated,
    offsiteClass,
    classAdvisor,
  } = row;
  const input = {
    id,
    className,
    shiftPeriod,
    classConveneDate,
    classProjectedDate,
    building,
    room,
    location,
    status,
    graduated,
    offsiteClass,
    classAdvisor,
  };
  return (
    API.graphql(graphqlOperation(mutations.updateClass, { input })) &&
    row && { ...row, isNew: false }
  );
}

const ListClasses = () => {
  const [classes, setClasses] = useState([]);
  const [nextToken, setNextToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    // Get all classes
    const fetchData = async () => {
      const classes = await API.graphql(
        graphqlOperation(queries.listClasses, {
          // limit: 10,
          // order by className
          sortDirection: "DESC",
          sortField: "className",
          nextToken: nextToken,
        })
      );
      setClasses(classes.data.listClasses.items);
      setNextToken(classes.data.listClasses.nextToken);
      setTableData(classes.data.listClasses.items);
      setIsLoading(false);
    };
    fetchData();
  }, [nextToken, isLoading]);

  console.log("classes", classes);

  // Update the tableData state when a new class is created
  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateClass)).subscribe(
      {
        next: (eventData) => {
          const clas = eventData.value.data.onCreateClass;
          const updatedClasses = [...classes, clas];
          setClasses(updatedClasses);
          setTableData(updatedClasses);
        },
      }
    );
    return () => subscription.unsubscribe();
  }, [classes]);

  // Update the tableData state when a class is updated
  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onUpdateClass)).subscribe(
      {
        next: (eventData) => {
          const clas = eventData.value.data.onUpdateClass;
          const updatedClasses = classes.map((i) =>
            i.id === clas.id ? clas : i
          );
          setClasses(updatedClasses);
          setTableData(updatedClasses);
        },
      }
    );
    return () => subscription.unsubscribe();
  }, [classes]);

  // Update the tableData state when a class is deleted
  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onDeleteClass)).subscribe(
      {
        next: (eventData) => {
          const clas = eventData.value.data.onDeleteClass;
          const updatedClasses = classes.filter((i) => i.id !== clas.id);
          setClasses(updatedClasses);
          setTableData(updatedClasses);
        },
      }
    );
    return () => subscription.unsubscribe();
  }, [classes]);

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
      field: "className",
      headerName: "Class",
      hideable: false,
      width: 75,
      editable: true,
    },
    {
      field: "shiftPeriod",
      headerName: "Shift",
      type: "singleSelect",
      valueOptions: ["DAY", "EVE"],
      width: 75,
      editable: true,
    },
    {
      field: "classConveneDate",
      headerName: "Convene Date",
      //type: "dateTime",
      type: "date",
      valueGetter: ({ value }) => value && new Date(value),
      width: 125,
      editable: true,
    },
    {
      field: "classProjectedDate",
      headerName: "Projected Date",
      //type: "dateTime",
      type: "date",
      valueGetter: ({ value }) => value && new Date(value),
      width: 125,
      editable: true,
    },
    {
      field: "building",
      headerName: "Building",
      width: 75,
      editable: true,
    },
    {
      field: "room",
      headerName: "Room",
      width: 75,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      type: "singleSelect",
      valueOptions: [
        "NOT-STARTED",
        "CURRENT",
        "COMPLETED",
        "ON-HOLD",
        "CANCELLED",
      ],
      width: 125,
      editable: true,
    },
    {
      field: "graduated",
      headerName: "Graduated",
      type: "boolean",
      width: 100,
      editable: true,
    },
    {
      field: "classAdvisor",
      headerName: "Class Advisor",
      width: 200,
      editable: true,
    },
    {
      field: "location",
      headerName: "Location",
      width: 100,
      editable: true,
    },
    {
      field: "offsiteClass",
      headerName: "Offsite",
      type: "boolean",
      width: 100,
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
        height: 700,
        width: "90%",
        paddingTop: 100,
        paddingBottom: 100,
        margin: "auto",
      }}
    >
      <ClassesNavbar />
      <div
        style={{
          paddingBottom: 20,
        }}
      ></div>
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
        <DataGridPro
          rows={tableData}
          getRowId={(row) => row.id}
          columns={columns}
          apiRef={apiRef}
          rowGroupingColumnMode="single"
          /* initialState={{
            rowGrouping: {
              model: INITIAL_GROUPING_COLUMN_MODEL,
            },
          }} */
          editMode="row"
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={ProcessClassUpdate}
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
            // rowGrouping: true,
            // warnIfFocusStateIsNotSynced: true,
          }}
          initialState={{
            pinnedColumns: { left: ["className"], right: ["actions"] },
            sorting: {
              sortModel: [{ field: "className", sort: "desc" }],
            },
          }}
        />
      </Box>
    </div>
  );
};

export default ListClasses;
