import React, { Component } from "react";
import PropTypes from "prop-types";

// AWS Amplify and GraphQL API and Mutations
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";

// @mui Material-UI
import { withStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const styles = {
  card: {
    minWidth: 200,
  },
  name: {
    fontSize: 20,
  },
  username: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "inherit",
    padding: "10px",
  },
};

class ListStudents extends Component {
  state = {
    students: [],
  };

  componentDidMount = () => {
    this.getStudents();
  };

  getStudents = () => {
    API.graphql(graphqlOperation(queries.listStudents)).then((res) => {
      this.setState({ students: res.data.listStudents.items });
    });
  };

  componentDidUpdate() {
    // set timer to update every 5 seconds
    if (this.isCancelled) {
      return null;
    }
    setTimeout(() => {
      this.getStudents();
    }, 5000);
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  render() {
    const { classes } = this.props;
    const { students } = this.state;
    console.log(students);
    return (
      <div className={classes.root}>
        <Grid container className={classes.root} spacing={5}>
          {students.map((student) => (
            <Grid key={student.id} item>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.name}>
                    {student.studentFirstName} {student.studentLastName}
                  </Typography>
                  <Typography className={classes.username} component="h6">
                    {student.studentUsername}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
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
