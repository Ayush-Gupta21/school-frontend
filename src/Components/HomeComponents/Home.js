import React from "react";
import Header from "../../CoreComponents/Header/Header";
import "./Home.css";
import Slideshow from "./ImageSlider/ImageSlider";
import LetsGetInspired from "./LetsGetInspired/LetsGetInspired";
import NoticeBoard from "./NoticeBoard/NoticesBoard";
import Principal from "./Principal/Principal";
import FooterImageSlider from "./FooterImageSlider/FooterImageSlider";
import Footer from "../../CoreComponents/Footer/Footer";

const Home = () => {
    return(
        <div>
            <Header />
            <Slideshow />
            <div className="quote-notice-container">
                <LetsGetInspired />
                <NoticeBoard />
            </div>
            <Principal />
            <FooterImageSlider />
            <Footer />
        </div>
    )
}

export default Home;