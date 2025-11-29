import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: (theme) => theme.palette.background.default,
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "90px",
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>

      <Footer />

      {/*REQUIRED for toast to render */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        pauseOnHover
        closeOnClick
        draggable
      />
    </Box>
  );
};

export default App;
