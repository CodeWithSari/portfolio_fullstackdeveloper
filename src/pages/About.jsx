import React from "react";
import {
  Box,
  Typography,
  Paper,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

function About() {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 5, px: 2 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        About Me
      </Typography>

      <Typography paragraph>
        I’m a full-stack web developer specializing in the MERN stack—MongoDB, Express.js, React.js, and Node.js. With 6+ years in the EdTech industry, I blend technical expertise with teaching and mentoring experience, building real-world projects and empowering students.
      </Typography>

      <Timeline position="alternate">
        {/* Career Experience */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2024 june - 2025 may
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Web Development Trainer</Typography>
              <Typography>ICS India IT Training, Ottapalam</Typography>
              <Typography variant="body2">
                Teaching web development (Python Django, JavaScript) and mentoring students in full-stack projects.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2018 - 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Academic Counselor+ Programming Trainer</Typography>
              <Typography>G-tec Chelakkara</Typography>
              <Typography variant="body2">
                Guided students, advised on career paths, and managed training progress.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Education */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2016 - 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">MCA Graduate</Typography>
              <Typography>Bharathiyar University</Typography>
              <Typography variant="body2">
                Focused on software development, algorithms, and web technologies.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Skills */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Skills
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Technical Skills</Typography>
              <Typography variant="body2">
                React.js, Node.js, Express.js, MongoDB, Python Django, HTML, CSS, JavaScript, Bootstrap, Material-UI, Git, PostgreSQL.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default About;
