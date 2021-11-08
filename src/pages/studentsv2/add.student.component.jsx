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
    studentUserName: "",
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.forceUpdate();
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
    //console.log(this.state);
  };

  handleSubmit = (e) => {
    this.setState({ open: false });
    e.preventDefault();
    const { studentFirstName, studentLastName, studentUserName } = this.state;
    const newStudent = {
      studentFirstName: studentFirstName,
      studentLastName: studentLastName,
      studentUsername: studentUserName,
    };
    API.graphql(
      graphqlOperation(mutations.createStudent, { input: newStudent })
    )
      .then(() => {
        this.setState({
          studentFirstName: "",
          studentLastName: "",
          studentUserName: "",
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          onClick={this.handleClickOpen}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Student</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="studentFirstName"
              label="First Name"
              type="text"
              fullWidth
              onChange={this.handleChange("studentFirstName")}
            />
            <TextField
              margin="dense"
              id="studentLastName"
              label="Last Name"
              type="text"
              fullWidth
              onChange={this.handleChange("studentLastName")}
            />
            <TextField
              margin="dense"
              id="studentUserName"
              label="User Name"
              type="text"
              fullWidth
              onChange={this.handleChange("studentUserName")}
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
