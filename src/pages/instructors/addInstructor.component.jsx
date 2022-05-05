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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

class AddInstructor extends Component {
  state = {
    open: false,
    instructorFirstName: "",
    instructorLastName: "",
    instructorUsername: "",
    role: "",
    status: "",
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
  };

  handleSubmit = async () => {
    const {
      instructorFirstName,
      instructorLastName,
      instructorUsername,
      role,
      status,
    } = this.state;
    const newInstructor = {
      instructorFirstName,
      instructorLastName,
      instructorUsername,
      role,
      status,
    };
    await API.graphql(
      graphqlOperation(mutations.createInstructor, { input: newInstructor })
    );
    this.setState({
      instructorFirstName: "",
      instructorLastName: "",
      instructorUsername: "",
      role: "",
      status: "",
    });
    console.log(this.state.instructorLastName + " added to the database");
    this.handleClose();
  };

  componentWillUnmount() {
    this.setState({
      instructorFirstName: "",
      instructorLastName: "",
      instructorUsername: "",
      role: "",
      status: "",
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
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="role-select-lable">Role</InputLabel>
              <Select
                style={{ width: "250px", paddingLeft: "10px" }}
                margin="dense"
                // labelId="shiftPeriod"
                id="role"
                // value={shiftPeriod}
                label="role"
                onChange={this.handleChange("role")}
                defaultValue=""
              >
                <MenuItem value={"INSTRUCTOR"}>INSTRUCTOR</MenuItem>
                <MenuItem value={"MO"}>MO</MenuItem>
                <MenuItem value={"SME"}>SME</MenuItem>
                <MenuItem value={"PMO"}>PMO</MenuItem>
                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="status-select-lable">Status</InputLabel>
              <Select
                style={{ width: "250px", paddingLeft: "10px" }}
                margin="dense"
                // labelId="shiftPeriod"
                id="status"
                // value={shiftPeriod}
                label="status"
                onChange={this.handleChange("status")}
                defaultValue=""
              >
                <MenuItem value={"ACTIVE"}>ACTIVE</MenuItem>
                <MenuItem value={"ON-LEAVE"}>ON-LEAVE</MenuItem>
                <MenuItem value={"QUALIFYING"}>QUALIFYING</MenuItem>
                <MenuItem value={"DEPARTED"}>DEPARTED</MenuItem>
              </Select>
            </FormControl>
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
