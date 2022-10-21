import React from "react";
import Tilt from 'react-vanilla-tilt'

const CardList = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col wrapper" data-tilt data-tilt-glare data-tilt-max-glare="1" data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500">
          <div className="card aos-init aos-animate" data-aos="flip-left" data-aos-duration="1000">
            <a href="https://kristafrancis.github.io/now-were-cookin/">
            <img src={require("../../assets/images/cards/0.png")} class="card-img-top" alt="..."/>
                </a>
            <div className="card-body">
              <h5 className="card-title">Now We're Cookin'</h5>
              <p className="card-text">A website that gives you recipe ideas for an ingredient you have or type of cuisine you'd like to make.  It also has a map to help you get to your closest grocery store, if you need more ingredients.</p>
              <Tilt className="d-none"></Tilt>
            </div>
          </div>
        </div>    
        </div>

        
    );
};

export default CardList;