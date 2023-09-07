import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  // Create an array of project data
  const projects = [
    {
      title: "Frostbite",
      img: "Frostbite.png",
      desc: "Description of Project 1",
      live: "https://example.com/project1",
      code: "https://github.com/user/project1",
    },
    {
      title: "Flavor Impersonator",
      img: "flavorImpersonator.png",
      desc: "Description of Project 2",
      live: "https://example.com/project2",
      code: "https://github.com/user/project2",
    },
    {
      title: "Project 3",
      img: "TBD.jpg",
      desc: "Description of Project 3",
      live: "https://example.com/project3",
      code: "https://github.com/user/project3",
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home projects={projects} />} 
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
