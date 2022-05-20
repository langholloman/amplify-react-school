import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// AWS Amplify
import awsConfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

// Import MUI X PRO license
import { LicenseInfo } from "@mui/x-data-grid-pro";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Header component
import Header from "./components/header/header.component";
// Home page component
import HomePage from "./pages/home/home.component";

// List Students component
import ListStudents from "./pages/students/listStudents.component";

// Manage Students component
import ManageStudents from "./pages/students/manageStudents.component";

// Classes component
import ListClasses from "./pages/classes/listClasses.component";

// Instructors component
import ListInstructors from "./pages/instructors/listInstructors.component";

// Instructor Classes component
import ListInstructorsClasses from "./pages/instructors/classInfo/instructorsClassInfo.component";

// Modules component
import ListModules from "./pages/modules/listModules.component";

// configure Amplify
Amplify.configure(awsConfig);

// Set the license key for the X-Data-Grid-Pro component
LicenseInfo.setLicenseKey(
  "043cf37254ce8afc2dd58b1d49fde413T1JERVI6NDA0ODUsRVhQSVJZPTE2Nzk4NTk0NjEwMDAsS0VZVkVSU0lPTj0x"
);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/listStudents" component={ListStudents} />
          <Route path="/manageStudents" component={ManageStudents} />
          <Route path="/listInstructors" component={ListInstructors} />
          <Route
            path="/listInstructorsClasses"
            component={ListInstructorsClasses}
          />
          <Route path="/modules" component={ListModules} />
          <Route path="/classes" component={ListClasses} />

          <Route path="*" component={HomePage} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
