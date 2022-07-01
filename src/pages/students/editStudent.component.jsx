import React, { /* useEffect, */ useState } from "react";

// AWS Amplify and GraphQL API and Mutations
/* import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations"; */

import PropTypes from "prop-types";

// MUI components
import EditIcon from "@mui/icons-material/Edit";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EditStudent(props) {
  const [value, setValue] = React.useState(0);
  // const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(props);
  const [classes, setClasses] = useState(props);
  //const [clas, setClas] = useState(props);
  //const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // handleClickOpen
  const handleClickOpen = () => {
    //console.log("Current Student: ", student);
    setOpen(true);
  };

  // handleClose
  const handleClose = () => {
    setOpen(false);
  };

  // combine student.student to student
  const studentData = { ...student.student };
  console.log("studentData", studentData);
  console.log("classes in editStudent", classes);

  return (
    <div>
      <EditIcon
        onClick={handleClickOpen}
        style={{
          cursor: "pointer",
          color: "#71C2FF",
          fontSize: "20px",
        }}
      />

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle
          style={{
            backgroundColor: "#50ADFF",
            color: "#272727",
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "26px",
            }}
          >
            {studentData.studentLastName.toUpperCase()}
            {", "}
            {studentData.studentFirstName.toUpperCase()}
          </Typography>
          <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
            {studentData.rateRank.toUpperCase()} -{" "}
            {studentData.organization.toUpperCase()}
          </Typography>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            CLASS: {studentData.currentClass.className}
          </Typography>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            SHIFT: {studentData.currentClass.shiftPeriod.toUpperCase()}
          </Typography>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            ADVISOR: {studentData.currentClass.classAdvisor.toUpperCase()}
          </Typography>
        </DialogTitle>
        <DialogContent
          style={{
            height: "400px",
          }}
        >
          <div sx={{ width: "100%" }}>
            <div sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="scrollable"
                scrollButtons="auto"
                indicatorColor="primary"
              >
                <Tab label="STUDENT INFO" {...a11yProps(0)} />
                <Tab label="GRADES" {...a11yProps(1)} />
                <Tab label="SCHEDULE" {...a11yProps(2)} />
                <Tab label="SETBACK HISTORY" {...a11yProps(3)} />
                <Tab label="MANDO/VOLO" {...a11yProps(4)} />
                <Tab label="COMMENTS" {...a11yProps(5)} />
                <Tab label="ATTENDANCE" {...a11yProps(6)} />
                <Tab label="ARB" {...a11yProps(7)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <TextField
                  //sx={6}
                  style={{
                    width: "250px",
                    paddingRight: "20px",
                    paddingBottom: "20px",
                  }}
                  //margin="dense"
                  id="studentFirstName"
                  name="studentFirstName"
                  label="First Name"
                  value={studentData.studentFirstName}
                  component="span"
                  type="string"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  //sx={6}
                  style={{
                    width: "275px",
                    paddingRight: "20px",
                  }}
                  //margin="dense"
                  id="studentLastName"
                  name="studentLastName"
                  label="Last Name"
                  value={studentData.studentLastName}
                  component="span"
                  type="string"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <br />
                {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="currentClass-select-lable">
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
                    //onChange={this.handleChange("currentClassID")}
                    defaultValue=""
                  >
                    {classes.map((classs) => (
                      <MenuItem
                        key={classs.classID}
                        value={classs.classID}
                        //selected={classs.classID === currentClassID}
                      >
                        {classs.className}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
                <TextField
                  //sx={6}
                  style={{
                    width: "250px",
                    paddingRight: "20px",
                  }}
                  //margin="dense"
                  id="studentUsername"
                  name="studentUsername"
                  label="NetUN"
                  value={studentData.studentUsername}
                  component="span"
                  type="string"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="organization-select-label">
                    Organization
                  </InputLabel>
                  <Select
                    //sx={6}
                    style={{
                      width: "150px",
                      paddingLeft: "10px",
                    }}
                    margin="dense"
                    id="organization"
                    name="organization"
                    label="organization"
                    component="span"
                    value={studentData.organization}
                    //onChange={this.handleChange("organization")}
                    defaultValue=""
                  >
                    <MenuItem value={"USA"}>USA</MenuItem>
                    <MenuItem value={"USAF"}>USAF</MenuItem>
                    <MenuItem value={"USCG"}>USCG</MenuItem>
                    <MenuItem value={"USN"}>USN</MenuItem>
                    <MenuItem value={"USMC"}>USMC</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  //sx={6}
                  style={{
                    width: "150px",
                  }}
                  id="rateRank"
                  name="rateRank"
                  label="Rate/Rank"
                  value={studentData.rateRank}
                  component="span"
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                GRADE HISTORY
              </TabPanel>
              <TabPanel value={value} index={2}>
                SCHEDULE
              </TabPanel>
              <TabPanel value={value} index={3}>
                SETBACK HISTORY
              </TabPanel>
              <TabPanel value={value} index={4}>
                MANDO/VOLO
              </TabPanel>
              <TabPanel value={value} index={5}>
                COMMENTS
              </TabPanel>
              <TabPanel value={value} index={6}>
                ATTENDANCE
              </TabPanel>
              <TabPanel value={value} index={7}>
                ARB
              </TabPanel>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* <Button onClick={this.handleSubmit} color="primary">
            Update
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
