import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddInstructor from "./addInstructor.component";
import PersonIcon from "@mui/icons-material/Person";

const styles = (theme) => ({
  button: {
    margin: "theme.spacing(1)",
    float: "right",
  },
  root: {
    flexGrow: 1,
    borderRadius: "5px",
    paddingLeft: "2%",
  },
  grow: {
    flexGrow: 1,
    //justifyContent: "left",
    //color: "#ffffff",
  },
});

class InstructorsNavbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          color="default"
          style={{
            width: "98%",
            borderRadius: "5px",
            textAlign: "left",
          }}
        >
          <Toolbar>
            <PersonIcon fontSize="large" />
            <Typography variant="h4" color="inherit" className={classes.grow}>
              Staff
            </Typography>
            <AddInstructor />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

InstructorsNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InstructorsNavbar);
