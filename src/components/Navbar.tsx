import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import type { RootState } from "../store/store";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles((theme: any) => ({
  appBar: {
    backgroundColor:
      theme.palette.mode === "dark" ? "#0F172A" : "#FFFFFF",
    borderBottom:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(0,0,0,0.06)",
    boxShadow: "none",
  },

  toolbar: {
    maxWidth: "100%",
    margin: "0",
    width: "100%",
    padding: "22px 48px",
    minHeight: "90px",
    display: "flex",
    justifyContent: "space-between",
  },

  hoverEffect: {
    transition: "0.25s ease",
    borderRadius: "8px",
    padding: "6px 12px",

    "&:hover": {
      transform: "translateY(-2px)",
      color:
        theme.palette.mode === "light"
          ? "#0F172A !important"
          : `${theme.palette.primary.main} !important`,

      backgroundColor:
        theme.palette.mode === "light"
          ? "rgba(12,72,94,0.15) !important"
          : "rgba(148,163,184,0.15) !important",

      boxShadow:
        theme.palette.mode === "light"
          ? "0 0 10px rgba(59,183,228,0.25)"
          : "0 0 10px rgba(148,163,184,0.35)",
    },
  },

  brand: {
    fontWeight: 700,
    fontSize: "1.55rem",
    letterSpacing: "0.5px",
    color: theme.palette.text.primary,
    cursor: "pointer",
  },

  navLinks: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    marginLeft: "auto",
  },

  linkText: {
    fontSize: "1rem",
    fontWeight: 500,
    cursor: "pointer",
    color: theme.palette.text.primary,
  },

  iconGroup: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginLeft: "24px",
    paddingLeft: "24px",
    borderLeft:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.15)"
        : "1px solid rgba(147, 51, 234, 0.2)",
  },

  iconButton: {
    color: theme.palette.text.primary,
  },
}));


const Navbar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

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
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          className={`${classes.brand} ${classes.hoverEffect}`}
          onClick={() => scrollToSection("hero")}
          sx={{ cursor: "pointer", fontWeight: 500 }}
        >
          Deepta K Sunny
        </Typography>

        <div className={classes.navLinks}>
          <Typography
            className={`${classes.linkText} ${classes.hoverEffect}`}
            onClick={() => scrollToSection("hero")}
          >
            Home
          </Typography>
          <Typography
            className={`${classes.linkText} ${classes.hoverEffect}`}
            onClick={() => scrollToSection("about")}
          >
            About
          </Typography>
          <Typography
            className={`${classes.linkText} ${classes.hoverEffect}`}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </Typography>
          <Typography
            className={`${classes.linkText} ${classes.hoverEffect}`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Typography>
          <Typography
            className={`${classes.linkText} ${classes.hoverEffect}`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Typography>

          <div className={classes.iconGroup}>
            <IconButton
              href="https://github.com/Deepta-Sunny/My_Project"
              target="_blank"
              className={`${classes.iconButton} ${classes.hoverEffect}`}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/deeptaksunny"
              target="_blank"
              className={`${classes.iconButton} ${classes.hoverEffect}`}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              onClick={() => dispatch(toggleTheme())}
              className={`${classes.iconButton} ${classes.hoverEffect}`}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
