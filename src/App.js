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
      img: "../assets/Frostbite.png",
      desc: "An that allows users to plan a meal out by searching for weather and a listing of restaurants based on the input search location and the use of 2 separate APIs.",
      live: "https://ltuckr.github.io/frost-bite/",
      code: "https://github.com/ltuckr/frost-bite",
    },
    {
      title: "Flavor Impersonator",
      img: "../assets/FlavorImpersonator.png",
      desc: "Users can share and discover their favorite restaurant copycat recipes by leveraging the power of Node.js, Express.js, Handlebars.js, MySQL,Sequelize, Bootstrap and Animate.css.",
      live: "https://flavor-impersonator-2e87d3d63575.herokuapp.com/",
      code: "https://github.com/ltuckr/flavor-impersonator",
    },
    {
      title: "Project 3",
      img: "../assets/TBD.jpg",
      desc: "TBA",
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
