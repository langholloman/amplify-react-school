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
import UpdateModuleInfo from "./moduleInfo/updateModuleInfo.component";
// Delete Student Component
import DeleteStudent from "./deleteStudent.component";

// @mui Material-UI
import { withStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
import LinearProgress from "@mui/material/LinearProgress";
// import { Search } from "@mui/icons-material";

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
    marginTop: "3rem",
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
    // Get all students from the database with paging and sorting options (default) and store in state as students and set nextToken
    const students = await API.graphql(
      graphqlOperation(queries.listStudents, {
        // limit: 10,
        sortDirection: "ASC",
        nextToken: this.state.nextToken,
      })
    );

    // sort students by currentClass
    this.setState({
      students: students.data.listStudents.items.sort((a, b) => {
        if (a.currentClass < b.currentClass) {
          return 1;
        }
        if (a.currentClass > b.currentClass) {
          return -1;
        }
        return 0;
      }),
      isLoading: false,
    });
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
  filterStudents(students, searchQuery) {
    return students.filter((student) => {
      return (
        student.currentClass?.className.toLowerCase().includes(searchQuery) ||
        student.studentLastName?.toLowerCase().includes(searchQuery)
      );
    });
  }

  handleChangeClass(event) {
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
            item={true}
            xs={12}
            style={{
              marginTop: "2rem",
            }}
          >
            <TextField
              id="search-students"
              label="Search by Current Class or Last Name"
              type="search"
              name="searchQuery"
              variant="outlined"
              onChange={(event) => this.handleChangeClass(event)}
              style={{
                width: "30rem",
                marginBottom: "2rem",
              }}
              placeholder="Search by Current Class or Last Name"
            />
          </Grid>
          {this.filterStudents(this.state.students, this.state.searchQuery).map(
            (student) => (
              <Grid
                item={true}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={student.id}
                label="Student Listings"
                placeholder="Student Listings"
              >
                <Card className={classes.card}>
                  <CardActions>
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
                      {student.currentClass.className}
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
            )
          )}
        </Grid>
      </div>
    );
  }
}

ListStudents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListStudents);
