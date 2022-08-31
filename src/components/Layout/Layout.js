import * as React from "react";
import { Link } from "gatsby";

import Footer from "./Footer";

import "../global.css";
import * as styles from "./layout.module.css";

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
  return (
    <div className={styles.container}>
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
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
