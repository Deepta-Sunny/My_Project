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
    borderRadius: "16px",
    background: theme.palette.background.paper,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 8px 30px rgba(0, 0, 0, 0.45)"
        : "0 8px 30px rgba(147, 51, 234, 0.08)",
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(168, 85, 247, 0.15)"
        : "1px solid rgba(147, 51, 234, 0.1)",
  },

  imageWrapper: {
    width: "100%",
    height: "280px",
    borderRadius: "12px",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 4px 20px rgba(147, 51, 234, 0.25)",
  },

  textBlock: {
    maxWidth: 600,
    color: theme.palette.text.primary,
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
            <Box sx={{ width: { xs: "85%", md: "30%" } }}>
              <img
                src={profileImg}
                alt="Deepta K Sunny"
                className={classes.imageWrapper}
              />

            </Box>
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <div className={classes.textBlock}>
                <Typography paragraph>
                  I’m Deepta Sunny, an Associate Consultant passionate about creating solutions
                  that make life easier for people. I love solving real-world problems and
                  building applications that have a meaningful impact.
                </Typography>

                <Typography paragraph>
                  Beyond technology, I’m a good listener, friendly, and enjoy connecting with
                  people. When I’m not coding, you’ll find me exploring new places, reading
                  books, or participating in hackathons to challenge myself and learn from
                  others.
                </Typography>

                <Typography paragraph>
                  I have experience with technologies like C#, Python, Azure, SQL, and React,
                  and I’m always eager to learn and grow. My goal is to contribute to
                  innovative projects that address everyday challenges and make a difference.
                </Typography>

                <Typography paragraph>
                  I love learning, exploring new ideas, and collaborating on projects that
                  combine technology with meaningful problem-solving. Let’s connect and create
                  something amazing together!
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
