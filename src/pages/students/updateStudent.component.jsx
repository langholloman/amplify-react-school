import React, { Component } from "react";

// AWS Amplify imports for GraphQL and API calls to DynamoDB and mutations
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

// UpdateModuleInfo component
import UpdateModuleInfo from "./moduleInfo/updateModuleInfo.component";

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
      students: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Handle open and close of dialog
  handleClickOpen = () => {
    console.log("Current Student: ", this.props.student);
    this.setState({
      open: true,
      ...this.props.student,
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
        this.state.studentFirstName +
        " " +
        this.state.studentLastName +
        " " +
        this.state.studentUsername +
        " " +
        this.state.currentClass +
    ); */
  };

  // handleSubmit function
  handleSubmit = async () => {
    const student = {
      id: this.props.student.id,
      studentFirstName: this.state.studentFirstName,
      studentLastName: this.state.studentLastName,
      studentUsername: this.state.studentUsername,
      //currentClass: this.state.currentClass,
      course: this.state.course,
      school: this.state.school,
      organization: this.state.organization,
    };
    await API.graphql(
      graphqlOperation(mutations.updateStudent, {
        input: {
          ...student,
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
            fontSize: "20px",
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
            <Typography variant="h6">
              Course:{" "}
              <TextField
                margin="dense"
                id="course"
                placeholder={this.props.student.course}
                label={this.props.student.course}
                type="text"
                fullwidth="true"
                // value={this.state.course}
                onChange={this.handleChange("course")}
              />
            </Typography>
            <Typography variant="h6">
              School:{" "}
              <TextField
                margin="dense"
                id="school"
                placeholder={this.props.student.school}
                label={this.props.student.school}
                type="text"
                fullwidth="true"
                // value={this.state.school}
                onChange={this.handleChange("school")}
              />
            </Typography>
            <Typography variant="h6">
              Organization:{" "}
              <TextField
                margin="dense"
                id="organization"
                placeholder={this.props.student.organization}
                label={this.props.student.organization}
                type="text"
                fullwidth="true"
                // value={this.state.organization}
                onChange={this.handleChange("organization")}
              />
            </Typography>
            <UpdateModuleInfo student={this.props.student} />
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
