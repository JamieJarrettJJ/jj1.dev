import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, NavLink, useLocation, Link } from "react-router-dom";
import logo from "./images/logo.svg";
import data from "./data/projects.json";

function App() {
  const location = useLocation();

  return (
    <div
      className="container-fluid"
      style={{ height: "100vh", backgroundColor: "#34495e" }}
    >
      <div className="row">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ width: "100vw", zIndex: 1000, backgroundColor: "#2c3e50" }}
        >
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Projects" className="nav-link text-white">
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
        <main
          className="col-12 py-5"
          style={{
            overflowX: "hidden",
            position: "absolute",
            height: "100vh",
          }}
        >
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/projects" component={Projects} />
              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const pageStyle = {
  position: "absolute",
  width: "100%",
  marginTop: "5rem",
};

function Projects() {
  const listItems = data.map((res) => {
    return (
      <div className="col-md-6 col-lg-4">
        <div class="card" style={{ width: "18rem" }} key={res.id}>
          <img class="card-img-top" src={res.img} alt={res.description} />
          <div class="card-body">
            <h5 class="card-title">{res.name}</h5>
            <p class="card-text">{res.description}</p>
            <a href={res.url} class="btn btn-primary">
              Demo
            </a>
            &nbsp;
            <a href={res.source_code} class="btn btn-primary">
              Source Code
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 center-block text-center">
            <h1 className="text-light" style={{ textAlign: "center" }}>
              My Projects
            </h1>
          </div>
        </div>
        <div className="row" style={{ marginTop: "1.5rem" }}>
          {listItems}
        </div>
      </div>
    </motion.div>
  );
}
function Home() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <h1 className="text-light">
              <span role="img" aria-label="sheep">
                👋
              </span>
              &nbsp;Hey, I'm Jamie
            </h1>
            <p className="text-light">
              I'm a Full-Stack Developer from Horsham, England
            </p>
            <br />
            <h4 className="text-light">Quick Links:</h4>
            <NavLink to="/Projects">
              <button type="button" className="btn btn-outline-primary">
                Projects
              </button>
            </NavLink>
            &nbsp;
            <Link
              to="/pdf/Resume-Jamie-Jarrett.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-outline-primary">
                Resume
              </button>
            </Link>
            &nbsp;
            <Link
              to="https://github.com/JamieJarrettJJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-outline-primary">
                Github
              </button>
            </Link>
            &nbsp;
            <button type="button" className="btn btn-outline-primary">
              Email
            </button>
          </div>
          <div className="col-md-6 col-xs-12 my-3">
            <img className="logo" src={logo} alt="JJ Logo" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
