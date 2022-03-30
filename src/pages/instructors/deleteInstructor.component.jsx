import React, { Component } from "react";

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

class DeleteInstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete = () => {
    const { instructor } = this.props;
    API.graphql(
      graphqlOperation(mutations.deleteInstructor, {
        input: { id: instructor.id },
      })
    ).then(() => {
      // this.props.onDelete();
      console.log("Instructor deleted");
      this.handleClose();
    });
  };

  render() {
    const { instructor } = this.props;
    return (
      <div>
        <DeleteIcon
          onClick={this.handleClickOpen}
          style={{ cursor: "pointer", color: "grey" }}
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete " +
              instructor.instructorFirstName +
              " " +
              instructor.instructorLastName +
              "?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDelete} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DeleteInstructor;
