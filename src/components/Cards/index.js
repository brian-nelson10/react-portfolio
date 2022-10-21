import React from "react";
import CardOne from './cardOne';
import CardTwo from './cardTwo';


const CardList = () => {
    return (
        <><div className="row row-cols-1 row-cols-md-2 g-4">
            <CardOne></CardOne>
            <CardTwo></CardTwo>
        </div></>
    );
};

export default CardList;