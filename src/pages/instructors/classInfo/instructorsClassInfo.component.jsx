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
  const [instructor, setInstructor] = useState(null);
  const [classs, setClasss] = useState([]);
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

  // get classes from API
  useEffect(() => {
    async function fetchClasses() {
      try {
        const classs = await API.graphql(
          graphqlOperation(listClasss, {
            sortDirection: ["ASC"],
            sortField: "className",
            nextToken: nextToken,
          })
        );
        setClasss(classs.data.listClasss.items);
        setNextToken(classs.data.listClasss.nextToken);
        setIsLoading(false);
        console.log("Classes: ", classs);
      } catch (err) {
        console.log("error fetching classes", err);
      }
    }
    fetchClasses();
  }, [nextToken, isLoading]);

  // get instructor from API
  useEffect(() => {
    async function fetchInstructor() {
      try {
        const instructor = await API.graphql(
          graphqlOperation(getInstructor, { id: "04" })
        );
        setInstructor(instructor.data.getInstructor);
        setIsLoading(false);
        console.log("Instructor: ", instructor);
      } catch (err) {
        console.log("error fetching instructor", err);
      }
    }
    fetchInstructor();
  }, [isLoading]);

  // Use AutoComplete to search for instructor and assign to state
  const handleInstructorChange = (event, value) => {
    if (value !== null) {
      setInstructor(value);
    } else {
      // setInstructor to a non null value to clear the input field
      setInstructor({
        id: "",
      });
    }
  };

  // filter Instructor classes by instructor
  const filterInstructorClasses = (instructor) => {
    const instructorClasses = classs.filter((classs) => {
      if (classs.instructors.items.length > 0) {
        return classs.instructors.items.some(
          (instructorClass) => instructorClass.instructorID === instructor.id
        );
      } else {
        // if instructor has no classes, return false
        return false;
      }
    });
    console.log("instructorClasses: ", instructorClasses);
    return instructorClasses;
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
          // filterInstructorClasses(value);
          handleInstructorChange(event, value);
          if (value === null) {
            // setInstructorClasses([]);
            setInstructor([{ id: "" }]);
            // filterInstructorClasses([{ id: "" }]);
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
                <TableCell>className</TableCell>
                <TableCell align="right">shiftPeriod</TableCell>
                <TableCell align="right">classConveneDate</TableCell>
                <TableCell align="right">classProjectedDate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ListInstructorsClasses;
