import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "../components/Layout/Layout";
import Gallery from "../components/Gallery/Gallery";
import { SEO } from "../components/SEO/SEO";

const IndexPage = () => {
  return (
    <>
      <CssBaseline />
      <Layout pageTitle="Home">
        <Gallery />
      </Layout>
    </>
  );
};

export default IndexPage;

// eslint-disable-next-line
export const Head = () => <SEO title="Home" description="Home Page" />;
