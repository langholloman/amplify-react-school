import React, { Component } from "react";

// AWS Amplify API and GraphQL Operations
import { API, graphqlOperation } from "aws-amplify";

// Mutations
import * as mutations from "../../graphql/mutations";

// @mui Material UI
// import Box from "@mui/material/Box";
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
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

class AddClass extends Component {
  state = {
    open: false,
    className: "",
    shiftPeriod: "",
    classConveneDate: "",
    classProjectedDate: "",
    building: "",
    room: "",
    location: "",
    status: "",
    graduated: "",
    offsiteClass: "",
    classAdvisor: "",
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
      className,
      shiftPeriod,
      classConveneDate,
      classProjectedDate,
      building,
      room,
      location,
      status,
      graduated,
      offsiteClass,
      classAdvisor,
    } = this.state;
    const newClass = {
      className,
      shiftPeriod,
      classConveneDate: new Date(classConveneDate).toISOString(),
      classProjectedDate: new Date(classProjectedDate).toISOString(),
      building,
      room,
      location,
      status,
      graduated,
      offsiteClass,
      classAdvisor,
    };
    await API.graphql(
      graphqlOperation(mutations.createClass, { input: newClass })
    );
    this.setState({
      className: "",
      shiftPeriod: "",
      classConveneDate: "",
      classProjectedDate: "",
      building: "",
      room: "",
      location: "",
      status: "",
      graduated: "",
      offsite: "",
      classAdvisor: "",
    });
    console.log(this.state.className + " added to the database");
    this.handleClose();
  };

  componentWillUnmount() {
    this.setState({
      className: "",
      shiftPeriod: "",
      classConveneDate: "",
      classProjectedDate: "",
      building: "",
      room: "",
      location: "",
      status: "",
      graduated: "",
      offsite: "",
      classAdvisor: "",
    });
  }

  render() {
    /*     const {
      open,
      className,
      shiftPeriod,
      classConveneDate,
      classProjectedDate,
      building,
      room,
      location,
      status,
      graduated,
      offsite,
      classAdvisor,
    } = this.state; */

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          aria-label="add"
          onClick={this.handleClickOpen}
          startIcon={<AddIcon />}
        >
          Add a New Class
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a New Class</DialogTitle>

          <DialogContent>
            <TextField
              // item
              xs={6}
              style={{
                width: "150px",
                paddingRight: "225px",
              }}
              autoFocus
              margin="dense"
              id="className"
              name="className"
              label="Class Name"
              type="string"
              fullWidth
              // value={className}
              onChange={this.handleChange("className")}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="shiftPeriod-select-label">
                Shift / Period
              </InputLabel>
              <Select
                style={{ width: "120px" }}
                margin="dense"
                // labelId="shiftPeriod-select-label"
                id="shiftPeriod"
                // value={shiftPeriod}
                label="Shift / Period"
                onChange={this.handleChange("shiftPeriod")}
                defaultValue=""
              >
                <MenuItem value={"ALPHA"}>ALPHA</MenuItem>
                <MenuItem value={"BRAVO"}>BRAVO</MenuItem>
              </Select>
            </FormControl>

            <br />
            <br />
            <br />
            <TextField
              xs={6}
              style={{ width: "250px", paddingRight: "20px" }}
              margin="dense"
              id="classConveneDate"
              name="classConveneDate"
              // label="Class Convene Date"
              helperText="Convene Date"
              type="datetime-local"
              fullWidth
              // value={classConveneDate}
              onChange={this.handleChange("classConveneDate")}
              defaultValue=""
            />
            <TextField
              xs={6}
              style={{ width: "250px", paddingRight: "20px" }}
              margin="dense"
              id="classProjectedDate"
              name="classProjectedDate"
              // label="Class Projected Date"
              helperText="Projected Graduation Date"
              type="datetime-local"
              fullWidth
              // value={classProjectedDate}
              onChange={this.handleChange("classProjectedDate")}
              defaultValue=""
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="building-select-lable">Building</InputLabel>
              <Select
                style={{ width: "250px", paddingLeft: "10px" }}
                margin="dense"
                // labelId="shiftPeriod"
                id="building"
                // value={shiftPeriod}
                label="Building"
                onChange={this.handleChange("building")}
                defaultValue=""
              >
                <MenuItem value={"512"}>512</MenuItem>
                <MenuItem value={"514"}>514</MenuItem>
                <MenuItem value={"DHS"}>DHS</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="room-select-lable">Room</InputLabel>
              <Select
                style={{ width: "250px", paddingLeft: "10px" }}
                margin="dense"
                // labelId="shiftPeriod"
                id="room"
                // value={shiftPeriod}
                label="Room"
                onChange={this.handleChange("room")}
                defaultValue=""
              >
                <MenuItem value={"108"}>108</MenuItem>
                <MenuItem value={"111"}>111</MenuItem>
                <MenuItem value={"112"}>112</MenuItem>
                <MenuItem value={"114"}>114</MenuItem>
                <MenuItem value={"122"}>122</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="location-select-label">Location</InputLabel>
              <Select
                style={{ width: "250px", paddingLeft: "10px" }}
                margin="dense"
                // labelId="shiftPeriod"
                id="location"
                // value={shiftPeriod}
                label="Location"
                onChange={this.handleChange("location")}
                defaultValue=""
              >
                <MenuItem value={"Pensacola"}>Pensacola</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
            <br />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="status-select-label">Status</InputLabel>
              <Select
                style={{ width: "250px", paddingLeft: "10px" }}
                margin="dense"
                // labelId="shiftPeriod"
                id="status"
                // value={shiftPeriod}
                label="Status"
                onChange={this.handleChange("status")}
                defaultValue=""
              >
                <MenuItem value={"NOT-STARTED"}>NOT-STARTED</MenuItem>
                <MenuItem value={"CURRENT"}>CURRENT</MenuItem>
                <MenuItem value={"COMPLETED"}>COMPLETED</MenuItem>
                <MenuItem value={"ON-HOLD"}>ON-HOLD</MenuItem>
                <MenuItem value={"CANCELLED"}>CANCELLED</MenuItem>
              </Select>
            </FormControl>
            <br />
            <FormControlLabel
              control={<Checkbox />}
              label="Graduated"
              onChange={this.handleChange("graduated")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Offsite Class"
              onChange={this.handleChange("offsite")}
            />
            <TextField
              margin="dense"
              id="classAdvisor"
              name="classAdvisor"
              label="Class Advisor"
              type="string"
              fullWidth
              // value={classAdvisor}
              onChange={this.handleChange("classAdvisor")}
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

export default AddClass;
