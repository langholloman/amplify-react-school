import React, { Component } from "react";

// AWS Amplify API and GraphQL Operations
import { API, graphqlOperation } from "aws-amplify";

// Mutations
import * as mutations from "../../graphql/mutations";

// @mui Material UI
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

class AddStudent extends Component {
  state = {
    open: false,
    studentFirstName: "",
    studentLastName: "",
    studentUsername: "",
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });

    // window.location.reload();
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
    /*     console.log(
      "Name: " +
        this.state.studentFirstName +
        " " +
        this.state.studentLastName +
        "Username: " +
        this.state.studentUsername
    ); */
  };

  handleSubmit = async () => {
    const { studentFirstName, studentLastName, studentUsername } = this.state;
    const newStudent = {
      studentFirstName,
      studentLastName,
      studentUsername,
    };
    await API.graphql(
      graphqlOperation(mutations.createStudent, { input: newStudent })
    );
    this.setState({
      studentFirstName: "",
      studentLastName: "",
      studentUsername: "",
    });
    console.log(this.state.studentLastName + " added to the database");
    this.handleClose();
  };

  componentWillUnmount() {
    this.setState({
      studentFirstName: "",
      studentLastName: "",
      studentUsername: "",
    });
  }

  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Button
          variant="contained"
          color="primary"
          aria-label="add"
          onClick={this.handleClickOpen}
        >
          <span style={{ marginRight: "5px" }}> Add a New Student </span>
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a New Student</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="studentFirstName"
              name="studentFirstName"
              label="First Name"
              type="string"
              fullWidth
              onChange={this.handleChange("studentFirstName")}
            />
            <TextField
              margin="dense"
              id="studentLastName"
              name="studentLastName"
              label="Last Name"
              type="string"
              fullWidth
              onChange={this.handleChange("studentLastName")}
            />
            <TextField
              margin="dense"
              id="studentUsername"
              name="studentUsername"
              label="user.name"
              type="string"
              fullWidth
              onChange={this.handleChange("studentUsername")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddStudent;
