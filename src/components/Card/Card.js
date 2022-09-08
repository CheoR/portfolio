import * as React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";
import { Box } from "@mui/material";

const MediaCard = (props) => {
  const image = getImage(props.data?.frontmatter.hero_image);

  return (
    <Card sx={{ width: 345, maxHeight: 400 }}>
      <GatsbyImage image={image} alt={props.data?.frontmatter.hero_image_alt} />
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
            {props.data?.frontmatter.title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary">
            {props.data?.body}
          </Typography>
        </Box>
        <Box>
          <Typography gutterBottom variant="h7" component="div">
            Published: {props.data?.frontmatter.datePublished}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link to={`/blog/${props.data?.frontmatter.slug}`}>
          <Button size="small">Read</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
