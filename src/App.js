import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Projects from "./components/Projects"; 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //downgrage to react router v5

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;