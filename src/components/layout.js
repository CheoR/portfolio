import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  headingStyles,
  listStyles,
  listItemStyles,
  linkStyle,
  pageStyles,
  siteTitle,
} from "./layout.module.css";
const imgPug =
  "https://images.unsplash.com/photo-1632669671776-cefd05baca87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

const links = [
  {
    url: "/",
    description: "Home",
    color: "#663399",
  },
  {
    url: "/about",
    description: "About",
    color: "#663399",
  },
  {
    url: "/blog",
    description: "Blog",
    color: "#663399",
  },
  {
    url: "/contact",
    description: "Contact",
    color: "#663399",
  },
  {
    url: "/v1", // https://cheor.github.io/portfolio/v1/",
    description: "Portfolio V1",
    color: "#663399",
  },
];

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  if (!data) return;
  return (
    <div>
      <div className={container}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      </div>
      <nav className={container}>
        <ul className={listStyles}>
          {links.map((link) => (
            <li
              key={link.url}
              className={{ ...listItemStyles, color: link.color }}
            >
              <span>
                <Link to={link.url} className={linkStyle}>
                  {link.description}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <main className={pageStyles}>
        <h1 className={headingStyles}>
          <span>{pageTitle}</span>
        </h1>
        {children}
        <StaticImage src={imgPug} alt="Pug by @jamestiono" />
      </main>
    </div>
  );
};

export default Layout;
