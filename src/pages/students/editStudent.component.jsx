import React, { /* useEffect, */ useEffect, useState } from "react";

// AWS Amplify and GraphQL API and Mutations
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";

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
import AssessmentTwoToneIcon from "@mui/icons-material/AssessmentTwoTone";
import CircularProgress from "@mui/material/CircularProgress";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";

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
  const [studentEdit, setStudentEdit] = useState([]);
  const [classes, setClasses] = useState(props);
  const [organizations, setOrganizations] = useState([]);
  const [currentClasses, setCurrentClasses] = useState([]);
  // const [clas, setClas] = useState(props);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [nextToken, setNextToken] = useState(null);

  const [student, setStudent] = useState(props);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // handleClickOpen
  const handleClickOpen = () => {
    //console.log("Current Student: ", student);
    setOpen(true);
    // get student date from parent component
    setStudent(props.student);
    console.log("I am the Student to Edit: ", student);
    //setStudent(student.student);
    setStudentEdit(student.student);
    console.log("studentEdit: ", studentEdit);
  };

  // handleClose
  const handleClose = () => {
    // clear the state of the student in this component
    setStudent({});
    setOpen(false);
  };

  // handleCheckboxChange
  const handleSwitchChange = (name) => (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    setIsChecked(!checked);
    setStudent((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log("switchChange student: ", student);
    console.log("mandotoryStudy: ", isChecked);
  };

  // handleCheckboxChangeNewAssession
  /* const handleSwitchChangeNewAssession = (name) => (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    setIsChecked(!checked);
    setStudent((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log("switchChange student: ", student);
    console.log("newAssession: ", isChecked);
  }; */

  // Handle change of input fields
  const handleStudentInfoChange = (name) => (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setStudent((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // handleSave async graphql mutation updateStudent
  const handleSave = async () => {
    setLoading(true);
    //console.log("Student to Update: ", student);
    const studentToUpdate = {
      id: student.id,
      studentFirstName: student.studentFirstName,
      studentLastName: student.studentLastName,
      studentUserName: student.studentUserName,
      //currentClassID: student.currentClassID,
      status: student.status,
      gpaw: student.gpaw,
      rateRank: student.rateRank,
      organization: student.organization,
      newAssession: student.newAssession,
      mandotoryStudy: student.mandotoryStudy,
      arbPending: student.arbPending,
    };
    console.log("Input to Update: ", studentToUpdate);
    await API.graphql(
      graphqlOperation(mutations.updateStudent, { input: studentToUpdate })
    );
    console.log("Student Updated: ", student);
    setLoading(false);
    setStudent({});
    setOpen(false);
    // clear component state
  };

  // load the classes from the API
  useEffect(() => {
    // classes
    async function fetchClasses() {
      const result = await API.graphql(
        graphqlOperation(queries.listClasses, {})
      );
      setCurrentClasses(result.data.listClasses.items);
    }
    fetchClasses();
  }, []);

  useEffect(() => {
    // classes
    setClasses(props.classes);
  }, [props.classes]);

  // load the organizations from the API
  useEffect(() => {
    // organizations
    async function fetchOrganizations() {
      const result = await API.graphql(
        graphqlOperation(queries.listOrganizations, {})
      );
      setOrganizations(
        result.data.listOrganizations.items.sort((a, b) =>
          a.organizationShortName > b.organizationShortName ? 1 : -1
        )
      );
    }
    fetchOrganizations();
  }, []);

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
            {student.studentLastName}
            {", "}
            {student.studentFirstName}
          </Typography>
          <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
            {student.rateRank} - {student.organization}
          </Typography>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            CLASS: {student.currentClass?.className}
          </Typography>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            SHIFT: {student.currentClass?.shiftPeriod}
          </Typography>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            ADVISOR: {student.currentClass?.classAdvisor}
          </Typography>
        </DialogTitle>
        <DialogContent
          style={{
            height: "600px",
            width: "1000px",
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
                <Tab label="PROFILE" {...a11yProps(0)} />
                <Tab label="GRADES" {...a11yProps(1)} />
                <Tab label="SCHEDULE" {...a11yProps(2)} />
                <Tab label="REPORTS" {...a11yProps(3)} />
                <Tab label="SETBACK" {...a11yProps(4)} />
                <Tab label="MANDO/VOLO" {...a11yProps(5)} />
                <Tab label="COMMENTS" {...a11yProps(6)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <br />
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
                  //label="First Name"
                  placeholder={student.studentFirstName}
                  label="First Name"
                  component="span"
                  type="string"
                  useref={student.studentFirstName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleStudentInfoChange("studentFirstName")}
                />
                <TextField
                  //sx={6}
                  style={{
                    width: "275px",
                    paddingRight: "80px",
                  }}
                  //margin="dense"
                  id="studentLastName"
                  name="studentLastName"
                  placeholder={student.studentLastName}
                  label="Last Name"
                  component="span"
                  type="string"
                  useref={student.studentLastName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleStudentInfoChange("studentLastName")}
                />
                <FormControl
                  variant="outlined"
                  sx={{
                    minWidth: 80,
                    paddingRight: "30px",
                    paddingBottom: "20px",
                  }}
                >
                  <InputLabel id="currentClass-select-label">
                    Current Class
                  </InputLabel>
                  <Select
                    style={{
                      width: "120px",
                    }}
                    id="currentClassID"
                    name="currentClassID"
                    label="Current Class"
                    placeholder={student.currentClass?.id}
                    value={student.currentClass?.id || ""}
                    useref={student.currentClass?.id}
                    //onChange={handleStudentInfoChange(student.currentClass?.id)}
                    component="span"
                  >
                    {currentClasses?.map((classItem, index) => (
                      <MenuItem value={classItem?.id} key={index}>
                        {classItem?.className}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  sx={{ minWidth: 80, paddingBottom: "20px" }}
                >
                  <InputLabel id="status-select-lable">Status</InputLabel>
                  <Select
                    style={{
                      width: "150px",
                      // if ACTIVE, set color to green
                      backgroundColor:
                        student.status === "ACTIVE"
                          ? "#008000"
                          : "" || student.status === "GRADUATED"
                          ? "#50ADFF"
                          : "",
                    }}
                    id="status"
                    name="status"
                    label="Status"
                    placeholder={student.status}
                    value={student.status || ""}
                    useref={student.status}
                    onChange={handleStudentInfoChange("status")}
                    component="span"
                  >
                    <MenuItem value={"ACTIVE"}>ACTIVE</MenuItem>
                    <MenuItem value={"ROM"}>ROM</MenuItem>
                    <MenuItem value={"SUSPENDED"}>SUSPENDED</MenuItem>
                    <MenuItem value={"GRADUATED"}>GRADUATED</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <TextField
                  //sx={6}
                  style={{
                    width: "250px",
                    paddingRight: "25px",
                    paddingBottom: "25px",
                  }}
                  //margin="dense"
                  id="studentUsername"
                  name="studentUsername"
                  label="NetUN"
                  placeholder={student.studentUsername}
                  useref={student.studentUsername}
                  component="span"
                  type="string"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleStudentInfoChange("studentUsername")}
                />
                <TextField
                  //sx={6}
                  style={{
                    width: "150px",
                    paddingRight: "25px",
                  }}
                  id="rateRank"
                  name="rateRank"
                  label="Rate/Rank"
                  placeholder={student.rateRank}
                  useref={student.rateRank}
                  component="span"
                  type="string"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleStudentInfoChange("rateRank")}
                />
                <FormControl
                  variant="outlined"
                  sx={{ minWidth: 80, paddingRight: "200px" }}
                >
                  <InputLabel id="organization-select-lable">
                    Organization
                  </InputLabel>
                  <Select
                    style={{
                      width: "150px",
                    }}
                    id="organization"
                    name="organization"
                    label="Organization"
                    placeholder={student.organization}
                    value={student.organization || ""}
                    useref={student.organization}
                    onChange={handleStudentInfoChange("organization")}
                    component="span"
                    sortby="organization"
                  >
                    {organizations?.map((organizationItem, index) => (
                      // sort by organization short name
                      <MenuItem
                        value={organizationItem?.organizationShortName}
                        key={index}
                      >
                        {organizationItem?.organizationShortName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  //xs={6}
                  style={{
                    width: "125px",
                    paddingBottom: "25px",
                    fontWeight: "bold",
                  }}
                  id="gpaw"
                  name="gpaw"
                  label="GPAW"
                  placeholder={student.gpaw}
                  useref={student.gpaw}
                  type="number"
                  inputProps={{ inputMode: "decimal" }}
                  component="span"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AssessmentTwoToneIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleStudentInfoChange("gpaw")}
                />
                <br />
                <hr
                  style={{
                    width: "100%",
                    backgroundColor: "#BCBCBC",
                    opacity: 0.5,
                  }}
                />
                <br />
                <div
                  style={{
                    display: "flex",
                    paddingBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      paddingRight: "20px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "15px",
                      }}
                    >
                      Mando/Volo
                    </Typography>
                    <FormControlLabel
                      style={{
                        marginLeft: "5px",
                      }}
                      control={
                        <Switch
                          //value={student.mandotoryStudy}
                          // if student.mandotoryStudy is true, then switch is on, else switch is off
                          checked={student?.mandotoryStudy}
                          // if student.mandotoryStudy is true, then style is red, else style is green
                          style={
                            student.mandotoryStudy
                              ? { color: "red" }
                              : { color: "green" }
                          }
                          id="mandotoryStudy"
                          label="mandotoryStudy"
                          name="mandotoryStudy"
                          // value={true || false}
                          onChange={handleSwitchChange("mandotoryStudy")}
                        />
                      }
                      label={
                        // if student.mandotoryStudy is true, then label is "Yes", else label is "No"
                        student.mandotoryStudy ? (
                          <span
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            Yes
                          </span>
                        ) : (
                          <span
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            No
                          </span>
                        )
                      }
                      labelPlacement="end"
                    />
                  </div>
                  <div
                    style={{
                      paddingRight: "20px",
                    }}
                  >
                    <div>
                      <Typography
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        New Assession
                      </Typography>
                    </div>
                    <div>
                      <FormControlLabel
                        style={{
                          marginLeft: "10px",
                        }}
                        control={
                          <Switch
                            //value={student.newAssession}
                            // if student.newAssession is true, then switch is on, else switch is off
                            checked={student?.newAssession}
                            // if student.newAssession is true, then style is red, else style is green
                            style={
                              student.newAssession
                                ? { color: "#50ADFF" }
                                : { color: "grey" }
                            }
                            id="newAssession"
                            label="newAssession"
                            name="newAssession"
                            // value={true || false}
                            onChange={handleSwitchChange("newAssession")}
                          />
                        }
                        label={
                          // if student.newAssession is true, then label is "Yes", else label is "No"
                          student.newAssession ? (
                            <span
                              style={{
                                fontSize: "14px",
                              }}
                            >
                              Yes
                            </span>
                          ) : (
                            <span
                              style={{
                                fontSize: "14px",
                              }}
                            >
                              No
                            </span>
                          )
                        }
                        labelPlacement="end"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      paddingRight: "20px",
                    }}
                  >
                    <div>
                      <Typography
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        ARB Pending
                      </Typography>
                    </div>
                    <div>
                      <FormControlLabel
                        style={{
                          marginLeft: "10px",
                        }}
                        control={
                          <Switch
                            //value={student.arbPending}
                            // if student.arbPending is true, then switch is on, else switch is off
                            checked={student?.arbPending}
                            // if student.arbPending is true, then style is red, else style is green
                            style={
                              student.arbPending
                                ? { color: "#50ADFF" }
                                : { color: "grey" }
                            }
                            id="arbPending"
                            label="arbPending"
                            name="arbPending"
                            // value={true || false}
                            onChange={handleSwitchChange("arbPending")}
                          />
                        }
                        label={
                          // if student.arbPending is true, then label is "Yes", else label is "No"
                          student.arbPending ? (
                            <span
                              style={{
                                fontSize: "14px",
                              }}
                            >
                              Yes
                            </span>
                          ) : (
                            <span
                              style={{
                                fontSize: "14px",
                              }}
                            >
                              No
                            </span>
                          )
                        }
                        labelPlacement="end"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                GRADES
              </TabPanel>
              <TabPanel value={value} index={2}>
                SCHEDULE
              </TabPanel>
              <TabPanel value={value} index={3}>
                REPORTS
              </TabPanel>
              <TabPanel value={value} index={4}>
                SETBACK
              </TabPanel>
              <TabPanel value={value} index={5}>
                MANDO/VOLO
              </TabPanel>
              <TabPanel value={value} index={6}>
                COMMENTS
              </TabPanel>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          {loading && <CircularProgress size={36} />}
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
