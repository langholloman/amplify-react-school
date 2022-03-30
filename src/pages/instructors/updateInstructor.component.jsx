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

// Create UpdateInstructor class component
class UpdateInstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      instructors: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Handle open and close of dialog
  handleClickOpen = () => {
    console.log("Current Instructor: ", this.props.instructor);
    this.setState({
      open: true,
      ...this.props.instructor,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // Handle change of input fields
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event?.target?.value,
    });
    /*     console.log(
      "Name: " +
        this.state.instructorFirstName +
        " " +
        this.state.instructorLastName +
        " " +
        this.state.instructorUsername +
    ); */
  };

  // handleSubmit function
  handleSubmit = async () => {
    const instructor = {
      id: this.props.instructor.id,
      instructorFirstName: this.state.instructorFirstName,
      instructorLastName: this.state.instructorLastName,
      instructorUsername: this.state.instructorUsername,
    };
    await API.graphql(
      graphqlOperation(mutations.updateInstructor, {
        input: {
          ...instructor,
        },
      })
    );
    // this.props.refresh();
    this.handleClose();
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
            Update {this.props.instructor.instructorLastName}
          </DialogTitle>
          <DialogContent>
            <Typography variant="h6">
              First Name:{" "}
              <TextField
                autoFocus
                margin="dense"
                id="instructorFirstName"
                placeholder={this.props.instructor.instructorFirstName}
                label={this.props.instructor.instructorFirstName}
                type="text"
                fullwidth="true"
                // value={this.state.instructorFirstName}
                onChange={this.handleChange("instructorFirstName")}
              />
            </Typography>
            <Typography variant="h6">
              Last Name:{" "}
              <TextField
                margin="dense"
                id="instructorLastName"
                placeholder={this.props.instructor.instructorLastName}
                label={this.props.instructor.instructorLastName}
                type="text"
                fullwidth="true"
                // value={this.state.instructorLastName}
                onChange={this.handleChange("instructorLastName")}
              />
            </Typography>
            <Typography variant="h6">
              Username:{" "}
              <TextField
                margin="dense"
                id="instructorUsername"
                placeholder={this.props.instructor.instructorUsername}
                label={this.props.instructor.instructorUsername}
                type="text"
                fullwidth="true"
                // value={this.state.instructorUsername}
                onChange={this.handleChange("instructorUsername")}
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

export default UpdateInstructor;
