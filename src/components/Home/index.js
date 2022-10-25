import React from "react";
import ResumeButton from '../../components/shared/resumeButton';
import triangle from '../../assets/images/triangle.svg';

function Home() {
    return (
        <><section >
            <div gap="10" className="triangle2"><img alt="3d triangle" src={triangle} />
            </div>
        </section><br></br><main className="container px-3 text-start">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="d-flex justify-content-center">
                            <hr className="border-violet" />
                            <h4 className="font-light gradient-text fs-6">Who are you?</h4>
                        </div>
                        <p style={{ fontFamily: 'Passion One', fontSize: '600%' }} className="d-flex justify-content-start"> Hi, I'm brian.</p>

                        <div className="d-flex justify-content-start">
                            <p className="d-flex justify-content-start lead intro">Web Developer who builds beautiful websites, inside and out.
                                <br></br>His perfect balance of technical and managerial skills stands him apart from the crowd.
                            </p>
                        </div>
                        <p className="lead">
                            <ResumeButton></ResumeButton>
                        </p>
                    </div>
            <div className="col">
                <div className="space">
                    <img className="rocketman" alt="rocket man" src={require("../../assets/images/space-dude.png")} />
                </div>
              </div>
             </div>
            </main></>
    )
}

export default Home;