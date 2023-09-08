import React from "react";
import HeroImg from '../assets/hero.jpg';


const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hey there, <br /> I'm <span className="text-accent"> Lauren Tucker </span> <br />
            Fullstack Developer
          </h1>

          <p className="py-5">
            I work with MERN stack, Frontend is my first love and I really enjoy learning new things.
          </p>

          <a
            href="/#projects"
            className=" btn bg-accent border-2 border-white text-white font-bold px-6 py-3 hover:bg-transparent"
          >
            Portfolio
          </a>
        </div>

        <div className="hero-img">
  <img
    src={HeroImg}
    alt="female coder illustration"
    style={{ width: '80%' }} // Adjust the width as needed
    className="ml-auto"
  />
</div>
      </div>
    </section>
  );
};

export default Hero;
