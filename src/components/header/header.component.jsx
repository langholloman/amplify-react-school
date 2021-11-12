import React from "react";
import { Link } from "react-router-dom";

import { AmplifySignOut } from "@aws-amplify/ui-react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import HomeMax from "@mui/icons-material/HomeMax";

import "./header.styles.scss";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="fixed" sx={{ padding: 1 }}>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            JCAC
          </Typography>
          <MenuItem
            component={Link}
            to="/"
            sx={{ flexGrow: 0, mr: 2 }}
            color="inherit"
          >
            <HomeMax />
            Home
          </MenuItem>
          <MenuItem
            component={Link}
            to="/listStudents"
            sx={{ flexGrow: 0, mr: 2 }}
            color="inherit"
          >
            <PersonIcon />
            Students
          </MenuItem>
          <MenuItem
            component={Link}
            to="/Classes"
            sx={{ flexGrow: 0, mr: 2 }}
            color="inherit"
          >
            <GroupIcon />
            Classes
          </MenuItem>
          <MenuItem
            component={Link}
            to="/Modules"
            sx={{ flexGrow: 0, mr: 2 }}
            color="inherit"
          >
            <ViewModuleIcon />
            Modules
          </MenuItem>

          <Button color="inherit">
            <AmplifySignOut />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
