import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

const Blog = ({ data }) => {
  console.log("-------- data --");
  console.log(data.allMdx.nodes);
  console.log("-------- data --");
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.datePublished}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        id
        body
        frontmatter {
          author
          datePublished(formatString: "MMMM D, YYYY")
          title
        }
      }
    }
  }
`;

export default Blog;
