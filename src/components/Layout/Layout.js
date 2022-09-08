import * as React from "react";

import { Box, Container } from "@mui/material";

import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";

import "../global.css";
import * as styles from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "black",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Container
        component="main"
        sx={{ minHeight: "100vh", background: "pink" }}
        mb={5}
      >
        <h1 className={styles.heading}>
          <span>{pageTitle}</span>
        </h1>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
