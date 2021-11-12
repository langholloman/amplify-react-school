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
// Delete Student Component
import DeleteStudent from "./deleteStudent.component";

// @mui Material-UI
import { withStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LinearProgress from "@mui/material/LinearProgress";

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
    backgroundColor: "#282C34",
  },
};

class ListStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterStudents = this.filterStudents.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const students = await API.graphql(graphqlOperation(queries.listStudents));
    this.setState({ students: students.data.listStudents.items });
    console.log(students.data.listStudents.items);
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

  getStudents = () => {
    API.graphql(graphqlOperation(queries.listStudents)).then((response) => {
      this.setState({ students: response.data.listStudents.items });
    });
  };

  filterStudents = (students) => {
    const { search } = this.state;
    if (search) {
      return students.filter(
        (student) =>
          student.studentLastName
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          student.studentFirstName.toLowerCase().includes(search.toLowerCase())
      );
    }
    return students;
  };

  componentWillUnmount() {
    console.log("Students data safely unmounted");
    this.isCancelled = true;
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { classes } = this.props;
    const { students } = this.state;
    return (
      <div className={classes.root}>
        {this.state.isLoading ? (
          <LinearProgress />
        ) : (
          <Typography>Data is loaded.</Typography>
        )}
        <StudentsNavbar />
        <Autocomplete
          id="search"
          options={students}
          getOptionLabel={(option) => option.studentLastName.toUpperCase()}
          style={{
            width: "200px",
            float: "right",
          }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search by Last Name"
              margin="normal"
            />
          )}
          onInputChange={(event, value) => {
            this.setState({ search: value });
          }}
        />
        <Grid container spacing={2}>
          {this.filterStudents(students).map((student) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={student.id}>
              <Card className={classes.card}>
                <CardActions
                  style={{
                    justifyContent: "right",
                  }}
                >
                  <DeleteStudent student={student} />
                </CardActions>
                <CardContent>
                  <Typography
                    className={classes.studentName}
                    gutterBottom={true}
                  >
                    {student.studentFirstName.toUpperCase()}{" "}
                    {student.studentLastName.toUpperCase()}
                  </Typography>
                  <Typography
                    className={classes.username}
                    color="textSecondary"
                    gutterBottom={true}
                  >
                    Username: {student.studentUsername}
                  </Typography>
                  <Typography
                    className={classes.username}
                    color="textSecondary"
                    gutterBottom={true}
                  >
                    Current Class: {student.currentClass}
                  </Typography>
                  {student?.moduleInfo?.map((moduleInfo) => (
                    <Typography
                      key={moduleInfo.id}
                      className={classes.username}
                      color="textSecondary"
                      gutterBottom={true}
                    >
                      Module: {moduleInfo.module.moduleName}
                      <br />
                      Instructor: {moduleInfo.instructor.instructorLastName}
                      <br />
                      Class: {moduleInfo.class.className}
                      <br />
                    </Typography>
                  ))}
                </CardContent>
                <CardActions
                  style={{
                    float: "right",
                  }}
                >
                  <UpdateStudent student={student} />
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
