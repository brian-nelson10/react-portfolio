import React, { useState } from 'react';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Social from './components/Social';
import Projects from './components/Projects';
import VanillaTilt from 'vanilla-tilt';
//import Home from './components/Home';
//import ContactForm from './components/Contact';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import triangle from '../src/assets/images/triangle.svg';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <body className="d-flex h-100 text-center text-bg-dark">
    <div className="container">
<div className="cover-container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">
    <Nav></Nav>
    <br/>
    <section class="">
  <div className="triangle2"><img alt="3d triangle" src={triangle}/>
  </div>
  </section>
  <main className="container px-3 text-start">
    
    
    <div className="row align-items-start">
        
    <div className="col">
    <div className="d-flex justify-content-center">
        <hr className="border-violet"/>
        <h4 className="font-light gradient-text fs-6">Who are you?</h4>
    </div>
    <h1 className="d-flex justify-content-start"> Hi, I'm brian.</h1>
    
    <div className="d-flex justify-content-start">
    <p className="d-flex justify-content-start lead intro">Web Developer who builds beautiful websites, inside and out.
        His perfect balance of technical and managerial skills stands him apart from the crowd.
    </p>
    </div>
    <p className="lead">
      <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white learn">Learn more</a>
      <a href="#" className="btn btn-lg btn-secondary fw-bold border-white text-white bg-dark js-explode">Download Resume</a>
    </p>
</div>
<div className="col">
    <div className="space">
        <img className="rocketman" src={require("../src/assets/images/space-dude.png")}/>
    </div>
</div>

</div>
<Social></Social>
</main>
<br></br>
<Skills></Skills>
<br></br>
<Projects></Projects>

  </div>
  </div>
  
  </body>

  );
}

export default App;
