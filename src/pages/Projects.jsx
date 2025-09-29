import React, { useState } from "react";
import { Grid, TextField, Box, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const projectData = [
  {
    title: "Spice-Delight-Restaurant",
    image: "./public/spicedelight.png",
    tech: "HTML, CSS",
    link: "https://spice-delight-restaurant.vercel.app/",
    link2: "https://github.com/CodeWithSari/Spice-Delight-Restaurant",
  },
  
  {
    title: "Travel Blog Website",
    image: "./public/travelblog.png",
    tech: "HTML5, CSS3, Bootstrap 5",
    link: "https://travel-blog-the-wandering-soul.vercel.app/index.html",
    link2: "https://github.com/CodeWithSari/Travel-blog--The-Wandering-Soul",
  },

  {
    title: "TaskFlow-Todo-App",
    image: "./public/todoapp.png",
    tech: "HTML, Tailwind CSS, JavaScript.",
    link: "https://task-flow-todo-app.vercel.app/",
    link2: "https://github.com/CodeWithSari/TaskFlow-Todo-App",
  },
  {
    title: "Banking Web App",
    image: "./public/bankapp.png",
    tech: "HTML, CSS, JavaScript, Tailwind CSS",
    link: "https://js-banking-app-edge-bank.vercel.app/",
      link2: "https://github.com/CodeWithSari/JS-BankingApp-EdgeBank",

  },
  {
    title: "SnapCart-ProductFetching",
    image: "./public/productfetching.png",
    tech: "React, Vite, React-Bootstrap ,dummyjson.com API",
    link: "https://snap-cart-product-fetching-react.vercel.app/",
      link2: "https://github.com/CodeWithSari/SnapCart-ProductFetching-React/tree/master",
  },
];


function Projects() {
  const [search, setSearch] = useState("");

  const filtered = projectData.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>My Projects</Typography>
      <TextField
        label="Search projects"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container spacing={2}>
        {filtered.map((proj, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <ProjectCard {...proj} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
