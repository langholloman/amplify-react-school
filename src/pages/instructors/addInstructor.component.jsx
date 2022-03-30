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

class AddInstructor extends Component {
  state = {
    open: false,
    instructorFirstName: "",
    instructorLastName: "",
    instructorUsername: "",
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
        this.state.instructorFirstName +
        " " +
        this.state.instructorLastName +
        "Username: " +
        this.state.instructorUsername
    ); */
  };

  handleSubmit = async () => {
    const { instructorFirstName, instructorLastName, instructorUsername } =
      this.state;
    const newInstructor = {
      instructorFirstName,
      instructorLastName,
      instructorUsername,
    };
    await API.graphql(
      graphqlOperation(mutations.createInstructor, { input: newInstructor })
    );
    this.setState({
      instructorFirstName: "",
      instructorLastName: "",
      instructorUsername: "",
    });
    console.log(this.state.instructorLastName + " added to the database");
    this.handleClose();
  };

  componentWillUnmount() {
    this.setState({
      instructorFirstName: "",
      instructorLastName: "",
      instructorUsername: "",
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
          <span style={{ marginRight: "5px" }}> Add a New Instructor </span>
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a New Instructor</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="instructorFirstName"
              name="instructorFirstName"
              label="First Name"
              type="string"
              fullWidth
              onChange={this.handleChange("instructorFirstName")}
            />
            <TextField
              margin="dense"
              id="instructorLastName"
              name="instructorLastName"
              label="Last Name"
              type="string"
              fullWidth
              onChange={this.handleChange("instructorLastName")}
            />
            <TextField
              margin="dense"
              id="instructorUsername"
              name="instructorUsername"
              label="user.name"
              type="string"
              fullWidth
              onChange={this.handleChange("instructorUsername")}
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

export default AddInstructor;
