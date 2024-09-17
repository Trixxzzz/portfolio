import React from "react";
import { Routes, Route ,useLocation} from "react-router-dom";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles"
import About from "./Containers/About/About";
import Home from "./Containers/Home/Home";
import Resume from "./Containers/Resume/Resume";
import Skills from "./Containers/Skills/Skills";
import Portfolio from "./Containers/Portfolio/Portfolio";
import Contact from "./Containers/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import particles from "./utils/particles";
import "./App.scss"

const App = () => {
const location=useLocation()

  const handleInit=async(main)=>{
  await loadFull(main);
  }

  const renderParticleJsInHomePage=location.pathname==='/'
  return (
    <div className="App">
      {/* {particle JS} */}
      {
        renderParticleJsInHomePage && <Particles id="particles" options={particles } init={handleInit}/>

      }

      {/* {navbar} */}
      <NavBar/>

      {/* {main page content} */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/resume" element={<Resume />} />
        <Route index path="/skills" element={<Skills />} />
        <Route index path="/portfolio" element={<Portfolio />} />
        {/* <Route index path="/contact" element={<Contact />} /> */}
      </Routes>
      </div>
      
    </div>
  );
};

export default App;
