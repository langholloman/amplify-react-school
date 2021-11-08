import React, { Component } from "react";

import ListStudents from "./list.students.component";
import StudentsNavbar from "./navbar.students.component";

class StudentHome extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "90px",
        }}
      >
        <StudentsNavbar />
        <ListStudents />
      </div>
    );
  }
}

export default StudentHome;
