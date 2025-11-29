import React from "react";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  footer: {
    width: "100%",
    marginTop: "auto",
  },
  root: {
    maxWidth: "100%",
    padding: "48px 32px",
    textAlign: "center",
    background:
      theme.palette.mode === "dark"
        ? theme.palette.background.paper
        : "#FAFAFA",
    borderTop:
      theme.palette.mode === "dark"
        ? "1px solid rgba(168, 85, 247, 0.15)"
        : "1px solid rgba(147, 51, 234, 0.15)",
  },

  text: {
    opacity: 0.7,
    fontSize: "0.95rem",
    color: theme.palette.text.secondary,
  },
}));



const Footer: React.FC = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container maxWidth={false} className={classes.root}>
        <Typography className={classes.text}>
          © {year} Deepta K Sunny. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
