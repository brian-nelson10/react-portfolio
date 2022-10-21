import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fahtml5 } from "@fortawesome/free-solid-svg-icons";
import html5 from '../../assets/images/skills/html5.svg';
import css3 from '../../assets/images/skills/css3.svg';
import js from '../../assets/images/skills/js.svg';
import react from '../../assets/images/skills/react.svg';
import node from '../../assets/images/skills/node-js.svg';
import git from '../../assets/images/skills/github.svg';
import express from '../../assets/images/skills/e-solid.svg';
import mongo from '../../assets/images/skills/leaf-solid.svg';




function Skills() {
    return(
        <section className="container">
        <div className="row align-items-start">
            <div className="col aos-init aos-animate" data-aos="zoom-out-right" data-aos-duration="2000">
                <div className="d-flex justify-content-start lead"><ul>
                    <li>Lets create robust,</li>
                    <li>beautiful, and smart</li>
                    <li>web or mobile applications.</li>
                </ul> </div>
                <div class="d-flex justify-content-start">
                    
                        <ul>
                            <h1 style={{fontSize: '420%'}}><li>Imagine.</li></h1>
                            <h1 style={{color: 'salmon', fontSize: '420%'}}><li>Code.</li></h1>
                            <h1 style={{fontSize: '420%'}}><li>Develop.</li></h1>
                        </ul>
    
                </div>
            </div>
            <div className="col circle">
                <div className="row skills">
                    <div className="row">
                    <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate"
                    data-aos-duration="1000" style={{display: 'inline', margin: 'auto'}}>
                        {/* <i class="fab fa-html5 skill__square" aria-hidden="true"></i> */}
                        <img className="fab" alt="html5 logo" aria-hidden="true" src={html5}/>
                        <h6 className="mt-1 icon">HTML5</h6>
                    </div>
                 <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate" 
                data-aos-duration="1000" style={{display: 'inline', margin: 'auto',}}>
                    <img className="fab" alt="css3 logo" src={css3}/>
                    <h6 className="mt-1 icon">CSS3</h6>
                </div>
                </div>
                <div className="row skills">
                <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate" 
                data-aos-duration="1000" style={{display: 'inline', margin: 'auto',}}>
                    <img className="fab" alt="Javascript logo" src={js}/>
                    <h6 className="mt-1 icon">Javascript</h6>
                </div>
                <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate" 
                data-aos-duration="1000" style={{display: 'inline', margin: 'auto',}}>
                    <img className="fab" alt="react logo" src={react}/>
                    <h6 className="mt-1 icon">React</h6>
                </div>
            </div>
            <div className="row skills">
                <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate" 
                data-aos-duration="1000" style={{display: 'inline', margin: 'auto',}}>
                    <img className="fab" alt="nodejs logo" src={node}/>
                    <h6 className="mt-1 icon">Node</h6>
                </div>
                <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate" 
                data-aos-duration="1000" style={{display: 'inline', margin: 'auto',}}>
                    <img className="fab" alt="github logo" src={git}/>
                    <h6 class="mt-1 icon">Github</h6>
                </div>
            </div>
            <div className="row skills">
                <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate" 
                data-aos-duration="1000" style={{display: 'inline', margin: 'auto',}}>
                    <img className="fab" alt="express logo" src={express}/>
                    <h6 className="mt-1 icon">Express</h6>
                </div>
                <div data-aos="fade-up" className="col-3 col-sm-2 my-3 aos-init aos-animate" 
                data-aos-duration="1000" style={{display: 'inline', margin: 'auto',}}>
                    <img className="fab" alt="mysql logo" src={mongo}/>
                    <h6 className="mt-1 icon">MongoDB</h6>
                 </div>
                </div> 
            </div>      
        </div>
        </div>
    </section>
    );
}

export default Skills;