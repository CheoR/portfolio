import * as React from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "../../components/Layout/Layout";
import { SEO } from "../../components/SEO/SEO";
import { Box } from "@mui/material";

const BlogPost = ({ data, children }) => {
  const { frontmatter: fm } = data.mdx;
  const image = getImage(fm.hero_image);

  return (
    <>
      <CssBaseline />
      <Layout pageTitle={fm.title}>
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GatsbyImage image={image} alt={fm.hero_image_alt} />
          </Box>
          <p>
            Photo Credit:{" "}
            <a href={fm.hero_image_credit_link}>{fm.hero_image_credit_text}</a>
          </p>
          <p>{fm.datePublished}</p>
          {children}
        </Box>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        datePublished(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;

export const Head = ({ data }) => (
  // eslint-disable-next-line
  <SEO
    title={data.mdx.frontmatter.title}
    description={`Blog about ${data.mdx.frontmatter.title}`}
    image={data.mdx.frontmatter.hero_image}
  />
);
