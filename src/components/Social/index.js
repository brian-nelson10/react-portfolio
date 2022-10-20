import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import github from '../../assets/images/skills/github.svg'




function Social() {
    return(
        <div className="container-fluid fixed-bottom">
        <div className="row ">
            <div className="col-sm-auto order-2" id="sticky-sidebar">
                <div className="sticky-top">
                    <div className="nav flex-column">
                        {/* <a class="nav-link py-1 px-0" href="www.instagram.com"><i class="bi bi-instagram" style={{color: 'white',}}></i></a>
                        <a class="nav-link py-1 px-0" href="www.linkedin.com"><i class="bi bi-linkedin" style={{color: 'white',}}></i></a>
                        <a class="nav-link py-1 px-0" href="www.facebook.com"><i class="bi bi-facebook" style={{color: 'white',}}></i></a> */}
                        <a className="nav-link py-1 px-0" href="www.github.com"><img alt='github' src={github}  style={{color: 'white',}}/></a>
                       
                    </div>
                </div>
            </div>
   </div>
   </div>


    );
}

export default Social;

