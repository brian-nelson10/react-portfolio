import React from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav() {
    return(
        <header class="mb-auto">
        <div>
          <h3 class="float-start position-absolute top-0 start-0 mb-0">
            <img class="favicon" alt="favicon" src={require("../../assets/images/apple-touch-icon.png")}/>
          </h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#home">Home</a>
            <a class="nav-link fw-bold py-1 px-0" href="https://github.com/brian-nelson10">Explore</a>
            <a class="nav-link fw-bold py-1 px-0" href="#projects">Projects</a>
            <a class="nav-link fw-bold py-1 px-0" href="#contact">Contact</a>
          </nav>
        </div>
    
      </header>
    );
}

export default Nav;