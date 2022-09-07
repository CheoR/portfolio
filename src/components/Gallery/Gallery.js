import React, { useRef, useState } from "react";
import { Box, Container, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Card from "./Card";

import { PROJECTS } from "../data";
// import { Chip } from "./Chip";

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
    <Box sx={{ height: "100%" }}>
      <Grid container>
        <Grid item xs={12} md={10}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            Gallery
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            value={inputField.value}
            label="Search"
            onChange={(e) => searchItems(e.target.value)}
          />
          <SearchIcon />
        </Grid>
      </Grid>
      <Container sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {filteredData.map((data, idx) => (
          <Card key={idx} data={data} />
        ))}
      </Container>
    </Box>

    //     <div className={styles.gallery__chipbar}>
    //       {CHIPS.map((chip, idx) => (
    //         <Chip key={idx} data={chip} />
    //       ))}
    //     </div>
  );
};

export default Gallery;
