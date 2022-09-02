import React from "react";

import { Link } from "gatsby";
import { LINKS } from "../data";

import * as styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        {LINKS.map((link) => (
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
  );
};

export default Navbar;
