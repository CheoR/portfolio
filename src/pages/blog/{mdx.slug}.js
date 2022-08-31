import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout/Layout";
import { SEO } from "../../components/SEO/SEO";

const BlogPost = ({ data }) => {
  const { frontmatter: fm, body } = data.mdx;

  return (
    <Layout pageTitle={fm.title}>
      <p>{fm.datePublished}</p>
      <GatsbyImage image={fm.hero_image} alt={fm.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={fm.hero_image_credit_link}>{fm.hero_image_credit_text}</a>
      </p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
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
