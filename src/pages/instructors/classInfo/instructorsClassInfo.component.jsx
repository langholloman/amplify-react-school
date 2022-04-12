import React, { useEffect, useState } from "react";

// AWS Amplify and GraphQL API and Mutations
import { API, graphqlOperation } from "aws-amplify";
// queries for Instructor and Class many-to-many relationship
import {
  getInstructor,
  listInstructors,
  getClass,
  listClasss,
} from "../../../graphql/queries";

/* // MUI Data Grid Pro and MUI Components
import {
  DataGridPro,
  GridToolbar,
  useGridApiRef,
  // GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro"; */
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// ListInstructorsClasses component for Instructor page to display all Instructor classes
const ListInstructorsClasses = () => {
  const [instructors, setInstructors] = useState([]);
  const [instructor, setInstructor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextToken, setNextToken] = useState(null);

  // List of all instructors
  useEffect(() => {
    // get all instructors from API
    async function fetchInstructors() {
      try {
        const instructors = await API.graphql(
          graphqlOperation(listInstructors, {
            sortDirection: ["ASC"],
            sortField: "instructorLastName",
            nextToken: nextToken,
          })
        );
        setInstructors(instructors.data.listInstructors.items);

        setNextToken(instructors.data.listInstructors.nextToken);
        setIsLoading(false);
        console.log("Instructors: ", instructors);
      } catch (err) {
        console.log("error fetching instructors", err);
      }
    }
    fetchInstructors();
  }, [nextToken, isLoading]);

  // Use AutoComplete to search for instructor and assign to state
  const handleInstructorChange = (event, value) => {
    if (value !== null) {
      setInstructor(value);
      async function fetchInstructor() {
        try {
          const instructor = await API.graphql(
            graphqlOperation(getInstructor, {
              id: value.id,
            })
          );
          setInstructor(instructor.data.getInstructor);
          setIsLoading(false);
          console.log("Instructor async: ", instructor);
        } catch (err) {
          console.log("error fetching instructor", err);
        }
      }
      fetchInstructor();
    } else {
      // setInstructor to a non null value to clear the input field
      setInstructor({
        id: "",
      });
    }
  };

  // Based on instructor selected, display classes for that instructor in table below

  return (
    <div
      style={{
        paddingTop: "100px",
        paddingBottom: "200px",
        paddingLeft: "20px",
        width: "85%",
      }}
    >
      <Typography
        variant="h4"
        color="textSecondary"
        align="left"
        paddingBottom="20px"
      >
        List Instructors Classes
      </Typography>
      {isLoading && <LinearProgress />}
      <Autocomplete
        id="instructor-select"
        options={instructors}
        getOptionLabel={(option) =>
          option.instructorLastName + ", " + option.instructorFirstName
        }
        style={{ width: 300, paddingBottom: "20px" }}
        renderInput={(params) => (
          <TextField {...params} label="Instructor" variant="outlined" />
        )}
        onChange={(event, value) => {
          setInstructor(value);
          handleInstructorChange(event, value);
          if (value === null) {
            setInstructor([{ id: "" }]);
            console.log("value: ", value);
          } else {
            console.log("value: ", value);
          }
        }}
      />

      <Box display="flex" justifyContent="center" alignItems="center">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Class Name</TableCell>
                <TableCell align="right">Shift Period</TableCell>
                <TableCell align="right">Class Convene Date</TableCell>
                <TableCell align="right">
                  Class Projected Graduation Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                // if instructor is defined, display classes for that instructor
                // else display text directing user to select instructor
                instructor.classes !== undefined ? (
                  instructor.classes.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.class.className}
                      </TableCell>
                      <TableCell align="right">
                        {item.class.shiftPeriod}
                      </TableCell>
                      <TableCell align="right">
                        {item.class.classConveneDate}
                      </TableCell>
                      <TableCell align="right">
                        {item.class.classProjectedDate}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>
                      Select an Instructor to view Assigned Classes
                    </TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ListInstructorsClasses;
