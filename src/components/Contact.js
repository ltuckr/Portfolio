import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-orange-300 pb-2">
          Contact Me
        </h2>
        <p>
          I'm actively seeking a position.
           Please feel free to reach out to me with any questions, or collaborative ideas.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> ltuckr.webdev@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Github:</span> https://github.com/ltuckr
        </p>
        <p className="py-2">
            <span className="font-bold">LinkedIn:</span> www.linkedin.com/in/ltuckr
        </p>
      </div>
    </section>
  );
};

export default Contact;
