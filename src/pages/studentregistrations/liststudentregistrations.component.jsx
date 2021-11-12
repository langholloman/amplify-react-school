import React, { Component } from "react";

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
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LinearProgress from "@mui/material/LinearProgress";

class ListStudentModuleRegistrations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentModuleRegistrations: [],
      isLoading: true,
      error: null,
      search: "",
      searchBy: "",
      searchByOptions: [
        {
          value: "student.studentLastName",
          label: "Student",
        },
        {
          value: "module.moduleName",
          label: "Module",
        },
        {
          value: "class.className",
          label: "Class",
        },
      ],
    };
  }

  async componentDidMount() {
    try {
      const studentModuleRegistrations = await API.graphql(
        graphqlOperation(queries.listStudentModuleRegistrations)
      );

      this.setState({
        studentModuleRegistrations:
          studentModuleRegistrations.data.listStudentModuleRegistrations.items,
        isLoading: false,
      });
      console.log(
        studentModuleRegistrations.data.listStudentModuleRegistrations.items
      );
    } catch (err) {
      this.setState({ error: err });
    }
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleChangeSearchBy = (event) => {
    this.setState({ searchBy: event.target.value });
  };

  handleChangeSearchByOptions = (event, value) => {
    this.setState({ searchBy: value });
  };

  render() {
    const { classes } = this.props;
    const {
      studentModuleRegistrations,
      isLoading,
      error,
      search,
      //searchBy,
      searchByOptions,
    } = this.state;
    const filteredStudentModuleRegistrations =
      studentModuleRegistrations.filter((studentModuleRegistration) => {
        return (
          studentModuleRegistration.student.studentLastName
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          studentModuleRegistration.module.moduleName
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          studentModuleRegistration.class.className
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      });
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          style={{
            marginBottom: "20px",
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              color="#444444"
              textAlign="left"
              marginTop="20px"
            >
              Student Module Registrations
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
              id="search"
              options={searchByOptions}
              getOptionLabel={(option) => option.label}
              onChange={this.handleChangeSearchByOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search By"
                  variant="outlined"
                  fullWidth
                  onChange={this.handleChangeSearchBy}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="search"
              label="Search"
              variant="outlined"
              fullWidth
              onChange={this.handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {isLoading ? (
            <Grid item xs={12}>
              <LinearProgress />
            </Grid>
          ) : error ? (
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                {error.message}
              </Typography>
            </Grid>
          ) : (
            filteredStudentModuleRegistrations.map(
              (studentModuleRegistration) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={studentModuleRegistration.id}
                >
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        {studentModuleRegistration.student.studentFirstName}{" "}
                        {studentModuleRegistration.student.studentLastName}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {studentModuleRegistration.module.moduleName}
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        {studentModuleRegistration.class.className}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {studentModuleRegistration.student.studentEmail}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Typography variant="body2" component="p">
                        {studentModuleRegistration.student.studentPhone}
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              )
            )
          )}
        </Grid>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "4rem",
    padding: "2rem",
  },
  table: {
    width: "100%",
  },
});

export default withStyles(styles)(ListStudentModuleRegistrations);
