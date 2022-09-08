import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { graphql } from "gatsby";

import Layout from "../../components/Layout/Layout";
import Gallery from "../../components/Gallery/BlogGallery";
import { SEO } from "../../components/SEO/SEO";

const Blog = ({ data }) => {
  return (
    <>
      <CssBaseline />
      <Layout pageTitle="My Blog Posts">
        <Gallery data={data} />
      </Layout>
    </>
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
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;

export default Blog;

// eslint-disable-next-line
export const Head = () => <SEO title="Blogs" description="Blogs Page" />;
