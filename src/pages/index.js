import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "../components/Layout/Layout";
import Gallery from "../components/Gallery/Gallery";
import { SEO } from "../components/SEO/SEO";
import { Paper } from "@mui/material";

const IndexPage = () => {
  return (
    <>
      <CssBaseline />
      <Paper>
        <Layout pageTitle="Home">
          Nothing to see here.
          <Gallery />
        </Layout>
      </Paper>
    </>
  );
};

export default IndexPage;

// eslint-disable-next-line
export const Head = () => <SEO title="Home" description="Home Page" />;
