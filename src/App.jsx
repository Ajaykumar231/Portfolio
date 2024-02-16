import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from 'aos';
import "aos/dist/aos.css"
function App() {
  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: 'ease-in-out',
        mirror: false,
        offset: 100,
        delay:100,
      }
    );
    AOS.refresh();
  },[])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;