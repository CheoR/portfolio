import React from "react";
import Card from "./Card";
import * as styles from "./gallery.module.css";

import { PROJECTS } from "./data";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__title}>
        <div>Gallery</div>
        <input className={styles.gallery__searchbar} />
      </div>
      <div className={styles.cards}>
        {PROJECTS.map((data, idx) => (
          <Card data={data} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
