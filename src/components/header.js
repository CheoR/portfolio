import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  );
};

export default Header;
