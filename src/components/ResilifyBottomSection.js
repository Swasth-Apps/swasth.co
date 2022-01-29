import React from "react";
import ResilifyBottomBg from "../assets/images/resilify/resilify-bottom-bg.png"
const ResilifyBottomSection = props =>{

    return(
        <div className="resilify-bottom-section">
            <div>
                <img src={ResilifyBottomBg}/>
                <div className="content">
                    <h3 className="heavy-text">
                        Driven by patients, developed by clinicians
                    </h3>
                    <p className="subtext book-text">
                        Empowering people to personalised care with measurable and superior results.
                    </p>
                    <div className="buttons">
                        <button className='request-demo-btn'>
                            Start my journey
                        </button>
                        <button className='request-demo-btn'>
                            Schedule a demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResilifyBottomSection;
