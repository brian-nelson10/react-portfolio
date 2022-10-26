import React from 'react';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Home from './components/Home';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

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
<br></br>
<br></br>
<br></br>
<Home></Home>
<br></br>
<br></br>
<Skills></Skills>
<br></br>
<br></br>
<Projects></Projects>
<br></br>
<br></br>
<ContactSection></ContactSection>
<br></br>
<br></br>
<Footer></Footer>
  </div>
  </div>
  </body>
  );
}

export default App;
