// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import { Brightness4, Brightness7 } from "@mui/icons-material";
// import { makeStyles } from "@mui/styles";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../store/themeSlice";
// import type { RootState } from "../store/store";
// import { Link } from "react-router-dom";


// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// const useStyles = makeStyles((theme: any) => ({
//   appBar: {
//     backgroundColor:
//       theme.palette.mode === "dark"
//         ? "#0F172A"
//         : "#FFFFFF",
//     borderBottom:
//       theme.palette.mode === "dark"
//         ? "1px solid rgba(255,255,255,0.08)"
//         : "1px solid rgba(0,0,0,0.06)",
//     boxShadow: "none",
//   },

//   toolbar: {
//     maxWidth: 1200,
//     margin: "0 auto",
//     width: "100%",
//     padding: "24px 40px",
//     minHeight: "90px",
//   },

//   brand: {
//     fontWeight: 700,
//     fontSize: "1.6rem",
//     color: theme.palette.text.primary,
//     textDecoration: "none",
//   },

//   navLinks: {
//     marginLeft: "auto",
//     display: "flex",
//     gap: "32px",
//     alignItems: "center",
//   },

//   linkText: {
//     fontSize: "1rem",
//     fontWeight: 500,
//     textDecoration: "none",
//     color: theme.palette.text.primary,
//     transition: "all 0.25s ease",
//     padding: "8px 16px",
//     borderRadius: "8px",

//     "&:hover": {
//       color: theme.palette.mode === "dark" ? "#070101ff" : theme.palette.primary.main,
//       backgroundColor: theme.palette.mode === "dark" 
//         ? "rgba(142, 173, 210, 0.15)"
//         : "rgba(99, 102, 241, 0.1)",
//       transform: "translateY(-2px)",
//     },
//   },

//   iconGroup: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     marginLeft: "24px",
//     paddingLeft: "24px",
//     borderLeft:
//       theme.palette.mode === "dark"
//         ? "1px solid rgba(148, 163, 184, 0.2)"
//         : "1px solid rgba(99, 102, 241, 0.2)",
//   },

//   iconButton: {
//     color: theme.palette.text.primary,
//     transition: "all 0.3s ease",
//     "&:hover": {
//       color: theme.palette.primary.main,
//       transform: "scale(1.15)",
//       backgroundColor: theme.palette.mode === "dark" 
//         ? "rgba(142, 173, 210, 0.15)"
//         : "rgba(99, 102, 241, 0.12)",
//     },
//   },
// }));


// const Navbar: React.FC = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state: RootState) => state.theme.darkMode);

//   return (
//     <AppBar position="fixed" elevation={0} className={classes.appBar}>

//       <Toolbar className={classes.toolbar}>
//         <Typography variant="h5" className={classes.brand}>
//           Deepta K Sunny
//         </Typography>

//         <div className={classes.navLinks}>
//           <Typography component={Link} to="/" className={classes.linkText}>
//             Home
//           </Typography>

//           <Typography component={Link} to="/about" className={classes.linkText}>
//             About
//           </Typography>

//           <Typography component={Link} to="/skills" className={classes.linkText}>
//             Skills
//           </Typography>

//           <Typography component={Link} to="/projects" className={classes.linkText}>
//             Projects
//           </Typography>

//           <Typography component={Link} to="/contact" className={classes.linkText}>
//             Contact
//           </Typography>

//           <div className={classes.iconGroup}>
//             <IconButton
//               size="small"
//               component="a"
//               href="https://github.com/yourusername"
//               target="_blank"
//               rel="noreferrer"
//               className={classes.iconButton}
//             >
//               <GitHubIcon />
//             </IconButton>
//             <IconButton
//               size="small"
//               component="a"
//               href="https://www.linkedin.com/in/yourprofile"
//               target="_blank"
//               rel="noreferrer"
//               className={classes.iconButton}
//             >
//               <LinkedInIcon />
//             </IconButton>
//             <IconButton
//               size="small"
//               onClick={() => dispatch(toggleTheme())}
//               className={classes.iconButton}
//             >
//               {darkMode ? <Brightness7 /> : <Brightness4 />}
//             </IconButton>
//           </div>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;




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

  brand: {
    fontWeight: 700,
    fontSize: "1.55rem",
    letterSpacing: "0.5px",
    color: theme.palette.text.primary,
    textDecoration: "none",
    transition: "0.25s ease",

    "&:hover": {
      color: theme.palette.primary.main,
      transform: "translateY(-2px)",
    },
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
    textDecoration: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    color: theme.palette.text.primary,
    transition: "all 0.25s ease",
    cursor: "pointer",

    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.08)"
          : "rgba(99,102,241,0.1)",
      transform: "translateY(-2px)",
    },
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
    transition: "0.3s ease",

    "&:hover": {
      color: theme.palette.primary.main,
      transform: "scale(1.15)",
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.08)"
          : "rgba(99,102,241,0.12)",
    },
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90; // navbar height
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
          className={classes.brand}
          onClick={() => scrollToSection("hero")}
          sx={{ cursor: "pointer", fontWeight: 400 }}
        >
          Deepta K Sunny
        </Typography>

        <div className={classes.navLinks}>
          <Typography 
            className={classes.linkText}
            onClick={() => scrollToSection("hero")}
          >
            Home
          </Typography>
          <Typography 
            className={classes.linkText}
            onClick={() => scrollToSection("about")}
          >
            About
          </Typography>
          <Typography 
            className={classes.linkText}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </Typography>
          <Typography 
            className={classes.linkText}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Typography>
          <Typography 
            className={classes.linkText}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Typography>

          <div className={classes.iconGroup}>
            <IconButton
              href="https://github.com/yourusername"
              target="_blank"
              className={classes.iconButton}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              className={classes.iconButton}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              onClick={() => dispatch(toggleTheme())}
              className={classes.iconButton}
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
