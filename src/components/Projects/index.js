import React from "react";
import hand from '../../assets/images/workhand.png';
import arrow from '../../assets/images/arrows-right.svg';
import CardList from "../Cards";

function Projects() {
    return(
        <><section id="projects" className="container">
            <div className="row align-items-start">
                <div className="col">
                    <img src={hand} alt="hand with pencil" className="hand" />
                </div>


                <div data-aos="fade-left" className="col aos-init aos-animate jus" data-aos-delay="1000" data-aos-duration="1000">
                    <h4 className="d-flex justify-content-end lead">
                        <ul>
                            <li>All of the coffee</li>
                            <li>i managed to turn</li>
                            <li>into software..</li>
                        </ul>
                    </h4>
                    <div className="d-flex justify-content-end">
                        <h1 className="d-flex justify-content-start"><ul>
                            <li style={{fontSize: '300%'}}>Projects</li>
                            <li style={{fontSize: '300%'}}>i have</li>
                            <li style={{fontSize: '300%', color: "salmon"}}>created.</li>
                        </ul></h1>
                    </div>

                    <div className="arrows" style={{transform: "rotate(90deg)"}}>
                        <img alt="arrows downward" src={arrow} />
                    </div>
                </div>
            </div>
        </section>
        <br></br>
        <br></br>
        <section className="container">
            <CardList ></CardList>
            </section></>


)
}

export default Projects;