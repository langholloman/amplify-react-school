import React, { Component } from "react";
import PropTypes from "prop-types";

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
import UpdateModuleInfo from "./updateModuleInfo.component";
// Delete Student Component
import DeleteStudent from "./deleteStudent.component";

// @mui Material-UI
import { withStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
import LinearProgress from "@mui/material/LinearProgress";
import { Search } from "@mui/icons-material";

const styles = {
  studentListingsTitle: {
    fontSize: "2.5rem",
    fontWeight: "normal",
    marginBottom: "2rem",
  },
  card: {
    minWidth: 100,
  },
  studentName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#71C2FF",
  },
  username: {
    fontSize: 15,
    fontWeight: "bold",
  },
  root: {
    flexGrow: 1,
    marginTop: "4rem",
    padding: "2rem",
    backgroundcolor: "white",
  },
};

class ListStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const students = await API.graphql(graphqlOperation(queries.listStudents));
    this.setState({ students: students.data.listStudents.items });
    console.log("Students: ", students);

    this.setState({ isLoading: false });

    this.subscription = API.graphql(
      graphqlOperation(onCreateStudent)
    ).subscribe({
      next: (studentData) => {
        const newStudent = studentData.value.data.onCreateStudent;
        this.setState((prevState) => {
          const students = [newStudent, ...prevState.students];
          return { students };
        });
      },
    });

    this.subscription = API.graphql(
      graphqlOperation(onUpdateStudent)
    ).subscribe({
      next: (studentData) => {
        const updatedStudent = studentData.value.data.onUpdateStudent;
        this.setState((prevState) => {
          const students = prevState.students.map((student) => {
            if (student.id === updatedStudent.id) {
              return updatedStudent;
            }
            return student;
          });
          return { students };
        });
      },
    });

    this.subscription = API.graphql(
      graphqlOperation(onDeleteStudent)
    ).subscribe({
      next: (studentData) => {
        const deletedStudent = studentData.value.data.onDeleteStudent;
        this.setState((prevState) => {
          const students = prevState.students.filter(
            (student) => student.id !== deletedStudent.id
          );
          return { students };
        });
      },
    });
  }

  componentWillUnmount() {
    console.log("Students data safely unmounted");
    this.isCancelled = true;
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  // filterStudents that returns a list of students that match the search query for student moduleInfo currentClass
  filterStudentsByClass(students, searchQuery) {
    return students.filter((student) => {
      return student.currentClass?.toLowerCase().includes(searchQuery);
    });
  }

  filterStudentsByLastName(students, searchQuery) {
    return students.filter((student) => {
      return (
        student.studentLastName?.toLowerCase().includes(searchQuery) ||
        student.studentLastName?.includes(searchQuery)
      );
    });
  }

  handleChangeClass(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleChangeStudentLastName(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    // const { students } = this.state;
    return (
      <div className={classes.root}>
        {this.state.isLoading ? (
          <LinearProgress />
        ) : (
          <Typography>Data is loaded.</Typography>
        )}
        <StudentsNavbar />
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            style={{
              marginTop: "2rem",
            }}
          >
            <TextField
              id="search-students"
              label="Search by Current Class"
              type="search"
              name="searchQuery"
              variant="outlined"
              onChange={(event) => this.handleChangeClass(event)}
              style={{
                width: "15rem",
                marginBottom: "2rem",
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              marginTop: "2rem",
            }}
          >
            <TextField
              id="search-students"
              label="Search by Student Last Name"
              type="search"
              name="searchQuery"
              variant="outlined"
              onChange={(event) => this.handleChangeStudentLastName(event)}
              style={{
                width: "20rem",
                marginBottom: "2rem",
              }}
            />
          </Grid>
          {this.filterStudentsByClass(
            this.state.students,
            this.state.searchQuery
          ).map((student) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={student.id}>
              <Card className={classes.card}>
                <CardActions item xs={6}>
                  <UpdateStudent student={student} />
                </CardActions>
                <CardContent>
                  <Typography className={classes.studentName}>
                    {student.studentFirstName} {student.studentLastName}
                  </Typography>
                  <Typography className={classes.username}>
                    {student.studentUsername}
                  </Typography>
                  <Typography className={classes.username}>
                    {student.currentClass}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <UpdateModuleInfo student={student} />
                </CardActions>
                <CardActions
                  style={{
                    justifyContent: "right",
                  }}
                >
                  <DeleteStudent student={student} />
                </CardActions>
              </Card>
            </Grid>
          ))}
          {this.filterStudentsByLastName(
            this.state.students,
            this.state.searchQuery
          ).map((student) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={student.id}>
              <Card className={classes.card}>
                <CardActions item xs={6}>
                  <UpdateStudent student={student} />
                </CardActions>
                <CardContent>
                  <Typography className={classes.studentName}>
                    {student.studentFirstName} {student.studentLastName}
                  </Typography>
                  <Typography className={classes.username}>
                    {student.studentUsername}
                  </Typography>
                  <Typography className={classes.username}>
                    {student.currentClass}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <UpdateModuleInfo student={student} />
                </CardActions>
                <CardActions
                  style={{
                    justifyContent: "right",
                  }}
                >
                  <DeleteStudent student={student} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

ListStudents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListStudents);
