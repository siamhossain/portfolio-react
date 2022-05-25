import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/experience.css';
import {staticData} from "../../data/staticData";
import { StaticData } from '../../data/staticData.d';
import { type } from 'os';

interface ExperienceCardProps {
    data: StaticData['experience_section']['data'][0],
}

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
    const data = props.data;

    if(!data) {
        return <></>;
    }

    return (
        <>
            <div>
                <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-6 ${data.type === "right" ? "offset-lg-6" : ""}`}>
                    <div className="experience-card">
                        <div className="pointer dribble">
                            <div className="circle circle-color-dribble"><h6
                                className="dribble-year">{data.year}</h6></div>
                        </div>
                        <div className="experience-card-icon">
                            <i className="fa fa-basketball-ball dribble"></i>
                        </div>
                        <div className="experience-card-info">
                            <h4>{data?.title}</h4>
                            <p className="designation">{data?.designation}</p>
                            <p>
                            {data?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


const ExperienceSection = () => {
    const {experience_section} = staticData;

    return (
        <React.Fragment>
            {experience_section?.data && experience_section?.data?.length > 0 && (
                <div className="experience-section">
                    <div className="container responsive-container">
                        <div className="section-heading">
                            <h1>{experience_section.section_title}</h1>
                            <p>{experience_section.sub_title}</p>
                        </div>
                        <div className="experience-card-area">
                            <div className="test green">
                                <i className="fa fa-address-card"> </i>
                            </div>
                            <div className="progress-bar"></div>
                            <div className="row pad">
                                {experience_section?.data?.map((item: any, index: number) => (
                                    <div
                                        className={`col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item?.left ? "offset-lg-6" : ""}`}
                                        key={index}>
                                        <div className="experience-card">
                                            <div
                                                className={`pointer ${item.pointer_left ? "pointer-left" : "pointer-right"} ${item.border}`}>
                                                <div className={`circle ${item?.pointer_bg}`}><h6
                                                    className={`${item?.left ? "year-left" : "year-right"}`}>{item.year}</h6>
                                                </div>
                                            </div>
                                            <div className="experience-card-icon">
                                                <i className={`${item.icon} ${item.color}`}> </i>
                                            </div>
                                            <div className="experience-card-info">
                                                <h4>{item.title} </h4>
                                                <p className="designation">{item.designation}</p>
                                                <p>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default ExperienceSection;
