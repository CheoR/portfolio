import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "../components/Layout/Layout";
import Gallery from "../components/Gallery/Gallery";
import Card from "../components/Card/ProjectCard";
import { SEO } from "../components/SEO/SEO";
import { PROJECTS } from "../data/data";
import { filterProjects } from "../utils/filters";

const Home = () => {
  const tags = [
    "All",
    ...new Set(PROJECTS.map((project) => project.tags).flat(1)),
  ];

  return (
    <>
      <CssBaseline />
      <Layout pageTitle="">
        <Gallery
          data={PROJECTS}
          tags={tags}
          filter={filterProjects(PROJECTS)}
          Card={Card}
        />
      </Layout>
    </>
  );
};

export default Home;

// eslint-disable-next-line
export const Head = () => <SEO title="Home" description="Home Page" />;
