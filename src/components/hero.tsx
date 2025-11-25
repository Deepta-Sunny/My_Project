import React from "react";
import { Container, Typography, Button, IconButton, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import heroBg from "../assets/images/background.jpg";

const useStyles = makeStyles((theme: any) => ({
  root: {
    minHeight: "calc(100vh - 90px)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "0 16px",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      theme.palette.mode === "dark"
        ? "rgba(15, 23, 42, 0.55)"
        : "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(6px)",
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    animation: "$fadeUp 1.2s ease-out",
    paddingTop: "40px",
  },

  welcomeText: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "4rem",
    fontWeight: 700,
    marginBottom: "12px",
    color: theme.palette.primary.main,
    "@media (max-width: 600px)": {
      fontSize: "2.8rem",
    },
  },

  tagline: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    color: theme.palette.text.secondary,
    marginBottom: "40px",
    "@media (max-width: 600px)": {
      fontSize: "1.2rem",
    },
  },

  button: {
    borderRadius: "50px",
    padding: "14px 40px",
    fontWeight: 600,
    fontSize: "1.1rem",
    textTransform: "none",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    transition: "0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      transform: "translateY(-3px)",
    },
  },

  socialRow: {
    marginTop: "48px",
    display: "flex",
    gap: "24px",
    justifyContent: "center",
    animation: "$fadeUp 1.4s ease-out",
  },

  iconBtn: {
    color: theme.palette.text.primary,
    transition: "0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
      transform: "scale(1.18)",
    },
  },

  // ✅ Animation from your older hero
  "@keyframes fadeUp": {
    "0%": { opacity: 0, transform: "translateY(25px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
}));

const Hero: React.FC = () => {
  const classes = useStyles();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className={classes.root}>
      <div className={classes.overlay}></div>

      <Container className={classes.content} sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          className={classes.welcomeText}
          sx={{ fontSize: { xs: "3.2rem", sm: "5rem", md: "6rem" } }}
        >
          Welcome
        </Typography>

        <Typography
          className={classes.tagline}
          sx={{ fontSize: { xs: "1.3rem", sm: "1.9rem", md: "2.1rem" }, mb: { xs: 5, md: 6 } }}
        >
          Turning ideas into impactful solutions.
        </Typography>

        <Button
          className={classes.button}
          onClick={() => scrollToSection("projects")}
          sx={{
        fontSize: { xs: "1.15rem", sm: "1.3rem" },
        padding: { xs: "16px 48px", sm: "18px 60px" }
          }}
        >
          Explore My Work
        </Button>

        <Box className={classes.socialRow}>
          <IconButton
            className={classes.iconBtn}
            href="https://github.com/yourusername"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton
            className={classes.iconBtn}
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
