import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import speakEmojiImg from "../assets/images/speakemoji.png";
import trueNewsImg from "../assets/images/truenews.png";
import todoImg from "../assets/images/todo.png";
import quickDocImg from "../assets/images/quickdoc.png";

const useStyles = makeStyles((theme: any) => ({
  section: {
    padding: "80px 16px",
    background: theme.palette.background.default,
  },

  title: {
    textAlign: "center",
    marginBottom: "48px",
    fontWeight: 700,
    color: theme.palette.text.primary,
  },

  card: {
    borderRadius: "16px",
    overflow: "hidden",
    background: theme.palette.background.paper,
    transition: "all 0.3s ease",
    cursor: "pointer",
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(142,173,210,0.25)"
        : "1px solid rgba(99,102,241,0.25)",

    "&:hover": {
      transform: "translateY(-8px)",
      borderColor:
        theme.palette.mode === "dark"
          ? "rgba(142,173,210,0.45)"
          : "rgba(99,102,241,0.6)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 14px 36px rgba(0,0,0,0.45)"
          : "0 14px 36px rgba(99,102,241,0.3)",
    },
  },

  media: {
    height: 180,
    backgroundColor: theme.palette.primary.main,
    objectFit: "cover",
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "12px",
  },

  modalImage: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "20px",
  },
}));

interface Project {
  title: string;
  short: string;
  description: string;
  image: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Speak Emoji",
    short: "A fun sentiment-based emoji response application...",
    description:
      "Speak Emoji is a fun sentiment-based emoji response app. It listens to your voice, detects your emotion using sentiment analysis, and instantly responds with expressive emojis. Includes animations, audio processing, React UI, and AI-based sentiment logic.",
    image: speakEmojiImg,
    tech: ["React", "JavaScript", "Sentiment AI", "CSS"],
  },
  {
    title: "TrueNews – Fake News Detection",
    short: "An advanced fake news detection system leveraging BERT...",
    description:
      "TrueNews uses the BERT model to detect fake news with high accuracy. It processes text, images through OCR, and even live news APIs. Features include transfer learning, advanced preprocessing, and visual explainability (LIME).",
    image: trueNewsImg,
    tech: ["Python", "BERT", "NLP", "OCR", "API"],
  },
  {
    title: "To-Do Manager",
    short: "A clean and fast task management application...",
    description:
      "A React + C# to-do management app with CRUD operations, category filters, productivity tracking, and a smooth UI. It stores tasks in LocalStorage and maintains sessions between visits.",
    image: todoImg,
    tech: ["C#", "React", "LocalStorage"],
  },
  {
    title: "QuickDoc – Doctor Scheduling Assistant",
    short: "A role-based appointment scheduling system...",
    description:
      "QuickDoc is a full scheduling app with role-based access for patients, doctors, and admins. Includes secure login, automated slot management, rescheduling, and analytics using C# backend with React frontend.",
    image: quickDocImg,
    tech: ["C#", "React", "TypeScript", "API"],
  },
];

const Projects: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section id="projects">
      <Container className={classes.section}>
        <Typography variant="h4" className={classes.title}>
          Projects
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            mt: 6,
          }}
        >
          {projects.map((project) => (
            <Card
              className={classes.card}
              elevation={3}
              key={project.title}
              onClick={() => handleOpen(project)}
            >
              <CardMedia
                className={classes.media}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>

                <Typography variant="body2" sx={{ mt: 1 }}>
                  {project.short}
                </Typography>

                <div className={classes.tags}>
                  {project.tech.map((t) => (
                    <Chip key={t} label={t} size="small" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"        
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            padding: "8px 0",
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                fontSize: "1.3rem",
                fontWeight: 700,
                pb: 1,
              }}
            >
              {selectedProject.title}
            </DialogTitle>

            <DialogContent
              dividers
              sx={{
                padding: "12px 20px",
              }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: "100%",
                  height: "200px",      
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "16px",
                }}
              />

              <Typography
                sx={{
                  fontSize: "0.95rem",
                  lineHeight: 1.55,
                  color: "text.secondary",
                }}
              >
                {selectedProject.description}
              </Typography>

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  gap: 0.8,
                  flexWrap: "wrap",
                }}
              >
                {selectedProject.tech.map((tech) => (
                  <Chip label={tech} size="small" />
                ))}
              </Box>
            </DialogContent>

            <DialogActions sx={{ padding: "8px 16px" }}>
              <Button
                onClick={() => setOpen(false)}
                sx={{ textTransform: "none", fontWeight: 600 }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

    </section>
  );
};

export default Projects;
