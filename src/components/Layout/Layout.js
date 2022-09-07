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
        height: "100%",
        background: "black",
      }}
    >
      <Navbar />
      <Container
        component="main"
        sx={{ height: "100%", background: "lightgreen" }}
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
