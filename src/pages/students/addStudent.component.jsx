import React, { Component } from "react";

// AWS Amplify API and GraphQL Operations
import { API, graphqlOperation } from "aws-amplify";

// Queries
import * as queries from "../../graphql/queries";

// Mutations
import * as mutations from "../../graphql/mutations";

// @mui Material UI
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
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

class AddStudent extends Component {
  state = {
    open: false,
    studentFirstName: "",
    studentLastName: "",
    studentUsername: "",
    status: "",
    course: "",
    school: "",
    organization: "",
    rateRank: "",
    newAccession: "",
    mandatoryStudy: "",
    gpaw: "",
    arbPending: "",
    currentClassID: "",
    classes: [],
  };

  async componentDidMount() {
    const { data } = await API.graphql(graphqlOperation(queries.listClasses));
    const { items: classes } = data.listClasses;
    this.setState({ classes });
    // console.log("classes", classes);
  }

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
        this.state.studentFirstName +
        " " +
        this.state.studentLastName +
        "Username: " +
        this.state.studentUsername
    ); */
  };

  handleSubmit = async () => {
    const {
      studentFirstName,
      studentLastName,
      studentUsername,
      status,
      course,
      school,
      organization,
      rateRank,
      newAssession,
      mandotoryStudy,
      gpaw,
      arbPending,
      currentClassID,
    } = this.state;
    const newStudent = {
      studentFirstName,
      studentLastName,
      studentUsername,
      status,
      course,
      school,
      organization,
      rateRank,
      newAssession,
      mandotoryStudy,
      gpaw,
      arbPending,
      currentClassID,
    };
    await API.graphql(
      graphqlOperation(mutations.createStudent, { input: newStudent })
    );
    this.setState({
      studentFirstName: "",
      studentLastName: "",
      studentUsername: "",
      status: "",
      course: "",
      school: "",
      organization: "",
      rateRank: "",
      newAssession: "",
      mandotoryStudy: "",
      gpaw: "",
      arbPending: "",
      currentClassID: "",
    });
    // console.log(this.state.studentLastName + " added to students");
    this.handleClose();
  };

  componentWillUnmount() {
    this.setState({
      studentFirstName: "",
      studentLastName: "",
      studentUsername: "",
      status: "",
      course: "",
      school: "",
      organization: "",
      rateRank: "",
      newAssession: "",
      mandotoryStudy: "",
      gpaw: "",
      arbPending: "",
      currentClassID: "",
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
          <span style={{ marginRight: "5px" }}> Add a New Student </span>
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a New Student</DialogTitle>
          <DialogContent>
            <TextField
              xs={6}
              style={{
                width: "250px",
                paddingRight: "20px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              autoFocus
              margin="dense"
              id="studentFirstName"
              name="studentFirstName"
              label="First Name"
              type="string"
              fullWidth
              onChange={this.handleChange("studentFirstName")}
            />
            <TextField
              xs={6}
              style={{
                width: "275px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              margin="dense"
              id="studentLastName"
              name="studentLastName"
              label="Last Name"
              type="string"
              fullWidth
              onChange={this.handleChange("studentLastName")}
            />
            <TextField
              xs={6}
              style={{
                width: "250px",
                paddingRight: "130px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              margin="dense"
              id="studentUsername"
              name="studentUsername"
              label="user.name"
              type="string"
              fullWidth
              onChange={this.handleChange("studentUsername")}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="status-select-lable">Status</InputLabel>
              <Select
                style={{
                  width: "150px",
                  paddingLeft: "10px",
                }}
                margin="dense"
                id="status"
                label="status"
                onChange={this.handleChange("status")}
                defaultValue=""
              >
                <MenuItem value={"ACTIVE"}>ACTIVE</MenuItem>
                <MenuItem value={"ON-LEAVE"}>ROM</MenuItem>
                <MenuItem value={"QUALIFYING"}>SUSPENDED</MenuItem>
                <MenuItem value={"DEPARTED"}>GRADUATED</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="currentClass-select-label">
                Current Class
              </InputLabel>
              <Select
                style={{
                  width: "150px",
                  paddingLeft: "10px",
                }}
                margin="dense"
                // labelId="shiftPeriod"
                id="currentClassID"
                // value={shiftPeriod}
                label="currentClassID"
                onChange={this.handleChange("currentClassID")}
                defaultValue=""
              >
                {this.state.classes?.map((classItem, index) => (
                  <MenuItem value={classItem.id} key={index}>
                    {classItem.className}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              xs={6}
              style={{
                width: "150px",
                paddingRight: "270px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              margin="dense"
              id="rateRank"
              name="rateRank"
              label="Rate Rank"
              type="string"
              fullWidth
              onChange={this.handleChange("rateRank")}
            />
            <TextField
              xs={6}
              style={{
                width: "125px",
              }}
              margin="dense"
              id="gpaw"
              name="gpaw"
              label="GPAW"
              type="number"
              inputProps={{ inputMode: "decimal" }}
              fullWidth
              defaultValue={"0.00"}
              onChange={this.handleChange("gpaw")}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="organization-select-label">
                Organization
              </InputLabel>
              <Select
                style={{
                  width: "150px",
                  paddingLeft: "10px",
                }}
                margin="dense"
                // labelId="shiftPeriod"
                id="organization"
                // value={shiftPeriod}
                label="organization"
                onChange={this.handleChange("organization")}
                defaultValue=""
              >
                <MenuItem value={"USA"}>USA</MenuItem>
                <MenuItem value={"USAF"}>USAF</MenuItem>
                <MenuItem value={"USCG"}>USCG</MenuItem>
                <MenuItem value={"USN"}>USN</MenuItem>
                <MenuItem value={"USMC"}>USMC</MenuItem>
              </Select>
            </FormControl>
            <br />
            <FormControlLabel
              style={{
                marginTop: "20px",
                paddingRight: "140px",
              }}
              control={<Checkbox />}
              label="New Assession"
              onChange={this.handleChange("newAssession")}
            />

            <FormControlLabel
              style={{
                paddingRight: "150px",
              }}
              control={<Checkbox />}
              label="ARB Pending"
              onChange={this.handleChange("arbPending")}
            />
            <FormControlLabel
              style={{
                paddingRight: "140px",
              }}
              control={<Checkbox />}
              label="Mandotory Study"
              onChange={this.handleChange("mandotoryStudy")}
            />
            <br />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="course-select-lable">Course</InputLabel>
              <Select
                style={{
                  width: "150px",
                  paddingLeft: "10px",
                }}
                margin="dense"
                // labelId="shiftPeriod"
                id="course"
                // value={shiftPeriod}
                label="course"
                onChange={this.handleChange("course")}
                defaultValue=""
              >
                <MenuItem value={"JCAC"}>JCAC</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="school-select-lable">School</InputLabel>
              <Select
                style={{
                  width: "150px",
                  paddingLeft: "10px",
                }}
                margin="dense"
                // labelId="shiftPeriod"
                id="school"
                // value={shiftPeriod}
                label="school"
                onChange={this.handleChange("school")}
                defaultValue=""
              >
                <MenuItem value={"CSU"}>CSU</MenuItem>
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

export default AddStudent;
