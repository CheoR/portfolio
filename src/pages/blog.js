import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Blog = ({ data }) => {
  console.log("-------- data --");
  console.log(data.allFile.nodes);
  console.log("-------- data --");
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        id
        name
      }
    }
  }
`;

export default Blog;
