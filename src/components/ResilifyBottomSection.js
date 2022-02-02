import React from "react";
import ResilifyBottomBg from "../assets/images/resilify/resilify-bottom-bg.png"
const ResilifyBottomSection = props =>{

    return(
        <div className="resilify-bottom-section">
            <div>
                <img src={ResilifyBottomBg}/>
                <div className="content">
                    <h3 className="heavy-text">
                       Ready to learn more about Resilify
                    </h3>
                    <p className="subtext book-text">
                        Empowering people to personalised care with measurable and superior results.
                    </p>
                    <div className="buttons">
                        <button className='request-demo-btn'
                                onClick={() => window.open("https://calendly.com/resiliens-inc/informational-session", "_blank")}>
                            Schedule a demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResilifyBottomSection;
