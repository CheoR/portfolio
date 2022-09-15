import React, { useRef, useState } from "react";
import { Box, Chip, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useSearch from "../../utils/useSearch";
// import ChipBar from "../ChipBar/ChipBar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Gallery = ({ data: _data, filter, Card }) => {
  let allChips = [
    "All",
    ...new Set(_data.map((project) => project.tags).flat(1)),
  ];

  allChips = allChips.map((tag, idx) => ({ key: idx, label: tag }));

  const [chips, setChips] = useState(allChips);

  const addProjects = () => undefined;
  const removeProjects = () => undefined;
  const toggleChip = (e) => console.log("chip clicked is ", e.target);

  const inputField = useRef();
  const [data, setData] = useSearch(_data, filter);

  return (
    <Grid>
      {/* <Grid item sx={{ background: "blue" }}>
        <Box
          sx={{
            background: "red",
            display: "flex",

            alignItems: "center",
            width: "100%",
          }}
        >
          <ArrowBackIosNewIcon />
          <Box
            sx={{
              background: "green",
              display: "flex",

              alignItems: "center",
              width: "100%",
              overflowX: "scroll",
              gap: 1,
            }}
          >
            {chips.map((tag) => (
              <Chip
                key={tag.key}
                label={tag.label}
                variant="outlined"
                sx={{ background: "lightgreen" }}
                clickable
                onClick={toggleChip}
              />
            ))}
          </Box>
          <ArrowForwardIosIcon />
        </Box>
        <ChipBar data={_data} />
      </Grid> */}
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "flex-end",
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
        item
        // sx={{
        //   display: "flex",
        //   alignItems: "flex-end",
        // }}
        px={3}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filter By Tech</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              {chips.map((tag) => (
                <Chip
                  key={tag.key}
                  label={tag.label}
                  variant="outlined"
                  sx={{ background: "lightgreen" }}
                  clickable
                  onClick={toggleChip}
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
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
