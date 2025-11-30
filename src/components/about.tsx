import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import profileImg from "../assets/images/profile.png";

const useStyles = makeStyles((theme: any) => ({
  section: {
    width: "100%",
    padding: "100px 0",
    background:
      theme.palette.mode === "light"
        ? "#F9FAFB"
        : theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
  },

  wrapper: {
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 20px",
    gap: "60px",

    ["@media (max-width: 900px)"]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      gap: "40px",
    },
  },

  image: {
    width: "100%",
    maxWidth: "420px",
    borderRadius: "18px",
    objectFit: "cover",
    boxShadow:
      theme.palette.mode === "light"
        ? "0 10px 30px rgba(0,0,0,0.12)"
        : "0 10px 30px rgba(255,255,255,0.08)",
  },

  heading: {
    fontWeight: 700,
    fontSize: "2.6rem",
    marginBottom: "20px",
    color: theme.palette.text.primary,
  },

  textBlock: {
    maxWidth: "600px",
    fontSize: "1.1rem",
    lineHeight: 1.75,
    color: theme.palette.text.primary,
  },
}));

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <section id="about" className={classes.section}>
      <Container>
        <Box className={classes.wrapper}>
          <Box>
            <Typography className={classes.heading}>About Me</Typography>

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
                and participating in hackathons to constantly improve my skills.
              </Typography>

              <Typography paragraph>
                I work with technologies like C#, Python, Azure, SQL, and React.
                I’m always eager to learn more and contribute to impactful,
                innovative projects.
              </Typography>

              <Typography paragraph>
                I’m passionate about blending creativity and problem-solving to
                build solutions that truly make a difference.
              </Typography>
            </div>
          </Box>
          <Box>
            <img src={profileImg} className={classes.image} alt="Profile" />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default About;
