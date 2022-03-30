import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";

// AWS Amplify and GraphQL API and Mutations
import { a, API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {
  onCreateInstructor,
  onUpdateInstructor,
  onDeleteInstructor,
} from "../../graphql/subscriptions";

import AddInstructor from "./addInstructor.component";

// @mui Data Grid Pro and Material UI
import {
  DataGridPro,
  GridToolbar,
  useGridApiRef,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
// import { useDemoData } from "@mui/x-data-grid-generator";

const VISIBLE_FIELDS = [
  //  { field: "id", headerName: "ID", width: 100 },
  {
    field: "id",
    headerName: "ID",
    width: 10,
    editable: false,
  },
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
    width: 200,
    editable: true,
  },
];

// Process DataGridPro row update for Instructor
const ProcessRowUpdate = async (newRow, oldRow) => {
  const { id, instructorFirstName, instructorLastName, instructorUsername } =
    newRow || oldRow;
  const input = {
    id,
    instructorFirstName,
    instructorLastName,
    instructorUsername,
  };
  await API.graphql(graphqlOperation(mutations.updateInstructor, { input }));
};

// Process DataGridPro row delete for Instructor
const processRowDelete = async (row, rowIndex) => {
  const { id } = row;
  const input = { id };
  await API.graphql(graphqlOperation(mutations.deleteInstructor, { input }));
};

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

  console.log("instructors", instructors);
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

  return (
    <div
      style={{
        height: 700,
        width: "90%",
        paddingTop: 150,
        paddingBottom: 150,
        margin: "auto",
      }}
    >
      <div
        style={{
          marginBottom: 20,
          position: "absolute",
          right: 95,
          top: 100,
        }}
      >
        <AddInstructor />
      </div>
      <DataGridPro
        rows={tableData}
        columns={VISIBLE_FIELDS}
        isLoading={isLoading}
        onGridReady={(api) => {
          api.sizeColumnsToFit();
        }}
        components={{
          Toolbar: GridToolbar,
        }}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
        pagination
        editMode="cell"
        processRowUpdate={ProcessRowUpdate}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
};

export default ListInstructors;
