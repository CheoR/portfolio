import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.datePublished}</p>
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
        slug
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
