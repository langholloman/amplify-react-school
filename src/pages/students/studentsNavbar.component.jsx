import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddStudent from "./addStudent.component";

const styles = (theme) => ({
  button: {
    margin: "theme.spacing(1)",
    float: "right",
  },
  root: {
    flexGrow: 1,
    borderRadius: "5px",
  },
  grow: {
    flexGrow: 1,
    justifyContent: "left",
    color: "#555555",
  },
});

class StudentsNavbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          color="default"
          style={{
            borderRadius: "5px",
            textAlign: "left",
          }}
        >
          <Toolbar>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              Students
            </Typography>
            <AddStudent />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

StudentsNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentsNavbar);
