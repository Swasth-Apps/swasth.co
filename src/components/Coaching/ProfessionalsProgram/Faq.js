import React, {useState} from "react"
import {Input} from "antd";

const FAQs = (props) => {
  const [openFaq, setOpenFAQ] = useState(false);
  return(
    <div className="max-width-class">
      <div className="faq-section">
        <div>
          <Input.Search
            className="faq-search"
            placeholder="Search FAQs"
          />
        </div>
        <div className="faq-search-content">
          <div className="faq-content">
            <h2 className="base-text">Course Information</h2>
            <ul>
              <li onClick={() => setOpenFAQ(true)} className="para-text">How much time should I be spending on the course?</li>
              <li className="para-text">How are the courses structured?</li>
              <li className="para-text">What will I have access to during a course?</li>
            </ul>
          </div>
          <div className="faq-content">
            <h2 className="base-text">Discounts</h2>
            <ul>
              <li className="para-text">Do you offer discounts?</li>
              <li className="para-text">Group Rates</li>
              <li className="para-text">When can I use a discount coupon code?</li>
              <li className="para-text">Can I repeat a course?</li>
            </ul>
          </div>
          <div className="faq-content">
            <h2 className="base-text">Enrollment & Payment Information</h2>
            <ul>
              <li className="para-text">What payment methods do you accept?</li>
              <li className="para-text">Is it safe to pay online?</li>
              <li className="para-text">What’s your refund and cancellation policy?</li>
              <li className="para-text">Why was I charged a foreign transaction fee?</li>
              <li className="para-text">Can I enroll if course has already started?</li>
            </ul>
          </div>
          <div className="faq-content">
            <h2 className="base-text">Certificates and Certification</h2>
            <ul>
              <li className="para-text">What certificate will I receive?</li>
              <li className="para-text">When will I receive my CE Certificate?</li>
              <li className="para-text">CE/CME Credit Certification and Requirements</li>
              <li className="para-text">Is there certification required for ACT?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FAQs;
