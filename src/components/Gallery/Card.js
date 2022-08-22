import React from "react";
import * as styles from "./card.module.css";

const Card = (prop) => {
  return (
    <div key={prop.key} className={styles.card}>
      <div className={styles.card__image}>img</div>
      <div className={styles.card__chips}>chips</div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque numquam
        perspiciatis atque quos.
      </div>
      <div className={styles.card__btns}>
        <button className={styles.card__btn}>demo</button>
        <button className={styles.card__btn}>github</button>
      </div>
    </div>
  );
};

export default Card;
