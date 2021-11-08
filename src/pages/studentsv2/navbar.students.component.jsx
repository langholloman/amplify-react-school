import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AddStudent from "./add.student.component";

const styles = (theme) => ({
  button: {
    margin: "theme.spacing.unit",
    float: "right",
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

class StudentsNavbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
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
