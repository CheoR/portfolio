import * as React from "react";
import { Link } from "gatsby";

import Footer from "./Footer";

import "../global.css";
// import * as styles from "./layout.module.css";
import { Container } from "@mui/material";

import Navbar from "../Navbar/Navbar";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ background: "red" }}>{children}</Container>
      <Footer />
    </>
    // <div className={styles.container}>
    //   <div className={styles.title}>
    //     <header className={styles.header}>CheoR Portfolio</header>
    //   </div>
    //   <main className={styles.page}>
    //     <h1 className={styles.heading}>
    //       <span>{pageTitle}</span>
    //     </h1>
    //     <div className={styles.children}>{children}</div>
    //   </main>
    //   <Footer />
    // </div>
  );
};

export default Layout;
