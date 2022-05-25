import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/blog-section.css';
import '../../Static/StyleSheets/contact-form.css';
import Location from '../../Static/images/contact-form/ic-location.png';
import Email from '../../Static/images/contact-form/ic-email.png';
import Phone from '../../Static/images/contact-form/ic-phone.png';
import {staticData} from "../../data/staticData";



const ContactForm = () => {
    const {contact_section} = staticData;
    return (
        <div>
            <div className="contact-section">
                <div className="container">
                    <div className="row">
                        <h2>{contact_section.section_title}</h2>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">

                            <div className="contact-form">
                                <input type="email" className="form-control" id="Input1" placeholder="Name" />
                            </div>
                            <div className="contact-form">
                                <input type="email" className="form-control" id="Input2" placeholder="Email" />
                            </div>
                            <div className="contact-form">
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                          placeholder="Type your message here"/>
                            </div>
                            <div className="contact-form-button">
                                <button>Sent Message</button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                            <div className="info-details">
                                <div className="card-phone-info">
                                    <h3>phone</h3>
                                    <div className="icon">
                                        <img src={Phone} alt=""/>
                                    </div>
                                </div>
                                <div className="card-info-details-phone-background">
                                    {contact_section?.phone?.map((item: any, index: number) => (
                                        <h4>{item}</h4>
                                    ))}
                                </div>
                            </div>
                            <div className="info-details">
                                <div className="card-phone-info">
                                    <h3>Email</h3>
                                    <div className="icon">
                                        <img src={Email} alt=""/></div>
                                </div>
                                <div className="card-info-details-email-background">
                                    {contact_section?.email?.map((item: any, index: number) => (
                                        <h4>{item}</h4>
                                    ))}
                                </div>
                            </div>

                            <div className="info-details">
                                <div className="card-phone-info">
                                    <h3>Location</h3>
                                    <div className="icon">
                                        <img src={Location} alt=""/></div>
                                </div>
                                <div className="card-info-details-location-background">
                                    {contact_section?.location?.map((item: any, index: number) => (
                                        <h4>{item}</h4>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
