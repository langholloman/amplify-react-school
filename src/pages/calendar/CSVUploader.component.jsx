import React, { useState } from "react";
import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from "react-papaparse";

// AWS Amplify API and GraphQL Operations
import { API, graphqlOperation } from "aws-amplify";

// Mutations
import * as mutations from "../../graphql/mutations";

// @mui Material UI
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
//import Button from "@mui/material/Button";

const GREY = "#CCC";
const GREY_LIGHT = "rgba(255, 255, 255, 0.4)";
const DEFAULT_REMOVE_HOVER_COLOR = "#A01919";
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = "#686868";
const styles = {
  zone: {
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: GREY,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
  file: {
    background: "linear-gradient(to bottom, #EEE, #DDD)",
    borderRadius: 20,
    display: "flex",
    height: 120,
    width: 120,
    position: "relative",
    zIndex: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  info: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  },
  size: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    marginBottom: "0.5em",
    justifyContent: "center",
    display: "flex",
  },
  name: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    fontSize: 12,
    marginBottom: "0.5em",
  },
  progressBar: {
    bottom: 14,
    position: "absolute",
    width: "80%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  zoneHover: {
    borderColor: GREY_DIM,
  },
  default: {
    borderColor: GREY,
  },
  remove: {
    height: 23,
    position: "absolute",
    right: 6,
    top: 6,
    width: 23,
  },
};

export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  //const { data, setData } = useState([]);
  const [zoneHover, setZoneHover] = useState(false);
  const [removeHoverColor, setRemoveHoverColor] = useState(
    DEFAULT_REMOVE_HOVER_COLOR
  );

  // AddCalendarDay function using results from PapaParse to mutate the aws-amplify-graphql-api
  const addCalendarDay = async (results) => {
    console.log("addCalendarDay results: ", results);
    const { data } = results;
    // loop through the data and create a new calendar day object for each row
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const calendarDay = {
        day: row.day,
        dayType: row.dayType,
      };
      console.log("calendarDay: ", calendarDay);
      // create the calendar day object using the graphql mutation
      await API.graphql(
        graphqlOperation(mutations.createCalendar, {
          input: calendarDay,
        })
      );
    }
  };

  return React.createElement(
    CSVReader,
    {
      onUploadAccepted: (results) => {
        console.log("---------------------------");
        console.log(results);
        console.log("---------------------------");
        addCalendarDay(results);
      },
      config: {
        header: true,
        skipEmptyLines: true,
      },
      onDragOver: (event) => {
        event.preventDefault();
        setZoneHover(true);
      },
      onDragLeave: (event) => {
        event.preventDefault();
        setZoneHover(false);
      },
    },
    ({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps, Remove }) =>
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          Object.assign({}, getRootProps(), {
            style: Object.assign(
              {},
              styles.zone,
              zoneHover && styles.zoneHover
            ),
          }),
          acceptedFile ? (
            React.createElement(
              React.Fragment,
              null,
              React.createElement(
                "div",
                { style: styles.file },
                React.createElement(
                  "div",
                  { style: styles.info },
                  React.createElement(
                    "span",
                    { style: styles.size },
                    formatFileSize(acceptedFile.size)
                  ),
                  React.createElement(
                    "span",
                    { style: styles.name },
                    acceptedFile.name
                  )
                ),
                React.createElement(
                  "div",
                  { style: styles.progressBar },
                  React.createElement(ProgressBar, null)
                ),
                React.createElement(
                  "div",
                  Object.assign({}, getRemoveFileProps(), {
                    style: styles.remove,
                    onMouseOver: (event) => {
                      event.preventDefault();
                      setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
                    },
                    onMouseOut: (event) => {
                      event.preventDefault();
                      setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
                    },
                  }),
                  React.createElement(Remove, { color: removeHoverColor })
                )
              )
            )
          ) : (
            <div>
              {<AddCircleOutlineOutlinedIcon />}
              <br />
              Drag n' Drop or Select CSV File from your computer
            </div>
          )
        )
      )
  );
}
