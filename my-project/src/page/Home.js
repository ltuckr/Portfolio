import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = ({ projects }) => {
  return (
    <>
      <Hero />
      <About />
      <Projects projects={projects} /> {/* Pass the projects prop here */}
      <Contact />
    </>
  );
};

export default Home;
