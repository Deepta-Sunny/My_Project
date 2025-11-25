import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  LinearProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import csharpIcon from "../assets/images/csharp.png";
import pythonIcon from "../assets/images/python.png";
import reactIcon from "../assets/images/react.png";
import azureIcon from "../assets/images/azure.png";
import sqlIcon from "../assets/images/sql.png";
import cicdIcon from "../assets/images/cicd.png";
import aiIcon from "../assets/images/ai.png";
const useStyles = makeStyles((theme: any) => ({
  section: {
    padding: "80px 16px",
    background: theme.palette.background.default,
  },

  title: {
    textAlign: "center",
    marginBottom: "56px",
    fontWeight: 700,
    color: theme.palette.text.primary,
  },

  paper: {
    padding: "32px",
    borderRadius: "12px",
    background: theme.palette.background.paper,
    transition: "all 0.25s ease",
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(142,173,210,0.25)"
        : "1px solid rgba(99,102,241,0.25)",

    "&:hover": {
      transform: "translateY(-6px)",
      borderColor:
        theme.palette.mode === "dark"
          ? "rgba(142,173,210,0.45)"
          : "rgba(99,102,241,0.6)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 12px 32px rgba(0,0,0,0.45)"
          : "0 12px 32px rgba(99,102,241,0.3)",
    },
  },

  skillRow: {
    marginBottom: "24px",
  },
}));

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const skills: Skill[] = [
  { name: "C#", level: 85, icon: csharpIcon },
  { name: "Python", level: 90, icon: pythonIcon },
  { name: "React (JS/TS)", level: 70, icon: reactIcon },
  { name: "Azure Cloud", level: 75, icon: azureIcon },
  { name: "SQL", level: 90, icon: sqlIcon },
  { name: "CI/CD", level: 60, icon: cicdIcon },
  { name: "Generative AI", level: 45, icon: aiIcon },
];

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <section id="skills">
      <Container className={classes.section}>
        <Typography variant="h4" className={classes.title}>
          Skills
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 3,
          }}
        >
          {skills.map((skill) => (
            <Paper elevation={2} className={classes.paper} key={skill.name}>
              <div className={classes.skillRow}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    marginBottom: 1.4,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{
                      width: 42,
                      height: 42,
                      objectFit: "contain",
                    }}
                  />
                  <Typography variant="subtitle1">{skill.name}</Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </div>
            </Paper>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Skills;