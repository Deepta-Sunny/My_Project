import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  // CardActions,
  // Button,
  Chip,
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

    border: theme.palette.mode === "dark"
      ? "1px solid rgba(142,173,210,0.25)"
      : "1px solid rgba(99,102,241,0.25)",

    "&:hover": {
      transform: "translateY(-8px)",
      borderColor: theme.palette.mode === "dark"
        ? "rgba(142,173,210,0.45)"
        : "rgba(99,102,241,0.6)",
      boxShadow: theme.palette.mode === "dark"
        ? "0 14px 36px rgba(0,0,0,0.45)"
        : "0 14px 36px rgba(99,102,241,0.3)",
    },
  },

  media: {
    height: 180,
    backgroundColor: theme.palette.primary.main,
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "12px",
  },
}));


interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  code?: string;
}

const projects: Project[] = [
  {
    title: "Speak Emoji",
    description: "A fun sentiment-based emoji response application...",
    image: speakEmojiImg,
    tech: ["HTML", "CSS", "JavaScript", "Sentiment Analysis", "React"],
  },
  {
    title: "TrueNews – Fake News Detection",
    description: "An advanced fake news detection system leveraging BERT...",
    image: trueNewsImg,
    tech: ["Python", "BERT", "Transfer Learning", "OCR", "API"],
  },
  {
    title: "To-Do Manager",
    description: "A simple yet efficient task management application...",
    image: todoImg,
    tech: ["C#", "React", "CRUD", "LocalStorage"],
  },
  {
    title: "QuickDoc – Doctor Scheduling Assistant",
    description: "A role-based appointment scheduling system...",
    image: quickDocImg,
    tech: ["C#", "React", "TypeScript", "Role-Based Access", "API"],
  },
];


const Projects: React.FC = () => {
  const classes = useStyles();

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
            <Card className={classes.card} elevation={3} key={project.title}>
              <CardMedia
                className={classes.media}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">
                  {project.description}
                </Typography>
                <div className={classes.tags}>
                  {project.tech.map((t) => (
                    <Chip key={t} label={t} size="small" />
                  ))}
                </div>
              </CardContent>
              {/* <CardActions className={classes.actions}>
                {project.demo && (
                  <Button
                    size="small"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </Button>
                )}
                {project.code && (
                  <Button
                    size="small"
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </Button>
                )}
              </CardActions> */}
            </Card>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
