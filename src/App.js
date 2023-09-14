import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";

import Projects from "./components/Projects"; 

import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects />} />
</Routes>

      <Footer />
    </>
  );
}

export default App;

