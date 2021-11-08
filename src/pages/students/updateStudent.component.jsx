import React, { Component } from "react";

// AWS Amplify imports for GraphQL and API calls to DynamoDB and mutations
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

// Material UI imports
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

// Create UpdateStudent class component
class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      studentFirstName: "",
      studentLastName: "",
      studentUsername: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Handle change in state

  // Handle open and close of dialog
  handleClickOpen = () => {
    console.log("Current Student: ", this.props.student);
    this.setState({
      open: true,
      studentFirstName: this.props.student.firstName,
      studentLastName: this.props.student.lastName,
      studentUsername: this.props.student.username,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // Handle change of input fields
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
    /*     console.log(
      "Name: " +
        this.state.studentFirstName +
        " " +
        this.state.studentLastName +
        " " +
        this.state.studentUsername
    ); */
  };

  // Handle update of student
  handleSubmit = async () => {
    // Update student
    await API.graphql(
      graphqlOperation(mutations.updateStudent, {
        input: {
          id: this.props.student.id,
          studentFirstName: this.state.studentFirstName,
          studentLastName: this.state.studentLastName,
          studentUsername: this.state.studentUsername,
        },
      })
    );
    // Close dialog
    this.handleClose();
    // Refresh student list
    // this.props.refreshStudents();
    // window.location.reload();
  };

  // Render dialog
  render() {
    return (
      <div>
        <EditIcon
          onClick={this.handleClickOpen}
          style={{
            cursor: "pointer",
            color: "#71C2FF",
          }}
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Update {this.props.student.studentLastName}
          </DialogTitle>
          <DialogContent>
            <Typography variant="h6">
              First Name:{" "}
              <TextField
                autoFocus
                margin="dense"
                id="studentFirstName"
                placeholder={this.props.student.studentFirstName}
                label={this.props.student.studentFirstName}
                type="text"
                fullwidth="true"
                // value={this.state.studentFirstName}
                onChange={this.handleChange("studentFirstName")}
              />
            </Typography>
            <Typography variant="h6">
              Last Name:{" "}
              <TextField
                margin="dense"
                id="studentLastName"
                placeholder={this.props.student.studentLastName}
                label={this.props.student.studentLastName}
                type="text"
                fullwidth="true"
                // value={this.state.studentLastName}
                onChange={this.handleChange("studentLastName")}
              />
            </Typography>
            <Typography variant="h6">
              Username:{" "}
              <TextField
                margin="dense"
                id="studentUsername"
                placeholder={this.props.student.studentUsername}
                label={this.props.student.studentUsername}
                type="text"
                fullwidth="true"
                // value={this.state.studentUsername}
                onChange={this.handleChange("studentUsername")}
              />
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default UpdateStudent;
