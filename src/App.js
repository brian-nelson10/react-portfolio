import React, { useState } from 'react';
import Nav from './components/Nav';
//import Home from './components/Home';
//import ContactForm from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <body class="d-flex h-100 text-center text-bg-dark">
    <div class="container">
<div class="cover-container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">
    <Nav></Nav>
  </div>
  </div>
  </body>






    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
