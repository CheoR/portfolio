import * as React from "react";

import { Box, Container, Typography } from "@mui/material";

import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";

import "../global.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box mt={10}>
        <Typography sx={{ textAlign: "center" }}>{pageTitle}</Typography>
      </Box>
      <Container component="main" sx={{ minHeight: "100vh" }} mb={5}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
