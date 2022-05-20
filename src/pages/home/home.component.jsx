import React from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "./networkwire.jpg";

import "./home.styles.scss";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body3,
  padding: theme.spacing(1),
  //marginTop: theme.spacing(15),
  //marginBottom: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
  },
}));

const HomePage = () => {
  return (
    <Box
      sx={{ flexGrow: 2 }}
      style={{
        backgroundImage:
          // "url(https://www.cyberstronger.com/assets/images/home-page-higher-ed-banner.jpg)",
          "url(https://www.comtech.com/images//cyber/cyber-background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#282C34",
        backgroundBlendMode: "overlay",
        marginTop: "5rem",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          padding: "20px",
          marginTop: "5rem",
          marginBottom: "8rem",
          paddingRight: "7rem",
          paddingLeft: "7rem",
        }}
      >
        <Grid item xs={6} style={{ textAlign: "center" }}>
          <Item>
            <Link
              to="/listStudents"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div>
                <p>
                  <img
                    src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-transcript-university-flaticons-lineal-color-flat-icons.png"
                    alt="Manage Grades"
                  />
                </p>
                <span>Manage Grades</span>
              </div>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "center" }}>
          <Item>
            <Link
              to="/manageStudents"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div>
                <p>
                  <img
                    src="https://img.icons8.com/cotton/64/000000/cloud-user.png"
                    alt="Manage Students"
                  />
                </p>
                <span>Manage Students</span>
              </div>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Link
              to="/classes"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div>
                <p>
                  <img
                    src="https://img.icons8.com/cotton/64/000000/cloud-user-group.png"
                    alt="Manage Classes"
                  />
                </p>
                <span>Manage Classes</span>
              </div>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Link
              to="/listInstructors"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>
                <p>
                  <img
                    src="https://img.icons8.com/cotton/64/000000/cloud-business.png"
                    alt="Manage Instructors"
                  />
                </p>
                <span>Manage Instructors</span>
              </div>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Link
              to="/reports"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>
                <p>
                  <img
                    src="https://img.icons8.com/cotton/64/000000/cloud-development--v2.png"
                    alt="View Reports"
                  />
                </p>
                <span>View Reports</span>
              </div>
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
