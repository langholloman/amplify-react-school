import React, { useEffect, useState } from "react";

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
// import UpdateStudent from "./updateStudent.component";
// Edit Student Component
import EditStudent from "./editStudent.component";

// @mui Material-UI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import LinearProgress from "@mui/material/LinearProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

// List of all students
const ListStudents = () => {
  const [students, setStudents] = useState([]);
  //const [student, setStudent] = useState([]);
  const [classes, setClasses] = useState([]);
  const [clas, setClas] = useState([]);
  const [currentClass, setCurrentClass] = useState([]);
  const [nextToken, setNextToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //

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
  // console.log("students", students);

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

  //console.log("students", students);
  //console.log("classes", classes);

  // handleSearch for the Autocomplete to filter the students by className
  const handleSearchClass = (event, value) => {
    // update students where the className matches the value
    // else update to all students
    if (value) {
      const filteredStudents = students.filter((s) =>
        s.currentClass?.className.includes(value)
      );
      setStudents(filteredStudents);
      setClas(value);
      // set currentClass where currentClass.className matches the value
      const filteredClass = students.filter((s) =>
        s.currentClass?.className.includes(value)
      );
      setCurrentClass(filteredClass);
      //console.log("currentClass", students[0].currentClass);
      // console.log("clas", clas);
    } else {
      // graphql query to get all students
      async function fetchData() {
        setIsLoading(true);
        const students = await API.graphql(
          graphqlOperation(queries.listStudents, {
            // limit: 10,
            // order by last name
            sortDirection: "ASC",
            sortField: "studentLastName",
          })
        );
        setStudents(students.data.listStudents.items);
        setClas([]);
        setIsLoading(false);

        //console.log("students", students);
      }
      fetchData();
    }
  };

  /* const getStudent = async (id) => {
    const student = await API.graphql(
      graphqlOperation(queries.getStudent, {
        id: id,
      })
    );
    setStudent(student.data.getStudent);
    console.log("student", student);
  }; */

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
      <div style={{ display: "flex", paddingLeft: "35px", paddingTop: "10px" }}>
        <div>
          <Autocomplete
            disablePortal
            id="search-by-class"
            label="Search by class"
            options={classes
              ?.map((c) => c.className)
              .sort(
                // sort classes descending alphabetically
                (a, b) => {
                  if (a < b) {
                    return 1;
                  } else if (a > b) {
                    return -1;
                  } else {
                    return 0;
                  }
                }
              )}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Search by Class" />
            )}
            onChange={handleSearchClass}
          />
        </div>
        <div
          style={{
            paddingTop: "2px",
            paddingLeft: "12px",
            width: "150px",
          }}
        >
          <Paper
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
              backgroundColor: "#191919",
              outline: "2px solid #4D4D4D",
              height: "48px",
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                color: "#FFFFFF",
              }}
              placeholder="Search by Last Name"
              inputProps={{ "aria-label": "search by last name" }}
              label="Search by Last Name"
              id="search-by-last-name"
              onChange={
                // if the user enters a value, filter the students by studentLastName else get all students
                (event) => {
                  event.preventDefault();
                  if (event.target.value) {
                    const filteredStudents = students.filter((s) =>
                      s.studentLastName
                        .toLowerCase()
                        .includes(event.target.value)
                    );
                    setStudents(filteredStudents);
                    // console.log("clas", clas);
                  } else {
                    // graphql query to get all students
                    async function fetchData() {
                      setIsLoading(true);
                      const students = await API.graphql(
                        graphqlOperation(queries.listStudents, {
                          // limit: 10,
                          // order by last name
                          sortDirection: "ASC",
                          sortField: "studentLastName",
                        })
                      );
                      setStudents(students.data.listStudents.items);
                      // console.log("clas", clas);

                      setIsLoading(false);

                      //console.log("students", students);
                    }
                    fetchData();
                  }
                }
              }
            />
            <IconButton
              type="submit"
              sx={{ p: "10px" }}
              aria-label="clearInputBase"
              // clear the InputBase value when the user clicks the IconButton to clear the search input and get all students
              onClick={(event) => {
                event.preventDefault();
                document.getElementById("search-by-last-name").value = "";

                // graphql query to get all students
                async function fetchData() {
                  setIsLoading(true);
                  const students = await API.graphql(
                    graphqlOperation(queries.listStudents, {
                      // limit: 10,
                      // order by last name
                      sortDirection: "ASC",
                      sortField: "studentLastName",
                    })
                  );
                  setStudents(students.data.listStudents.items);

                  setIsLoading(false);

                  //console.log("students", students);
                }
                fetchData();
              }}
            >
              <ClearIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
      {
        // if AutoComplete label is "Search by class" has a value, display the currentClass information in a card
        currentClass?.length > 0 && clas.length > 0 ? (
          <div
            style={{
              paddingLeft: "35px",
              paddingRight: "30px",
              paddingTop: "20px",
            }}
          >
            <Card>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#51ADFF",
                  color: "#272727",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-start",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "flex-start",
                      paddingLeft: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      Advisor: {students[0].currentClass.classAdvisor}
                    </Typography>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        marginTop: "10px",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      Class {students[0].currentClass.className}
                      <br />
                      {
                        students[0].moduleInfo?.items[
                          students[0].moduleInfo?.items.length - 1
                        ]?.module?.moduleShortName
                      }{" "}
                      -{" "}
                      {
                        students[0].moduleInfo?.items[
                          students[0].moduleInfo?.items.length - 1
                        ]?.module?.moduleName
                      }
                    </Typography>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingRight: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        textAlign: "right",
                      }}
                    >
                      Shift:{" "}
                      {students[0].currentClass.shiftPeriod.toUpperCase()}
                      <br />
                      Bldg: {students[0].currentClass.building} {" | "} Room:{" "}
                      {students[0].currentClass.room}
                      <br />
                      Class Size: {students.length}
                      <br />
                      Convene Date:{" "}
                      {
                        // format the students[0].currentClass.classConveneDate to display the date in the format of "MM/DD/YYYY"
                        students[0].currentClass.classConveneDate
                          .split("T")[0]
                          .split("-")
                          //.reverse()
                          .join("/")
                      }
                      <br />
                      Projected Grad Date:{" "}
                      {
                        // format the students[0].currentClass.classProjectedDate to display the date in the format of "MM/DD/YYYY"
                        students[0].currentClass.classProjectedDate
                          .split("T")[0]
                          .split("-")
                          //.reverse()
                          .join("/")
                      }
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ) : null
      }
      {students.length === 0 ? (
        <div
          style={{
            paddingLeft: "35px",
            paddingRight: "35px",
            paddingTop: "10px",
          }}
        >
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#51ADFF",
                color: "#272727",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingLeft: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    No Students are in Class: {clas}
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ) : null}
      {
        /* if isLoading is true, display LinearProgress */
        isLoading ? (
          <div>
            <LinearProgress
              style={{
                marginTop: "10px",
                marginLeft: "40px",
                marginRight: "30px",
              }}
            />
            <Typography
              style={{
                fontWeight: "normal",
                fontSize: "12px",
              }}
            >
              Loading Students List
            </Typography>
          </div>
        ) : (
          <Grid
            container
            spacing={3}
            style={{
              marginTop: "5px",
              marginLeft: "10px",
              width: "97%",
            }}
          >
            {
              //map through students and sort by currentClass.className
              students
                .sort((a, b) => {
                  if (a.currentClass?.className < b.currentClass?.className) {
                    return 1;
                  } else if (
                    a.currentClass?.className > b.currentClass?.className
                  ) {
                    return -1;
                  } else {
                    return 0;
                  }
                })
                .map((student) => (
                  <Grid item md={2} key={student.id}>
                    <Card
                      style={{
                        backgroundColor: "#282828",
                      }}
                    >
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
                                fontSize: "15px",
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
                            {/* use EditStudent component and set current student to student */}
                            <EditStudent student={student} />
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
                              // if student.gpaw is >= 80, then green
                              // if student.gpaw is between 75 and 79.99, then yellow
                              // if student.gpaw is < 75, then red
                              backgroundColor:
                                student.gpaw >= 80
                                  ? "green"
                                  : "" ||
                                    (student.gpaw >= 75 &&
                                      student.gpaw < 79.9999)
                                  ? "#DD6E0F"
                                  : "" || student.gpaw < 74.9999
                                  ? "red"
                                  : "",
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
                                fontSize: "11px",
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
                                fontSize: "11px",
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
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            textAlign: "center",
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
                                //display: "flex",
                                fontSize: "14px",
                              }}
                              id="studentSetback"
                              label="studentSetback"
                            >
                              SETBACK
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
                                fontSize: "14px",
                                paddingRight: "10px",
                              }}
                              id="studentMando"
                              label="studentMando"
                            >
                              MANDO
                            </Typography>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              width: "50%",
                              display: "flex",
                              justifyContent: "flex-start",
                            }}
                          >
                            <Checkbox
                              // if checkbox is checked, then set background color to #FD9F4C
                              style={{
                                color:
                                  student.setbackHistory?.items?.length > 0
                                    ? "#FD9F4C"
                                    : "white",
                              }}
                              id="studentSetbackCheckbox"
                              label="studentSetbackCheckbox"
                              checked={
                                student.setbackHistory?.items?.length > 0
                              }
                              /* onChange={() => {
                                // update the setback history for this student when the checkbox is checked
                                if (student.setbackHistory?.items?.length > 0) {

                                  // if the checkbox is checked, then remove the setback history for this student
                                  updateStudentSetbackHistory(
                                    student.studentId,
                                    []
                                  );
                                } else {
                                  // if the checkbox is unchecked, then add the setback history for this student
                                  updateStudentSetbackHistory(
                                    student.studentId,
                                    [
                                      {
                                        setbackId: "1",
                                        setbackDate: "2020-01-01",
                                        setbackReason: "test",
                                        setbackStatus: "test",
                                      },
                                    ]
                                  );
                                }
                              }} */
                            />
                          </div>
                          <div
                            style={{
                              width: "50%",
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <FormControlLabel
                              control={
                                <Switch
                                  //value={student.mandotoryStudy}
                                  // if student.mandotoryStudy is true, then switch is on, else switch is off
                                  checked={student.mandotoryStudy}
                                  // if student.mandotoryStudy is true, then style is red, else style is green
                                  style={
                                    student.mandotoryStudy
                                      ? { color: "red" }
                                      : { color: "green" }
                                  }
                                  id="studentMandotoryStudy"
                                  label="studentMandotoryStudy"
                                />
                              }
                              label={
                                // if student.mandotoryStudy is true, then label is "Yes", else label is "No"
                                student.mandotoryStudy ? (
                                  <span
                                    style={{
                                      fontSize: "14px",
                                    }}
                                  >
                                    Yes
                                  </span>
                                ) : (
                                  <span
                                    style={{
                                      fontSize: "14px",
                                    }}
                                  >
                                    No
                                  </span>
                                )
                              }
                              labelPlacement="start"
                            />
                          </div>
                        </div>
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
