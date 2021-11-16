import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// AWS Amplify
import config from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";

// Header component
import Header from "./components/header/header.component";
// Home page component
import HomePage from "./pages/home/home.component";

// List Students component
import ListStudents from "./pages/students/listStudents.component";

// Manage Students component
import ManageStudents from "./pages/managestudents/manageStudents.component";

// Classes component
import Classes from "./pages/classes/classes.component";

// Modules component
import Modules from "./pages/modules/modules.component";

Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/listStudents" component={ListStudents} />
        <Route path="/manageStudents" component={ManageStudents} />
        <Route path="/modules" component={Modules} />
        <Route path="/classes" component={Classes} />
        <Route path="*" component={HomePage} />
      </Switch>
    </div>
  );
}

export default withAuthenticator(App);
