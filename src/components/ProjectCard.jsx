import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

function ProjectCard({ title, image, tech, link, link2 }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-8px)" },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: { xs: 180, sm: 200, md: 220 },
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" }, mt: 1 }}
        >
          {tech}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            color="secondary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: { xs: "100%", sm: "auto" },
              py: { xs: 0.5, sm: 1 }, 
              fontSize: { xs: "0.75rem", sm: "0.875rem" }, 
            }}
          >
            View Live
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: { xs: "100%", sm: "auto" },
              py: { xs: 0.5, sm: 1 },
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            GitHub
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
