import React, { useEffect, useState } from "react";

// AWS Amplify and GraphQL API and Mutations
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {
  onCreateCalendar,
  onDeleteCalendar,
  onUpdateCalendar,
} from "../../graphql/subscriptions";

// import CalendarDaysNavbar from "./calendarDaysNavbar.component";
import CalendarDaysNavbar from "./calendarDaysNavbar.component";

// @mui Data Grid Pro and Material UI
import {
  DataGridPro,
  GridToolbar,
  useGridApiRef,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";

import CSVUploader from "./CSVUploader.component";

import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import LinearProgress from "@mui/material/LinearProgress";

function ProcessCalendarDaysUpdate(row) {
  const { id, day, dayType } = row;
  const input = {
    id,
    day,
    dayType,
  };
  return (
    API.graphql(graphqlOperation(mutations.updateCalendar, { input })) &&
    row && { ...row, isNew: false }
  );
}

function DeleteCalendarDay(row) {
  const { id } = row;
  const input = { id };
  return API.graphql(graphqlOperation(mutations.deleteCalendar, { input }));
}

const ListCalendarDays = () => {
  const [calendardays, setCalendarDays] = useState([]);
  const [nextToken, setNextToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    // Get all calendar days
    const fetchData = async () => {
      const calendardays = await API.graphql(
        graphqlOperation(queries.listCalendars, {
          // limit: 10,
          // order by day
          sortDirection: "DESC",
          sortField: "day",
          nextToken: nextToken,
        })
      );
      setCalendarDays(calendardays.data.listCalendars.items);
      setNextToken(calendardays.data.listCalendars.nextToken);
      setTableData(calendardays.data.listCalendars.items);
      setIsLoading(false);
    };
    fetchData();
  }, [nextToken, isLoading]);

  console.log("calendardays", calendardays);

  // Update the tableData state when a new day is created
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateCalendar)
    ).subscribe({
      next: (eventData) => {
        const calendarday = eventData.value.data.onCreateCalendar;
        const updatedCalendars = [...calendardays, calendarday];
        setCalendarDays(updatedCalendars);
        setTableData(updatedCalendars);
      },
    });
    return () => subscription.unsubscribe();
  }, [calendardays]);

  // Update the tableData state when a day is updated
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdateCalendar)
    ).subscribe({
      next: (eventData) => {
        const calendarday = eventData.value.data.onUpdateCalendar;
        const updatedCalendars = calendardays.map((i) =>
          i.id === calendarday.id ? calendarday : i
        );
        setCalendarDays(updatedCalendars);
        setTableData(updatedCalendars);
      },
    });
    return () => subscription.unsubscribe();
  }, [calendardays]);

  // Update the tableData state when a day is deleted
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onDeleteCalendar)
    ).subscribe({
      next: (eventData) => {
        const calendarday = eventData.value.data.onDeleteCalendar;
        const updatedCalendars = calendardays.filter(
          (i) => i.id !== calendarday.id
        );
        setCalendarDays(updatedCalendars);
        setTableData(updatedCalendars);
      },
    });
    return () => subscription.unsubscribe();
  }, [calendardays]);

  const apiRef = useGridApiRef();

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.startRowEditMode({ id });
  };

  const handleSaveClick = (id) => async (event) => {
    event.stopPropagation();
    apiRef.current.stopRowEditMode({ id });
  };

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.updateRows([{ id, _action: "delete" }]);
    DeleteCalendarDay({ id });
    console.log("DeleteCalendarDay", id);
  };

  const handleCancelClick = (id) => async (event) => {
    event.stopPropagation();
    apiRef.current.stopRowEditMode({ id, ignoreModifications: true });

    const row = apiRef.current.getRow(id);
    if (row.isNew) {
      apiRef.current.updateRows([{ id, _action: "delete" }]);
    }
  };

  const columns = [
    //  { field: "id", headerName: "ID", width: 100 },
    /* {
      field: "id",
      headerName: "ID",
      width: 10,
      editable: false,
    }, */
    {
      field: "day",
      headerName: "Day",
      //type: "dateTime",
      type: "date",
      valueGetter: ({ value }) => value && new Date(value),
      width: 125,
      editable: true,
    },
    {
      field: "dayType",
      headerName: "Day Type",
      type: "singleSelect",
      valueOptions: [
        "Class",
        "Weekend",
        "Holiday",
        "Non-Training",
        "Training Cancelled",
      ],
      width: 125,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = apiRef.current.getRowMode(id) === "edit";

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <div
      style={{
        height: 700,
        width: "100%",
        paddingTop: 100,
        paddingBottom: 100,
        margin: "auto",
        backgroundColor: "#272727",
      }}
    >
      <CalendarDaysNavbar />
      <div
        style={{
          paddingBottom: 20,
        }}
      ></div>
      <Box
        sx={{
          height: "90%",
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <div
          style={{
            width: "200px",
            height: "100px",
            paddingLeft: "2%",
            paddingBottom: "55px",
          }}
        >
          <CSVUploader />
        </div>
        <div style={{ width: "96%", height: "100%", paddingLeft: "2%" }}>
          <DataGridPro
            rows={tableData}
            getRowId={(row) => row.id}
            columns={columns}
            apiRef={apiRef}
            rowGroupingColumnMode="single"
            /* initialState={{
            rowGrouping: {
              model: INITIAL_GROUPING_COLUMN_MODEL,
            },
          }} */
            editMode="row"
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={ProcessCalendarDaysUpdate}
            onGridReady={(api) => {
              api.sizeColumnsToFit();
            }}
            components={{
              Toolbar: GridToolbar,
              LoadingOverlay: LinearProgress,
            }}
            loading={isLoading}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            pagination
            experimentalFeatures={{
              newEditingApi: true,
              // rowGrouping: true,
              // warnIfFocusStateIsNotSynced: true,
            }}
            initialState={{
              pinnedColumns: { left: ["day"], right: ["actions"] },
              sorting: {
                sortModel: [{ field: "day", sort: "desc" }],
              },
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default ListCalendarDays;
