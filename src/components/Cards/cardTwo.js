import React from "react";
import Tilt from 'react-vanilla-tilt';

const CardTwo = () => {
    return(
        <div className="col wrapper" data-tilt data-tilt-glare data-tilt-max-glare="1" data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500">
                <div className="card aos-init aos-animate" data-aos="flip-right" data-aos-duration="1000">
                    <a href="">
                        <img src={require("../../assets/images/cards/1.png")} class="card-img-top" alt="..."/>
                        </a>
                    <div className="card-body">
                        <h5 className="card-title">Don't Go Broke</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <Tilt className="d-none"></Tilt>
                    </div>
                </div>
            </div>
    )
}

export default CardTwo;