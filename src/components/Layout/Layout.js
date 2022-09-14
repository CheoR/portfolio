import * as React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";

import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";

import "../global.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        // height: "100vh",
        // justifyContent: "space-between",
        // alignItems: "stretch",
      }}
    >
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item>
        <Container component="main" mb={5}>
          <Box mt={10}>
            <Typography sx={{ textAlign: "center" }}>{pageTitle}</Typography>
          </Box>
          {children}
        </Container>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     minHeight: "100%",
    //   }}
    // >
    //   <Navbar />
    //   <Box mt={10}>
    //     <Typography sx={{ textAlign: "center" }}>{pageTitle}</Typography>
    //   </Box>
    //   <Container component="main" sx={{ minHeight: "100vh" }} mb={5}>
    //     {children}
    //   </Container>
    //   <Footer />
    // </Box>
  );
};

export default Layout;
