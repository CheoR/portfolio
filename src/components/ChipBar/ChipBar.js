import React from "react";
import * as styles from "./chip.module.css";
export const Chip = (prop) => {
  return <div className={styles.chip}>{prop.data.long}</div>;
};
