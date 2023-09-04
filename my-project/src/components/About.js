import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
        
            Hey there! I'm Lauren. I'm a Fullstack Developer with a passion for Frontend. 
            I'm currently looking for full-time employment in web dev, and want the opportunity to flex my creative muscles. 
            Making things look good is my happy place. I have a certificate from the University of North Carolina at Charlotte in Fullstack Development, 
            and a Bachelor of Fine Arts in commercial photography from The Art Institute of Charlotte. 

          </p>
          <p className="pb-5">
            I am quite content in Frontend with skills like React.js, 
            Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p>In backend I've learned Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time I'm a gamer, a photographer, and proud cat/dog mom. 
            I love the great outdoors, and I'm always up for an adventure.
          </p>

        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
