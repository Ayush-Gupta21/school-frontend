import React from "react";
import "./LetsGetInspired.css";
import leftQuotation from "../../../images/Left-quotation.svg";
import rightQuotation from "../../../images/Right-quotation.svg";
import Slideshow from "./QuoteSlider/QuoteSlider";

const LetsGetInspired = () => {
    return(
        <div className="lets-get-inspired-container">
            <img src={leftQuotation}></img>
            <img src={rightQuotation}></img>
            <div className="heading"><h2>Let's Get Inspired</h2></div>
            <div>
                <Slideshow />
            </div>
            
        </div>
    )
} 

export default LetsGetInspired;