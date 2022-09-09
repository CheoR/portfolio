import React, { useRef } from "react";
import { Box, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useSearch from "../../utils/useSearch";
// import { Chip } from "./Chip";

const Gallery = ({ data: _data, filter, Card }) => {
  const inputField = useRef();
  const [data, setData] = useSearch(_data, filter);
  //     <div className={styles.gallery__chipbar}>
  //       {CHIPS.map((chip, idx) => (
  //         <Chip key={idx} data={chip} />
  //       ))}
  //     </div>
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
            onChange={(e) => setData(e.target.value)}
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
        {data.length > 0 ? (
          data.map((obj) => (
            <Grid item>
              <Card key={obj.id} data={obj} />
            </Grid>
          ))
        ) : (
          <Box>Nothing Found</Box>
        )}
      </Grid>
    </Box>
  );
};

export default Gallery;
