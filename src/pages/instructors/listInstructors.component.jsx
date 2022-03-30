import React, { Component } from "react";
import PropTypes from "prop-types";

// AWS Amplify and GraphQL API and Mutations
import { a, API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {
  onCreateInstructor,
  onUpdateInstructor,
  onDeleteInstructor,
} from "../../graphql/subscriptions";

// Instructors Navbar Component
import InstructorsNavbar from "./instructorsNavbar.component";
// Update Instructor Component
import UpdateInstructor from "./updateInstructor.component";
// Delete Instructor Component
import DeleteInstructor from "./deleteInstructor.component";

// @mui Data Grid Pro and Material UI
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";

class ListInstructors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [],
      isLoading: true,
    };
  }

  // Get all instructors from API
  async componentDidMount() {
    this.setState({ isLoading: true });
    // Get all instructors from the database with paging and sorting options (default) and store in state as instructors and set nextToken
    const instructors = await API.graphql(
      graphqlOperation(queries.listInstructors, {
        // limit: 10,
        sortDirection: "ASC",
        nextToken: this.state.nextToken,
      })
    );
    const data = instructors;
    this.setState({
      instructors: instructors.data.listInstructors.items,
      nextToken: instructors.data.listInstructors.nextToken,
      data: instructors.data.listInstructors.items,
      isLoading: false,
    });

    // data equals useDemoData(instructors.data.listInstructors.items)

    /* const data = useDemoData({
      dataSet: "instructors",
      rowLength: 10,
      editable: true,
      onRowUpdate: (rowData) => {
        console.log("Row updated", rowData);
      },
    }); */
    console.log("Instructors: ", instructors);
    console.log("Data: ", data);
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <div>
        <InstructorsNavbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Instructors</h3>
                </div>
                <div className="card-body">
                  {isLoading ? (
                    <div className="text-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ height: 520, width: 900, paddingLeft: 50 }}>
                      <DataGridPro
                        data={data}
                        rows={10}
                        columns={[
                          {
                            field: "id",
                            header: "ID",
                            sortable: true,
                            width: 30,
                          },
                          {
                            field: "instructorFirstName",
                            header: "First Name",
                            sortable: true,
                            width: 200,
                          },
                          {
                            field: "instructorLastName",
                            header: "Last Name",
                            sortable: true,
                            width: 200,
                          },
                          {
                            field: "instructorUsername",
                            header: "Username",
                            sortable: true,
                            width: 200,
                          },
                          {
                            field: "edit",
                            header: "Edit",
                            sortable: false,
                            width: 30,
                          },
                          {
                            field: "delete",
                            header: "Delete",
                            sortable: false,
                            width: 50,
                          },
                        ]}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListInstructors;
