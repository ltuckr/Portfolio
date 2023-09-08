import React, { useState } from "react";

// Define form handling logic here

const ContactForm = () => {
  // Define form state for input values and error messages
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle changes in form input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form when a field loses focus
  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (name === "name" && value.trim() === "") {
      setErrors({
        ...errors,
        [name]: "Name is required.",
      });
    } else if (name === "email" && !isValidEmail(value)) {
      setErrors({
        ...errors,
        [name]: "Invalid email address.",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Function to check for a valid email address
  const isValidEmail = (email) => {
    // Basic email validation (you can use a more robust validation library)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check for validation errors before submitting
    if (formData.name.trim() === "") {
      setErrors({
        ...errors,
        name: "Name is required.",
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrors({
        ...errors,
        email: "Invalid email address.",
      });
      return;
    }

    // Perform form submission logic here (e.g., send data to a server)
    try {
      // Your form submission code goes here
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <form className="py-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-bold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-bold">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn bg-accent border-2 border-white text-white font-bold px-6 py-3 hover:bg-transparent"
      >
        Submit
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-orange-300 pb-2">
          Contact Me
        </h2>
        <p>
           Leave a message or use one of the corresponding links below to reach out with any questions or collaborative ideas.
        </p>
         {/* ContactForm component here */}
         <ContactForm />
          </div>
    </section>
  );
};

export default Contact;
