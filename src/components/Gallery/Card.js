import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const MediaCard = (prop) => {
  return (
    <Card sx={{ width: 345, maxHeight: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="GitHub Preview"
      />
      <CardContent
        sx={{
          height: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            {prop.data.label}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary">
            {prop.data.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={prop.data.link}
          target="_blank"
          rel="noopener"
        >
          demo
        </Button>
        <Button
          size="small"
          href={prop.data.repo}
          target="_blank"
          rel="noopener"
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
