import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../global.css";
import * as styles from "./layout.module.css";
import Footer from "./Footer";
const imgPug =
  "https://images.unsplash.com/photo-1632669671776-cefd05baca87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

const links = [
  {
    url: "/",
    description: "Home",
  },
  {
    url: "/about",
    description: "About",
  },
  {
    url: "/blog",
    description: "Blog",
  },
  {
    url: "/contact",
    description: "Contact",
  },
  {
    url: "/v1", // https://cheor.github.io/portfolio/v1/",
    description: "Portfolio V1",
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
    <div className={styles.container}>
      <div className={styles.title}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <header className={styles.header}>
          {data.site.siteMetadata.title}
        </header>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.url} className={styles.navLinksLi}>
              <span className={styles.navLinkSpan}>
                <Link to={link.url} className={styles.navLink}>
                  {link.description}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.page}>
        <h1 className={styles.heading}>
          <span>{pageTitle}</span>
        </h1>
        <div className={styles.children}>{children}</div>
        <div className={styles.staticImg}>
          <StaticImage src={imgPug} alt="Pug by @jamestiono" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
