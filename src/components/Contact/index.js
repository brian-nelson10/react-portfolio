import React from "react";
import ContactButton from "../shared/buttons";

const ContactSection = () => {
    return (

        <section id="contact">
    <div className="container-fluid">
    <div className="row align-items-start">
        <div className="col aos-init aos-animate" data-aos="zoom-out-right" data-aos-duration="2000">
            <div className="d-flex justify-content-start lead"><ul>
                <li>Currently seeking those who can provide</li>
                <li>eyeball time, brain juice, lines of code,</li>
                <li>code improvements, raising an issue, asking a question,</li>
                <li>run the communication outside of the code repo,</li>
                <li>or even stump up some coin.</li>
            </ul> </div>
            <div className="container d-flex">
                <h1 className="justify-content-start">
                    <ul>
                        <li style={{fontSize: '250%'}}>Lets talk,</li>
                        <li style={{fontSize: '250%', color: 'salmon'}}>Collaborate,</li>
                        <li style={{fontSize: '250%'}}>and grab some </li>
                        <li style={{fontSize: '250%'}} id="drinkText">Coffee.</li>
                        <li><ContactButton></ContactButton></li>
                    </ul>
                </h1>
                        <div className="col justify-content-end aos-init aos-animate " data-aos="fade-up" data-aos-duration="1000">
                            
                                            <div className="">
                                            <img src={require("../../assets/images/collab.png")} alt="collab" className="collab"/></div>
                                            
                                </div>
            </div>  
</div>
</div>
</div>
</section>
    )
}


export default ContactSection;