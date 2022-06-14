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
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

class AddCalendarDay extends Component {
  state = {
    open: false,
    day: "",
    dayType: "",
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
    const { day, dayType } = this.state;
    const newDay = {
      day: new Date(day).toISOString(),
      dayType,
    };
    await API.graphql(
      graphqlOperation(mutations.createCalendar, { input: newDay })
    );
    this.setState({
      day: "",
      dayType: "",
    });
    console.log(this.state.day + " added to the database");
    this.handleClose();
  };

  componentWillUnmount() {
    this.setState({
      day: "",
      dayType: "",
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
          Add a New Calendar Day
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Add a New Calendar Day
          </DialogTitle>

          <DialogContent>
            <TextField
              xs={6}
              style={{ width: "250px", paddingRight: "20px" }}
              margin="dense"
              id="day"
              name="day"
              // label="Class Convene Date"
              helperText="Day"
              type="datetime-local"
              fullWidth
              onChange={this.handleChange("day")}
              defaultValue=""
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="dayType-select-lable">Type of Day</InputLabel>
              <Select
                style={{ width: "250px", paddingLeft: "10px" }}
                margin="dense"
                // labelId="shiftPeriod"
                id="dayType"
                // value={shiftPeriod}
                label="Type of Day"
                onChange={this.handleChange("dayType")}
                defaultValue=""
              >
                <MenuItem value={"Class"}>Class</MenuItem>
                <MenuItem value={"Weekend"}>Weekend</MenuItem>
                <MenuItem value={"Holiday"}>Holiday</MenuItem>
                <MenuItem value={"Non-Training"}>Non-Training</MenuItem>
                <MenuItem value={"Training Cancelled"}>
                  Training Cancelled
                </MenuItem>
              </Select>
            </FormControl>
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

export default AddCalendarDay;
