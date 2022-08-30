import React from "react";
import { Link } from "gatsby";
import * as styles from "./card.module.css";

const Card = (props) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__image}>img</div>
      <div className={styles.card__chips}>chips</div>
      <div className={styles.card__description}>
        {props.data?.frontmatter.title}
      </div>
      <div className={styles.card__btns}>
        <Link to={`/blog/${props.data?.slug}`}>
          <button className={styles.card__btn}>Read More . .</button>
        </Link>
        <p>Posted: {props.data?.frontmatter.datePublished}</p>
      </div>
    </article>
  );
};

export default Card;
