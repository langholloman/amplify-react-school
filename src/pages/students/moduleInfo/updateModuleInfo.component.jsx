import React, { Component } from "react";

// AWS Amplify imports for GraphQL and API calls to DynamoDB and mutations
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../../graphql/mutations";
import * as queries from "../../../graphql/queries";
import {
  onCreateModuleInfo,
  onUpdateModuleInfo,
  onDeleteModuleInfo,
} from "../../../graphql/subscriptions";

// AddNewModuleInfo component
import AddNewModuleInfo from "./addNewModuleInfo.component";

// Material UI imports
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

// UpdateModuleInfo component
class UpdateModuleInfo extends Component {
  constructor(props) {
    super(props);

    // Initialize state with the moduleInfo array of items from props of the parent component of the student.id passed in as a prop from the parent component updateStudent.component.jsx
    // moduleInfo is an array of objects of items with the following properties:
    // id, studentId, moduleShortName, moduleName, className, instructorLastName, instructorFirstName
    this.state = {
      student: this.props.student,
      moduleInfos: this.props.moduleInfos,
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Handle the click of the edit button
  handleClickOpen = () => {
    console.log(
      "Click Open Current Student in moduleInfo: ",
      this.props.student
    );
    this.setState({
      open: true,
      ...this.props.moduleInfos,
    });
    console.log("Current Student's moduleInfo: ", this.props.moduleInfos);
  };

  // mount component to get moduleInfo items
  // filter items where the studentId matches the student.id passed in as a prop from the parent component updateStudent.component.jsx
  // set the state with the moduleInfo array of items from props of the parent component of the student.id passed in as a prop from the parent component updateStudent.component.jsx
  async componentDidMount() {
    const moduleInfo = await API.graphql(
      graphqlOperation(queries.listModuleInfos)
    );
    const filteredModuleInfo = moduleInfo.data.listModuleInfos.items.filter(
      (item) => item.studentId === this.props.student?.id
    );
    this.setState({
      // sort moduleInfo array by moduleShortName
      moduleInfos: filteredModuleInfo.sort((a, b) =>
        a.moduleShortName > b.moduleShortName ? 1 : -1
      ),
      // moduleInfos: filteredModuleInfo,
    });

    this.subscription = API.graphql(
      graphqlOperation(onCreateModuleInfo)
    ).subscribe({
      next: (moduleInfoData) => {
        const newModuleInfo = moduleInfoData.value.data.onCreateModuleInfo;
        this.setState((prevState) => {
          const moduleInfos = [newModuleInfo, ...prevState.moduleInfos];
          return { moduleInfos };
        });
      },
    });
  }

  // Handle the change of the text field
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event?.target?.value,
    });
  };

  // unmount component to unsubscribe from the subscription, clear the state, and close the dialog
  componentWillUnmount() {
    this.subscription.unsubscribe();
    this.setState({
      open: false,
      moduleInfos: [],
    });
    console.log("unmount moduleInfos: ", this.state.moduleInfos);
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { student } = this.props;
    const { moduleInfos } = this.state;

    console.log("render moduleInfos: ", moduleInfos);
    console.log("render student: ", student);

    return (
      <span>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
          startIcon={<EditIcon />}
        >
          Edit Module Info
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography variant="body1">
              Module Info for {student.studentLastName}
            </Typography>
          </DialogTitle>
          <DialogContent>
            {this.state.moduleInfos?.map((moduleInfo) => (
              <div key={moduleInfo.id}>
                <Typography variant="h6">
                  {moduleInfo.moduleShortName} - {moduleInfo.moduleName}
                </Typography>
              </div>
            ))}
            <AddNewModuleInfo student={student} />
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

export default UpdateModuleInfo;
