import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "../components/Layout/Layout";
import Gallery from "../components/Gallery/ProjectGallery";
import { SEO } from "../components/SEO/SEO";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Layout pageTitle="Home">
        <Gallery />
      </Layout>
    </>
  );
};

export default Home;

// eslint-disable-next-line
export const Head = () => <SEO title="Home" description="Home Page" />;
