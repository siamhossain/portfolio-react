import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/hero-section.css';
import scrollDown from "../../Static/icons/ic_scroll_down.png";
import {staticData} from "../../data/staticData";

const HeroSection = () => {
    const {short_introduction} = staticData;
    return (
        <div>
            <div className="hero-section">
                <div className="container responsive-container">
                    <div className="row flex-row-reverse">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6">
                            <div className="bg-container">
                                <div className="hero-section-image-container">

                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5">
                            <div className="content-container">
                                <div className="content">
                                    <h6 className="person-name">{short_introduction.name}</h6>
                                    <h1 className="title-text">I’m a <span>{short_introduction.title}</span></h1>
                                    <p className="subtitle-text">{short_introduction.sub_title}</p>
                                    <div className="scroll-down-wrapper">
                                        <a href="#about">
                                            <div className="scroll-icon">
                                                <img src={scrollDown} alt=""/>
                                            </div>
                                            <div className="scroll-text">
                                                <h6>Scroll Down</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xs-12 col-sm-12 col-md-1 col-xl-1 d-flex justify-content-center align-items-center">
                            <div className="social-container">
                                <div className="social-link">
                                    <ul>
                                        <li><a href=""><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <div className="button">
                                    <button>Follow Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
