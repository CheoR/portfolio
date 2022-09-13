import React, { useRef } from "react";
import { Box, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useSearch from "../../utils/useSearch";
// import ChipBar from "../ChipBar/ChipBar";

const Gallery = ({ data: _data, filter, Card }) => {
  const inputField = useRef();
  const [data, setData] = useSearch(_data, filter);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={10}>
          {/* <ChipBar data={_data} /> */}
          {""}
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
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
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
        gap={1}
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
