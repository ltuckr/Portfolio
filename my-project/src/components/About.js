import React from "react";
import AboutImg from "../assets/About.jpg"; 

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hey, I'm Lauren. I'm a Fullstack Developer with a passion for visual beauty. 
            I'm currently looking for full-time employment in web dev, and would love the opportunity to flex my creative muscles. 
            Making things look good is my happy place. I have a certificate from the University of North Carolina at Charlotte in Fullstack Development, 
            and a Bachelor of Fine Arts in commercial photography from The Art Institute of Charlotte. 
          </p>
          <p className="pb-5">
            I am quite content in Frontend with knowledge in React.js, 
            Tailwind CSS and others.
            In backend I've learned Node.js, Express.js, MongoDB, and Mongoose.
          </p>
          <p>
            When I'm not coding, I'm taking pictures, getting my pew-pew on, hiking in search of a waterfall or snuggling one of my furkids. 
            I'm always up for an adventure.
          </p>
        </div>

        <div className="About"> 
        
          <img
            src={AboutImg} 
            
            alt="female coder and her cat illustration"
            className="lg:w-[70%] md:ml-auto pl-4"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
