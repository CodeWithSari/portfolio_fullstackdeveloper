import React, { useState, useEffect } from "react";
import { Typography, Box, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import SocialLinks from "../components/SocialLinks";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

function Home() {
  const location = useLocation();

  const [text, setText] = useState("");
  const fullText = "Hi, I'm Saritha — MERN Full-Stack Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.state && location.state.scrollToServices) {
      scroller.scrollTo("services", {
        smooth: true,
        duration: 600,
        offset: -80,
      });
    }
  }, [location]);

  const services = [
    {
      title: "UI/UX Design",
      desc: "User-centric design with clean layouts, prototypes, and intuitive interactions.",
      img: "./public/uiux.jpeg",
    },
    {
      title: "React Frontend Development",
      desc: "Build dynamic and responsive user interfaces using React for modern web applications.",
      img: "./public/react.png",
    },
    {
      title: "MongoDB Express Backend",
      desc: "Develop robust backend systems and RESTful APIs with Express and MongoDB for seamless, secure, and scalable applications.",
      img: "/public/backend.jpg",
    },
    {
      title: "SEO Optimized Websites",
      desc: "Fast, mobile-responsive websites with SEO best practices.",
      img: "/seo.png",
    },
  ];

  return (
    <Box sx={{ mt: 5, px: { xs: 2, md: 8 } }}>
      {/* Hero Section */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
        {/* Left Column - Text */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h3" gutterBottom>
              Full-Stack Developer & Problem Solver
            </Typography>
            <Typography variant="h5" sx={{ color: "primary.main", mb: 2 }}>
              {text}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Welcome to <span style={{ fontWeight: "bold" }}>CodeWithSari</span>, the digital portfolio of <span style={{ fontWeight: "bold" }}>Saritha</span>, a passionate full-stack developer specializing in MERN stack. I build seamless web experiences and robust backend systems that solve real-world problems.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
              <Button
                variant="outlined"
                color="secondary"
                component="a"
                href="/Saritha-FullStack-Resume.pdf"
                download
                sx={{ fontSize: { xs: "0.7rem", sm: "0.875rem" } }}
              >
                Download Resume
              </Button>
            </Box>
            <Box mt={3}>
              <SocialLinks />
            </Box>
          </Box>
        </Grid>

        {/* Right Column - Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
            <img
              src="./public/coding.png"
              alt="Developer at work"
              style={{ width: "100%", maxWidth: "400px", borderRadius: "12px" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Services Section */}
      <Box id="services" sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          My Services
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 4,
            mt: 4,
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: "100%", sm: "45%", md: "23%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-8px)" },
                p: 2,
              }}
            >
              <CardMedia
                component="img"
                image={service.img}
                alt={service.title}
                sx={{ width: 150, height: 120, mb: 2 }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
