import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// AWS Amplify and GraphQL API and Mutations
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
// import * as mutations from "../../graphql/mutations";
import {
  onCreateStudent,
  onUpdateStudent,
  onDeleteStudent,
} from "../../graphql/subscriptions";

// Students Navbar Component
import StudentsNavbar from "./studentsNavbar.component";
// Update Student Component
import UpdateStudent from "./updateStudent.component";
// Update Module Info Component
//import UpdateModuleInfo from "./moduleInfo/updateModuleInfo.component";
// Delete Student Component
import DeleteStudent from "./deleteStudent.component";

// @mui Material-UI
import { withStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
// import Autocomplete from "@mui/material/Autocomplete";
import LinearProgress from "@mui/material/LinearProgress";
//import CircularProgress from "@mui/material/CircularProgress";
// import { Search } from "@mui/icons-material";

// List of all students
const ListStudents = () => {
  const [students, setStudents] = useState([]);
  // const [student, setStudent] = useState(null);
  const [classes, setClasses] = useState([]);
  const [nextToken, setNextToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    };
    fetchData();
  }, [nextToken, isLoading]);

  // console.log("students", students);
  // console.log("tableData", tableData);
  //console.log("students", students);

  // Get all classes
  useEffect(() => {
    const fetchData = async () => {
      const classes = await API.graphql(
        graphqlOperation(queries.listClasses, {
          // limit: 10,
          // order by last name
          sortDirection: "ASC",
          sortField: "className",
        })
      );
      setClasses(classes.data.listClasses.items);
    };
    fetchData();
  }, []);

  // console.log("classes", classes);

  // Update the students state when a new student is created
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateStudent)
    ).subscribe({
      next: (eventData) => {
        const student = eventData.value.data.onCreateStudent;
        const updatedStudents = [...students, student];
        setStudents(updatedStudents);
        setIsLoading(false);
      },
    });
    return () => subscription.unsubscribe();
  }, [students, isLoading]);

  // Update the students state when a student is updated
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
      },
    });
    return () => subscription.unsubscribe();
  }, [students, isLoading]);

  // Update the students state when a student is deleted
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onDeleteStudent)
    ).subscribe({
      next: (eventData) => {
        const student = eventData.value.data.onDeleteStudent;
        const updatedStudents = students.filter((s) => s.id !== student.id);
        setStudents(updatedStudents);
      },
    });
    return () => subscription.unsubscribe();
  }, [students, isLoading]);

  console.log("students", students);
  console.log("classes", classes);

  // return Grid with cards for each student
  return (
    <div
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        width: "100%",
        backgroundColor: "#272727",
      }}
    >
      <StudentsNavbar />
      {
        /* if isLoading is true, display LinearProgress */
        isLoading ? (
          <LinearProgress
            style={{
              marginTop: "10px",
              marginLeft: "40px",
              marginRight: "30px",
            }}
          />
        ) : (
          <Grid
            container
            spacing={3}
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              width: "97%",
            }}
          >
            {
              //map through students and sort by studentLastName
              students
                .sort((a, b) => {
                  if (a.studentLastName < b.studentLastName) {
                    return -1;
                  }
                  if (a.studentLastName > b.studentLastName) {
                    return 1;
                  }
                  return 0;
                })
                .map((student) => (
                  <Grid item md={2} key={student.id}>
                    <Card>
                      <CardContent>
                        <div style={{ display: "flex", width: "100%" }}>
                          <div
                            style={{
                              //display: "flex",
                              width: "200px",
                              justifyContent: "flex-start",
                              textAlign: "left",
                            }}
                          >
                            <Typography
                              style={{
                                //display: "flex",
                                fontSize: "20px",
                                fontWeight: "bold",
                              }}
                              id="studentLastName"
                              label="studentLastName"
                              //variant="h5"
                              //component="h2"
                            >
                              {student.studentLastName}
                            </Typography>
                            <Typography
                              style={{
                                // display: "flex",
                                fontSize: "11px",
                              }}
                              id="studentFirstName"
                              label="studentFirstName"
                              //="h5"
                              //component="h2"
                            >
                              {student.studentFirstName}
                            </Typography>
                            <Typography
                              style={{
                                // display: "flex",
                                fontSize: "11px",
                              }}
                              id="studentRateRankOrganization"
                              label="studentRateRankOrganization"
                              //variant="body2"
                              //component="p"
                            >
                              {student.rateRank} | {student.organization}
                            </Typography>
                          </div>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <UpdateStudent student={student} />
                          </div>
                        </div>
                        <hr
                          style={{
                            color: "white",
                            backgroundColor: "white",
                            opacity: "0.2",
                            //height: "1px",
                          }}
                        />
                        <Typography
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                          id="student-class"
                          label="student-class"
                          variant="body2"
                          component="p"
                        >
                          {student.currentClass?.className}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "12px",
                            // fontWeight: "bold",
                          }}
                          id="student-class"
                          label="student-class"
                          variant="body2"
                          component="p"
                        >
                          {
                            student.moduleInfo?.items[
                              student.moduleInfo?.items.length - 1
                            ]?.module?.moduleShortName
                          }{" "}
                          -{" "}
                          {
                            student.moduleInfo?.items[
                              student.moduleInfo?.items.length - 1
                            ]?.module?.moduleName
                          }
                          <br />
                          {
                            student.moduleInfo?.items[
                              student.moduleInfo?.items.length - 1
                            ]?.instructor?.instructorLastName
                          }
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            style={{
                              // if student.gpaw is >= 75, then green, else red
                              backgroundColor:
                                student.gpaw >= 75 ? "green" : "red",
                              width: "60px",
                              height: "30px",
                              borderRadius: "5%",
                              paddingTop: "10px",
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                            id="studentgpaw"
                            label="studentgpaw"
                            variant="body2"
                            component="p"
                          >
                            {student.gpaw}
                          </Typography>
                        </div>
                        <Typography
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                          }}
                          id="studentGPAtext"
                          label="studentGPAtext"
                          variant="body2"
                          component="p"
                        >
                          GPA
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            //width: "50%",
                            justifyContent: "flex-start",
                            textAlign: "left",
                          }}
                        >
                          <div
                            style={{
                              width: "50%",
                              display: "flex",
                              justifyContent: "flex-start",
                            }}
                          >
                            <Typography
                              style={{
                                display: "flex",
                                fontSize: "10px",
                                //flexDirection: "column",
                                justifyContent: "flex-start",
                              }}
                              id="studentRank"
                              label="studentLastName"
                              //variant="h5"
                              //component="h2"
                            >
                              Rank: 1/8
                            </Typography>
                          </div>
                          <div
                            style={{
                              width: "50%",
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Typography
                              style={{
                                //display: "flex",
                                fontSize: "10px",
                              }}
                              id="studentFailsCount"
                              label="studentFailsCount"
                              //variant="h5"
                              //component="h2"
                            >
                              Fails:{" "}
                              {
                                // count the number of fails for this student using student.moduleInfo?.items?.moduleTest?.items?.status === "fail"
                                student.moduleInfo?.items
                                  ?.map(
                                    (item) =>
                                      item.moduleTest?.items?.filter(
                                        (test) => test.status === "fail"
                                      ).length
                                  )
                                  .reduce((a, b) => a + b, 0)
                              }
                            </Typography>
                          </div>
                        </div>
                        <hr
                          style={{
                            color: "white",
                            backgroundColor: "white",
                            opacity: "0.2",
                            //height: "1px",
                          }}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))
            }
          </Grid>
        )
      }
    </div>
  );
};

export default ListStudents;
