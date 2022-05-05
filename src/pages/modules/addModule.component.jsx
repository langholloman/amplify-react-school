import React, { Component } from "react";

// AWS Amplify API and GraphQL Operations
import { API, graphqlOperation } from "aws-amplify";

// Mutations
import * as mutations from "../../graphql/mutations";

// @mui Material UI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
/* import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox"; */

class AddModule extends Component {
  state = {
    open: false,
    moduleName: "",
    moduleShortName: "",
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
    const { moduleName, moduleShortName } = this.state;
    const newModule = {
      moduleName,
      moduleShortName,
    };
    await API.graphql(
      graphqlOperation(mutations.createModule, { input: newModule })
    );
    this.setState({
      moduleName: "",
      moduleShortName: "",
    });
    console.log(this.state.moduleShortName + " added to the database");
    this.handleClose();
  };

  componentWillUnmount() {
    this.setState({
      moduleName: "",
      moduleShortName: "",
    });
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          aria-label="add"
          onClick={this.handleClickOpen}
          startIcon={<AddIcon />}
        >
          Add a New Module
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a New Module</DialogTitle>

          <DialogContent>
            <TextField
              xs={12}
              style={{
                width: "150px",
                //paddingRight: "225px",
              }}
              autoFocus
              margin="dense"
              id="moduleShortName"
              name="moduleShortName"
              label="Module Number"
              helperText="example: Mod 01"
              type="string"
              fullWidth
              onChange={this.handleChange("moduleShortName")}
            />
            <br />
            <TextField
              xs={12}
              style={{
                width: "450px",
                //paddingRight: "225px",
              }}
              // autoFocus
              margin="dense"
              id="moduleName"
              name="moduleName"
              label="Module Name"
              type="string"
              fullWidth
              onChange={this.handleChange("moduleName")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddModule;
