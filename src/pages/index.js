import * as React from "react";

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
    text: "Portfolio V1 Here",
    url: "https://cheor.github.io/portfolio/v1/",
    description: "Click here to view Simple Portfolio V1 Responsive html, css",
    color: "#663399",
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Portfolio</title>
      <h1 style={headingStyles}>
        <span>Under Construction</span>
      </h1>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={link.url}>
                {link.description}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
