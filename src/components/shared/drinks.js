import React, { Component } from 'react';


const textArray = ["Carrots.", "Water.", "Kombucha.", "Tea.", "Lemonade.", "Topo Chico.", "Coffee.", "Juice.", "Water.", "Green Tea.", "Coffee?"];

class Drink extends Component {
    constructor() {
        super();
        this.state = {textIdx: 0};
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;
            this.setState({ textIdx: currentIdx + 1});
        }, 1500);
    }
    
    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let drinkText = textArray[this.state.textIdx % textArray.length];

        return (
            <li style={{fontSize: '250%'}}><span>{drinkText}</span></li>
        )
    }

}

export default Drink;


