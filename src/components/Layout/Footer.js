import React from "react";
import {
  FaCodepen,
  FaFreeCodeCamp,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

import * as styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__copywrite}>
        &copy; CheoR {new Date().getFullYear().toString()}
      </div>
      <ul className={styles.footer__contacts}>
        <li className={styles.footer__contacts__item}>
          <a
            className={styles.footer__contacts__link}
            href="https://www.linkedin.com/in/cheo-roman/"
            aria-label="LinkIn"
            target="_blank"
            rel="noreferrer"
          >
            {/* <i
                  className="fa fa-linkedin-square fa-1x"
                  aria-hidden="true"
                ></i> */}
            <FaLinkedin />
          </a>
        </li>
        <li className={styles.footer__contacts__item}>
          <a
            className={styles.footer__contacts__link}
            href="https://github.com/CheoR"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            {/* <i className="fa fa-github-square fa-1x" aria-hidden="true"></i> */}
            <FaGithubSquare />
          </a>
        </li>
        <li className={styles.footer__contacts__item}>
          <a
            className={styles.footer__contacts__link}
            href="https://www.freecodecamp.org/cheor"
            aria-label="Free Code Camp"
            target="_blank"
            rel="noreferrer"
          >
            {/* <i
                  className="fa fa-free-code-camp fa-1x"
                  aria-hidden="true"
                ></i> */}
            <FaFreeCodeCamp />
          </a>
        </li>
        <li className={styles.footer__contacts__item}>
          <a
            className={styles.footer__contacts__link}
            href="http://codepen.io/CheoR/"
            aria-label="Code Pen"
            target="_blank"
            rel="noreferrer"
          >
            {/* <i className="fa fa-codepen fa-1x" aria-hidden="true"></i> */}
            <FaCodepen />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
