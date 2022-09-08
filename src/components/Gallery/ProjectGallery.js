import React, { useRef, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Card from "./ProjectCard";
import { PROJECTS } from "../../data/data";
// import { Chip } from "./Chip";

const ProjectGallery = () => {
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
    <Box>
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
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        gap={2}
        p={1}
      >
        {filteredData.map((data, idx) => (
          <Grid item>
            <Card key={idx} data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>

    //     <div className={styles.gallery__chipbar}>
    //       {CHIPS.map((chip, idx) => (
    //         <Chip key={idx} data={chip} />
    //       ))}
    //     </div>
  );
};

export default ProjectGallery;
