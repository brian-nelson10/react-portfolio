import React from "react";
import hand from '../../assets/images/workhand.png';
import arrow from '../../assets/images/arrows-right.svg';

function Projects() {
    return(
        <><section className="container">
            <div className="row align-items-start">
                <div className="col">
                    <img src={hand} alt="hand with pencil" class="hand" />
                </div>


                <div data-aos="fade-left" class="col aos-init aos-animate jus" data-aos-duration="1000">
                    <h4 className="d-flex justify-content-end lead">
                        <ul>
                            <li>Some awesome</li>
                            <li>products for the</li>
                            <li>awesome people</li>
                        </ul>
                    </h4>
                    <div className="d-flex justify-content-end">
                        <h1 className="d-flex justify-content-start"><ul>
                            <li style={{fontSize: '300%'}}>Projects</li>
                            <li style={{fontSize: '300%'}}>he has</li>
                            <li style={{fontSize: '300%', color: "salmon"}}>created.</li>
                        </ul></h1>
                    </div>

                    <div className="arrows" style={{transform: "rotate(90deg)"}}>
                        <img alt="arrows downward" src={arrow} />
                    </div>
                </div>
            </div>
        </section><section className="container">

           
            </section></>


    )
}

export default Projects;