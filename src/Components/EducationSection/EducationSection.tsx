import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/education.css';
import {staticData} from "../../data/staticData";


const EducationSection = () => {
    const {education_section} = staticData;
    return (
        <React.Fragment>
            {education_section?.data && education_section?.data?.length > 0 && (
                <div className="education-section">
                    <div className="container responsive-container">
                        <div className="section-title">
                            <h1>{education_section.section_title}</h1>
                            <p>{education_section.section_subtitle}</p>
                        </div>
                        <div className="row">
                            {education_section?.data?.map((item: any, index: number) => (
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" key={index}>
                                    <div className="education-card">
                                        <div className="education-card-logo">
                                            <i className={`fa fa-graduation-cap ${item?.color}`}></i>
                                        </div>
                                        <div className="education-card-details">
                                            <p className="years">{item?.year}</p>
                                            <h3 className="degree-title">{item?.degree_title}</h3>
                                            <p className="university">{item?.institution}</p>
                                            <p className="details">{item?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default EducationSection;
