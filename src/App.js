import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// AWS Amplify
import awsConfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

// Import MUI X PRO license
import { LicenseInfo } from "@mui/x-data-grid-pro";

// Header component
import Header from "./components/header/header.component";
// Home page component
import HomePage from "./pages/home/home.component";

// List Students component
import ListStudents from "./pages/students/listStudents.component";

// Classes component
import Classes from "./pages/classes/classes.component";

// Instructors component
import ListInstructors from "./pages/instructors/getInstructors.component";
// <Route path="/listInstructors" component={ListInstructors} />;

// Instructors component
// import ListInstructors from "./pages/instructors/listInstructors.component";
// <Route path="/listInstructors" component={ListInstructors} />;

// Modules component
import Modules from "./pages/modules/modules.component";

// configure Amplify
Amplify.configure(awsConfig);

// Set the license key for the X-Data-Grid-Pro component
LicenseInfo.setLicenseKey(
  "043cf37254ce8afc2dd58b1d49fde413T1JERVI6NDA0ODUsRVhQSVJZPTE2Nzk4NTk0NjEwMDAsS0VZVkVSU0lPTj0x"
);

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/listStudents" component={ListStudents} />
        <Route path="/listInstructors" component={ListInstructors} />
        <Route path="/modules" component={Modules} />
        <Route path="/classes" component={Classes} />

        <Route path="*" component={HomePage} />
      </Switch>
    </div>
  );
}

export default withAuthenticator(App);
