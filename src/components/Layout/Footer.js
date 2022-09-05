import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  FaCodepen,
  FaFreeCodeCamp,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { SOCIALS } from "../data";

const Footer = () => {
  return (
    <Box component="footer">
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              // display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
              background: "pink",
            }}
          >
            Let's Connect!
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
          <Box>
            <Typography
              variant="h6"
              noWrap
              sx={{
                // display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 400,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                textAlign: "center",
                background: "lightblue",
              }}
            >
              <IconButton
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              // display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
              background: "lightblue",
            }}
          >
            &copy; CheoR {new Date().getFullYear().toString()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
