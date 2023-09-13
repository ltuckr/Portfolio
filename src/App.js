import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // Import other components as needed

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> {/* Add routes for other pages */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
