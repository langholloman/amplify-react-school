import React, { Component } from "react";

// AWS Amplify imports for GraphQL and API calls to DynamoDB and mutations
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";
import * as queries from "../../../graphql/queries";

// Material UI imports
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

// Create AddNewModuleInfo class component
class AddNewModuleInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: this.props.student,
      moduleShortName: "",
      moduleName: "",
      className: "",
      instructorLastName: "",
      instructorFirstName: "",
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Handle the close of the dialog
  handleClose = () => {
    this.setState({ open: false });
  };

  // Handle open and close of dialog
  handleClickOpen = () => {
    console.log("Current Student: ", this.props.student);
    this.setState({
      open: true,
      ...this.props.student,
    });
  };

  // Handle change of input fields
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  // Handle the submit of the form
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Current Student: ", this.props.student.id);
    // Create a new moduleInfo object
    const moduleInfo = {
      studentId: this.props.student.id,
      moduleShortName: this.state.moduleShortName,
      moduleName: this.state.moduleName,
      className: this.state.className,
      instructorLastName: this.state.instructorLastName,
      instructorFirstName: this.state.instructorFirstName,
    };

    // use the mutation createModuleInfo to add the new moduleInfo to the database
    await API.graphql(
      graphqlOperation(mutations.createModuleInfo, { input: moduleInfo })
    );

    console.log("Module Info Added", moduleInfo);
    // Close the dialog
    this.handleClose();
  };

  async componentWillUnmount() {
    console.log("AddNewModuleInfo componentWillUnmount");
    this.setState({
      open: false,
      moduleInfos: [],
    });
    console.log("AddNewModuleInfo componentWillUnmount", this.state.moduleInfo);
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
          startIcon={<EditIcon />}
        >
          Add New Module Info
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Module Info</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="moduleShortName"
              label="Module Short Name"
              type="text"
              fullWidth
              value={this.state.moduleShortName}
              onChange={this.handleChange("moduleShortName")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="moduleName"
              label="Module Name"
              type="text"
              fullWidth
              value={this.state.moduleName}
              onChange={this.handleChange("moduleName")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="className"
              label="Class Name"
              type="text"
              fullWidth
              value={this.state.className}
              onChange={this.handleChange("className")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="instructorLastName"
              label="Instructor Last Name"
              type="text"
              fullWidth
              value={this.state.instructorLastName}
              onChange={this.handleChange("instructorLastName")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="instructorFirstName"
              label="Instructor First Name"
              type="text"
              fullWidth
              value={this.state.instructorFirstName}
              onChange={this.handleChange("instructorFirstName")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleSubmit}
              color="primary"
              variant="contained"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddNewModuleInfo;
