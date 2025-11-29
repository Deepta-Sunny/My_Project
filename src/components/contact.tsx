import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";

import emailIcon from "../assets/images/Email.png"; 

const useStyles = makeStyles((theme: any) => ({
  section: {
    padding: "100px 16px",
    background: theme.palette.background.default,
  },

  titleWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginBottom: "48px",
  },

  emailImg: {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  },

  title: {
    fontWeight: 700,
    fontSize: "2.2rem",
    color: theme.palette.text.primary,
  },

  paper: {
    maxWidth: 650,
    margin: "0 auto",
    padding: "48px",
    borderRadius: "20px",
    background: theme.palette.background.paper,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 10px 32px rgba(0,0,0,0.45)"
        : "0 10px 32px rgba(99,102,241,0.15)",
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(148,163,184,0.25)"
        : "1px solid rgba(99,102,241,0.2)",
    transition: "0.3s ease",

    "&:hover": {
      transform: "translateY(-4px)",
    },
  },

  formField: {
    marginBottom: "28px",
  },

  submitButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },

  submitButton: {
    textTransform: "none",
    borderRadius: "10px",
    padding: "12px 36px",
    fontWeight: 600,
    fontSize: "1rem",
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark" ? "#6b92c0" : "#2a5a9e",
      transform: "translateY(-3px)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 10px 32px rgba(142,173,210,0.4)"
          : "0 10px 32px rgba(65,114,193,0.35)",
    },
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      toast.error("Invalid email. Please try again.", {
        progressClassName: "toast-progress-error",
      });
      return;
    }

    const stored = JSON.parse(localStorage.getItem("contacts") || "[]");
    stored.push(formData);
    localStorage.setItem("contacts", JSON.stringify(stored));

    toast.success("Message submitted successfully!", {
      progressClassName: "toast-progress-success",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <Container className={classes.section}>
        
        {/* Top Title With Email Icon */}
        <Box className={classes.titleWrapper}>
          <img src={emailIcon} alt="email icon" className={classes.emailImg} />
          <Typography variant="h4" className={classes.title}>
            Contact
          </Typography>
        </Box>

        {/* Form Card */}
        <Paper elevation={3} className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
              className={classes.formField}
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              className={classes.formField}
            />

            <TextField
              label="Message"
              name="message"
              multiline
              minRows={4}
              fullWidth
              required
              value={formData.message}
              onChange={handleChange}
              className={classes.formField}
            />

            {/* Better Positioned Button */}
            <Box className={classes.submitButtonContainer}>
              <Button
                type="submit"
                variant="contained"
                className={classes.submitButton}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Paper>

      </Container>
    </section>
  );
};

export default Contact;
