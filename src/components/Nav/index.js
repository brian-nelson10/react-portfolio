import React from 'react';
// import Explode from '../shared/fun';
import Moon from '../../assets/images/apple-touch-icon.png'


function Nav() {
    return(
        <header className="mb-auto">
        <div>
          <h3  className="float-start position-absolute top-0 start-0 mb-0">
            <img className="favicon js-explode" alt="favicon" src={Moon} />
          </h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#home">Home</a>
            <a className="nav-link fw-bold py-1 px-0" href="https://github.com/brian-nelson10">Explore</a>
            <a className="nav-link fw-bold py-1 px-0" href="#projects">Projects</a>
            <a className="nav-link fw-bold py-1 px-0" href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    );
}

export default Nav;