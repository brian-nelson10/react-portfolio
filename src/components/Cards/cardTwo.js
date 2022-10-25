import React from "react";
import Tilt from 'react-vanilla-tilt';

const CardTwo = () => {
    return(
        <div className="col wrapper" data-tilt data-tilt-glare data-tilt-max-glare="1" data-tilt-max="100" data-tilt-speed="400" data-tilt-perspective="500">
                <div className="card aos-init aos-animate" data-aos="flip-right" data-aos-delay="500" data-aos-duration="1000">
                    <a href="https://dontgobroke.herokuapp.com/">
                        <img src={require("../../assets/images/cards/1.png")} className="card-img-top" alt="..."/>
                        </a>
                    <div className="card-body">
                        <h5 className="card-title">Don't Go Broke</h5>
                        <p className="card-text">A Full Stack Application to help you budget your finances. Uses MVC paradigm with a MySQL database. </p>
                        <Tilt className="d-none"></Tilt>
                    </div>
                </div>
            </div>
    )
}

export default CardTwo;