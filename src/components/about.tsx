import React from "react";
import { Container, Box, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import profileImg from "../assets/images/profile.png";


const useStyles = makeStyles((theme: any) => ({
  section: {
    padding: "80px 16px",
    background: theme.palette.background.default,
  },

  title: {
    textAlign: "center",
    marginBottom: "48px",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },

  paper: {
    padding: "48px",
    maxWidth: 1000,
    margin: "0 auto",
    borderRadius: "20px",
    background: theme.palette.background.paper,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 8px 30px rgba(0, 0, 0, 0.45)"
        : "0 8px 30px rgba(59, 183, 228, 0.15)",
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(148, 163, 184, 0.25)"
        : "1px solid rgba(59, 183, 228, 0.25)",
    transition: "0.3s ease",
  },

  imageWrapper: {
    width: "100%",
    height: "300px",
    borderRadius: "16px",
    objectFit: "cover",
    boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
  },

  textBlock: {
    maxWidth: 600,
    color: theme.palette.text.primary,
    fontSize: "1.05rem",
    lineHeight: 1.7,
  },
}));

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <section id="about">
      <Container className={classes.section}>
        <Typography variant="h4" className={classes.title}>
          About Me
        </Typography>

        <Paper elevation={3} className={classes.paper}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {/* LEFT IMAGE */}
            <Box sx={{ width: { xs: "100%", md: "35%" } }}>
              <img
                src={profileImg}
                alt="Profile placeholder"
                className={classes.imageWrapper}
              />
            </Box>

            {/* RIGHT TEXT */}
            <Box sx={{ width: { xs: "100%", md: "65%" } }}>
              <div className={classes.textBlock}>
                <Typography paragraph>
                  I’m Deepta Sunny, an Associate Consultant passionate about
                  creating solutions that simplify and enhance everyday life. I
                  enjoy solving real-world challenges and building meaningful,
                  user-centered applications.
                </Typography>

                <Typography paragraph>
                  Outside of technology, I’m a friendly person who enjoys
                  listening, learning, and exploring. I love traveling, reading,
                  and participating in hackathons to constantly improve my
                  skills.
                </Typography>

                <Typography paragraph>
                  I work with technologies like C#, Python, Azure, SQL, and
                  React. I’m always eager to learn more and contribute to
                  impactful, innovative projects.
                </Typography>

                <Typography paragraph>
                  I’m passionate about blending creativity and problem-solving
                  to build solutions that truly make a difference.
                </Typography>
              </div>
            </Box>
          </Box>
        </Paper>
      </Container>
    </section>
  );
};

export default About;