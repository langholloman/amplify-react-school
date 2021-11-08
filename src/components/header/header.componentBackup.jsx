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
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./header.styles.scss";

const classes = [
  { label: "22200" },
  { label: "22250" },
  { label: "22300" },
  { label: "22350" },
  { label: "22400" },
  { label: "22450" },
  { label: "22500" },
  { label: "22550" },
  { label: "22600" },
  { label: "22650" },
  { label: "22700" },
  { label: "22750" },
  { label: "22800" },
  { label: "22850" },
  { label: "22900" },
];

console.log(classes);

const Header = () => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="fixed" sx={{ padding: 1 }}>
        <Toolbar>
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
            to="/Students"
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
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            JCAC
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={classes}
            className="autocomplete"
            sx={{ width: 130 }}
            renderInput={(params) => <TextField {...params} label="" />}
          />
          <Button color="inherit">
            <AmplifySignOut />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
