import React, { useRef } from "react";
import { Box, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useSearch from "../../utils/useSearch";
// import ChipBar from "../ChipBar/ChipBar";

const Gallery = ({ data: _data, filter, Card }) => {
  const inputField = useRef();
  const [data, setData] = useSearch(_data, filter);

  return (
    <Grid>
      <Grid item>
        {/* <ChipBar data={_data} /> */}
        Moocow
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "flex-end",
          // justifyContent: "center",
        }}
        px={3}
      >
        <TextField
          label="Search"
          sx={{ width: "100%", alignText: "right" }}
          variant="standard"
          value={inputField.value}
          onChange={(e) => setData(e.target.value)}
        />
        <SearchIcon />
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
    </Grid>
  );
};

export default Gallery;
