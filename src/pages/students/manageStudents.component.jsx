import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// AWS Amplify and GraphQL API and Mutations
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {
  onCreateStudent,
  onUpdateStudent,
  onDeleteStudent,
} from "../../graphql/subscriptions";

// import AddInstructor from "./addInstructor.component";
import StudentsNavbar from "./studentsNavbar.component";

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
import DeleteIcon from "@mui/icons-material/Delete";
//import MenuItem from "@mui/material";

// Process DataGridPro row update for Student
function ProcessStudentUpdate(row) {
  const {
    id,
    studentFirstName,
    studentLastName,
    studentUsername,
    status,
    course,
    school,
    organization,
    rateRank,
    newAssession,
    mandotoryStudy,
    gpaw,
    arbPending,
    currentClass,
  } = row;
  const input = {
    id,
    studentFirstName,
    studentLastName,
    studentUsername,
    status,
    course,
    school,
    organization,
    rateRank,
    newAssession,
    mandotoryStudy,
    gpaw,
    arbPending,
    ...currentClass,
  };
  return (
    API.graphql(graphqlOperation(mutations.updateStudent, { input })) &&
    row && { ...row, isNew: false }
  );
}

//const INITIAL_GROUPING_COLUMN_MODEL = ["className"];

// List of all students
const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [nextToken, setNextToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  // Get all students
  useEffect(() => {
    const fetchData = async () => {
      const students = await API.graphql(
        graphqlOperation(queries.listStudents, {
          // limit: 10,
          // order by last name
          sortDirection: "ASC",
          sortField: "studentLastName",
          nextToken: nextToken,
        })
      );
      setStudents(students.data.listStudents.items);
      setNextToken(students.data.listStudents.nextToken);
      setTableData(students.data.listStudents.items);
      setIsLoading(false);
    };
    fetchData();
  }, [nextToken, isLoading]);

  // console.log("students", students);
  // console.log("tableData", tableData);
  console.log("students", students);

  // Update the tableData state when a new student is created
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateStudent)
    ).subscribe({
      next: (eventData) => {
        const student = eventData.value.data.onCreateStudent;
        const updatedStudents = [...students, student];
        setStudents(updatedStudents);
        setTableData(updatedStudents);
      },
    });
    return () => subscription.unsubscribe();
  }, [students]);

  // Update the tableData state when a student is updated
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdateStudent)
    ).subscribe({
      next: (eventData) => {
        const student = eventData.value.data.onUpdateStudent;
        const updatedStudents = students.map((s) =>
          s.id === student.id ? student : s
        );
        setStudents(updatedStudents);
        setTableData(updatedStudents);
      },
    });
    return () => subscription.unsubscribe();
  }, [students]);

  // Update the tableData state when a student is deleted
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onDeleteStudent)
    ).subscribe({
      next: (eventData) => {
        const student = eventData.value.data.onDeleteStudent;
        const updatedStudents = students.filter((s) => s.id !== student.id);
        setStudents(updatedStudents);
        setTableData(updatedStudents);
      },
    });
    return () => subscription.unsubscribe();
  }, [students]);

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

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.updateRows([{ id, _action: "delete" }]);
  };

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
      field: "studentFirstName",
      headerName: "First Name",
      width: 100,
      editable: true,
    },
    {
      field: "studentLastName",
      headerName: "Last Name",
      width: 120,
      editable: true,
    },
    {
      field: "studentUsername",
      headerName: "Username",
      width: 120,
      editable: true,
    },
    {
      field: "currentClass.className",
      headerName: "Current Class",
      width: 120,
      editable: true,
      valueGetter: (params) => params.row.currentClass?.className,
    },
    {
      field: "gpaw",
      headerName: "GPA-W",
      align: "center",
      type: "number",
      width: 70,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      type: "singleSelect",
      valueOptions: ["ACTIVE", "GRADUATED", "ON-HOLD", "SUSPENDED"],
      multiple: true,
      width: 100,
      editable: true,
    },
    {
      field: "rateRank",
      headerName: "Rate/Rank",
      width: 100,
      editable: true,
    },
    {
      field: "newAssession",
      headerName: "New Assession",
      type: "boolean",
      width: 70,
      editable: true,
    },
    {
      field: "mandotoryStudy",
      headerName: "Mandotory Study",
      type: "boolean",
      width: 70,
      editable: true,
    },
    {
      field: "arbPending",
      headerName: "ARB Pending",
      type: "boolean",
      width: 70,
      editable: true,
    },

    {
      field: "course",
      headerName: "Course",
      type: "singleSelect",
      valueOptions: ["JCAC", "OTHER"],
      width: 80,
      editable: true,
    },
    {
      field: "school",
      headerName: "School",
      type: "singleSelect",
      valueOptions: ["CSU", "OTHER"],
      width: 80,
      editable: true,
    },
    {
      field: "organization",
      headerName: "Organization",
      type: "singleSelect",
      valueOptions: ["USARMY", "USAF", "USMC", "USCG", "USN", "OTHER"],
      width: 120,
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
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <div
      style={{
        height: 700,
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
        <StudentsNavbar />
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
            width={"90%"}
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
            processRowUpdate={ProcessStudentUpdate}
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
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default ManageStudents;
