import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  listStyles,
  listItemStyles,
  linkStyle,
  pageStyles,
  headingStyles,
} from "./layout.module.css";

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
    url: "/v1", // https://cheor.github.io/portfolio/v1/",
    description: "V1 Simple Portfolio V1 Responsive html, css",
    color: "#663399",
  },
];

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
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
      </main>
    </div>
  );
};

export default Layout;
