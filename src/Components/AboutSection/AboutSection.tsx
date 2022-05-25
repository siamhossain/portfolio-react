import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/about-section.css';
import download from "../../Static/icons/ic_download.png";
import {staticData} from "../../data/staticData";

const AboutSection = () => {
    const {about_section} = staticData;
    return (
        <div>
            <div className="about-section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 about-img-container">
                            <div className="about-img"></div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                            <div className="about-text-content">
                                <h1>{about_section.section_title}</h1>
                                <p>{about_section.description}</p>
                                <p></p>
                            </div>

                            <div className="counters">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-md-4">
                                        <div className="clients">
                                            <h1 className="counter" data-count="350">{about_section.client}</h1>
                                            <p>GLOBAL<br/> WORKING CLIENT</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-md-4">
                                        <div className="clients">
                                            <h1 className="counter" data-count="10">{about_section.experience}</h1>
                                            <p>Year<br/> or Experience</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-md-4">
                                        <div className="clients">
                                            <h1 className="counter" data-count="35">{about_section.awards}</h1>
                                            <p>Awards<br/> Winning</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="download-btn">
                                <button><img src={download} alt="" /> Download CV</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
