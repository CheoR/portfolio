import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

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
      <nav>
        <ul style={listStyles}>
          {links.map((link) => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <Link to={link.url} style={linkStyle}>
                  {link.description}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          <span>{pageTitle}</span>
        </h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
