import React from "react";
import * as styles from "./card.module.css";

const Card = (prop) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>img</div>
      <div className={styles.card__chips}>chips</div>
      <div className={styles.card__description}>{prop.data.description}</div>
      <div className={styles.card__btns}>
        <button className={styles.card__btn}>demo</button>
        <button className={styles.card__btn}>github</button>
      </div>
    </div>
  );
};

export default Card;
