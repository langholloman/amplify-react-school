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
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  grow: {
    flexGrow: 1,
    fontWeight: "bold",
    paddingTop: "5px",
    paddingBottom: "5px",
    //justifyContent: "left",
    //color: "#ffffff",
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
            //width: "100%",
            borderRadius: "5px",
            textAlign: "left",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              STUDENT <br /> MANAGEMENT
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
