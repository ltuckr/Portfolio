import React from "react";
import Frostbite from "../assets/Frostbite.png"; 
import FlavorImpersonator from "../assets/FlavorImpersonator.png"; 
import Focusfolio from "../assets/Focusfolio.png";
import TBD from "../assets/TBD.jpg"; 

const Projects = () => {
const projects = [
  {
    title: "Frostbite",
    img: Frostbite,
    desc: "An app that allows users to plan an outing based on the input search location and the use of 2 separate API's: one for weather, one for area restaurants.",
    live: "https://ltuckr.github.io/frost-bite/",
    code: "https://github.com/ltuckr/frost-bite",
  },
  {
    title: "Flavor Impersonator",
    img: FlavorImpersonator,
    desc: "Part blog, part social app. Share and discover recipes. Uses Node.js, Express.js, Handlebars.js, MySQL, Sequelize, Bootstrap and Animate.css.",
    live: "https://flavor-impersonator-2e87d3d63575.herokuapp.com/",
    code: "https://github.com/ltuckr/flavor-impersonator",
  },
  {
    title: "Project 3",
    img: Focusfolio, 
    desc: "A full-stack app that allows an artist to create a portfolio. Uses React, Node.js, Express.js, MongoDB, Mongoose, Bootstrap and Animate.css.",
    live: "https://afternoon-waters-41270-ff57a8e3fb9c.herokuapp.com/",
    code: "https://github.com/ltuckr/focusfolio",
  },
  {
    title: "Project 3",
    img: TBD, 
    desc: "not yet completed",
    live: "https://example.com/project3",
    code: "https://github.com/user/project3",
  },
  {
    title: "Project 3",
    img: TBD, 
    desc: "not yet completed",
    live: "https://example.com/project3",
    code: "https://github.com/user/project3",
  },
  {
    title: "Project 3",
    img: TBD, 
    desc: "not yet completed",
    live: "https://example.com/project3",
    code: "https://github.com/user/project3",
  },
];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-orange-400 pb-2">
            Portfolio
          </h2>

          <p className="pb-5">
            Here are some projects I've had the pleasure of working on. Check back often for updates!
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {

          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />

              <div className="flex absolute left-0 right-0 top-0] bottom-0 mx-auto w-[100%] h-[100%]  bg-secondary  opacity-0 duration-500 justify-center flex-col hover:opacity-95 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-cyan-700 hover:bg-cyan-300 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-orange-400 hover:bg-orange-600 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;