import React, { Component } from "react";
/* import PropTypes from "prop-types"; */

// AWS Amplify and GraphQL API and Mutations
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
/* import * as mutations from "../../graphql/mutations";
import {
  onCreateStudent,
  onUpdateStudent,
  onDeleteStudent,
} from "../../graphql/subscriptions"; */

/* // Students Navbar Component
import StudentsNavbar from "../students/studentsNavbar.component";
// Update Student Component
import UpdateStudent from "../students/updateStudent.component";
// Delete Student Component
import DeleteStudent from "../students/deleteStudent.component"; */

// @mui Material-UI
import { withStyles } from "@mui/styles";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const styles = (theme) => ({
  card: {
    maxWidth: "100%",
    margin: "auto",
    marginTop: "10rem",
    marginBottom: "2rem",
  },
  title: {
    variant: "h5",
  },
  pos: {
    marginBottom: 12,
  },
});

// query listStudents and map through ALL of the students and nested data
class ManageStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  // get all students from the database
  async componentDidMount() {
    try {
      const students = await API.graphql(
        graphqlOperation(queries.listStudents)
      );
      this.setState({
        students: students.data.listStudents.items,
      });
      console.log(students);
    } catch (err) {
      console.log("error fetching students: ", err);
    }
  }

  // Render the ManageStudents Component
  render() {
    const { classes } = this.props;
    const { students } = this.state;

    return (
      <div>
        <Grid container spacing={3}>
          {/* <StudentsNavbar /> */}
          {/* <UpdateStudent /> */}
          {/* <DeleteStudent /> */}
          {students?.map((student) => (
            <Grid item xs={12} sm={6} md={4} key={student.id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    color="textSecondary"
                    gutterBottom
                  >
                    {student.studentFirstName} {student.studentLastName}
                  </Typography>
                  <Typography variant="p1" component="p1">
                    Current Class: {student.currentClass}
                  </Typography>
                  <br />
                  <br />
                  {student?.moduleInfo?.map((moduleInfo) => (
                    <Typography key={moduleInfo.id}>
                      Module: {moduleInfo.module.moduleName} <br />
                      Instructor: {
                        moduleInfo.instructor.instructorLastName
                      }{" "}
                      <br />
                      Class: {moduleInfo.class.className}
                      <br />
                      <br />
                    </Typography>
                  ))}{" "}
                  <br />
                  <Typography className={classes.pos} color="textSecondary">
                    {student.course}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {student.createdAt}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ManageStudents);
