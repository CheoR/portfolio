import React, { useRef, useState } from "react";
import Card from "./Card";
import * as styles from "./gallery.module.css";

import { CHIPS, PROJECTS } from "./data";
import { Chip } from "./Chip";

const Gallery = () => {
  const inputField = useRef();
  const [filteredData, setFilteredData] = useState(PROJECTS);
  const searchItems = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(PROJECTS);
    }
    const filteredData = PROJECTS.filter((project) =>
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredData.length) {
      setFilteredData(filteredData);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__title}>
        <div>Gallery</div>
        {/* <div className={styles.gallery__chipbar}>
          {CHIPS.map((chip, idx) => (
            <Chip key={idx} data={chip} />
          ))}
        </div> */}
        <input
          className={styles.gallery__searchbar}
          value={inputField.value}
          placeholder="Search . . "
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <div className={styles.cards}>
        {filteredData.map((data, idx) => (
          <Card key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
