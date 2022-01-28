import React from "react";

const ResilifyBottomSection = props =>{

    return(
        <div className="resilify-bottom-section">
            <div>
                <img src="https://static.wixstatic.com/media/52f234_7e1dae731fbe442cb19b9d851e8af561~mv2.png/v1/fill/w_959,h_338,al_c,q_85,usm_0.66_1.00_0.01/science-cta.webp"/>
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