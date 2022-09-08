import React, { useRef, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Card from "../../components/Card/Card";

const BlogGallery = ({ data }) => {
  const BLOGS = data.allMdx.nodes;

  const inputField = useRef();
  const [filteredData, setFilteredData] = useState(BLOGS);
  const searchItems = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(BLOGS);
    }
    const filteredData = BLOGS.filter((blog) =>
      blog.body.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredData.map((blog) => (
          <Grid item>
            <Card key={blog.id} data={blog} />
          </Grid>
        ))}
      </Grid>
    </Box>

    //       {/* <div className={styles.gallery__chipbar}>
    //       {CHIPS.map((chip, idx) => (
    //         <Chip key={idx} data={chip} />
    //       ))}
  );
};

export default BlogGallery;
