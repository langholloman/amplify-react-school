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
      students: [],
      studentFirstName: "",
      studentLastName: "",
      studentUsername: "",
      currentClass: "",
      moduleName: "",
      moduleShortName: "",
      moduleInfo: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Handle change in state

  // Handle open and close of dialog
  handleClickOpen = () => {
    console.log("Current Student: ", this.props.student);
    this.setState({
      open: true,
      ...this.props.student,
      /* studentFirstName: this.props.student.studentFirstName,
      studentLastName: this.props.student.studentLastName,
      studentUsername: this.props.student.studentUsername,
      currentClass: this.props.student.currentClass,
      moduleInfo: this.props.student.moduleInfo,
      moduleName: this.props.student.moduleInfo?.module?.moduleName,
      moduleShortName: this.props.student.moduleInfo?.module?.moduleShortName, */
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
        this.state.moduleName
    ); */
  };

  // handleSubmit function
  handleSubmit = async () => {
    console.log("Current Student: ", this.props.student);
    console.log("Current Student: ", this.state);
    const student = {
      ...this.state,
      /* studentFirstName: this.state.studentFirstName,
      studentLastName: this.state.studentLastName,
      studentUsername: this.state.studentUsername,
      currentClass: this.state.currentClass, */
      // moduleName: this.state.moduleName,
      // moduleShortName: this.state.moduleShortName,
    };
    console.log("Student: ", student);
    await API.graphql(
      graphqlOperation(mutations.updateStudent, {
        input: {
          ...this.props.student,
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
              Current Class:{" "}
              <TextField
                margin="dense"
                id="currentClass"
                placeholder={this.props.student.currentClass}
                label={this.props.student.currentClass}
                type="text"
                fullwidth="true"
                // value={this.state.currentClass}
                onChange={this.handleChange("currentClass")}
              />
            </Typography>

            {this.props.student.moduleInfo?.map((module) => (
              <Typography variant="h6" key={module.id}>
                Module Name:{" "}
                <TextField
                  margin="dense"
                  id="moduleName"
                  placeholder={module.moduleName}
                  label={module.moduleName}
                  type="text"
                  fullwidth="true"
                  // value={this.state.moduleName}
                  onChange={this.handleChange("moduleName")}
                />
                <TextField
                  margin="dense"
                  id="moduleShortName"
                  placeholder={module.moduleShortName}
                  label={module.moduleShortName}
                  type="text"
                  fullwidth="true"
                  // value={this.state.moduleShortName}
                  onChange={this.handleChange("moduleShortName")}
                />
              </Typography>
            ))}
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
