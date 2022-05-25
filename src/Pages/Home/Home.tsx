import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/global.css';
import '../../Static/StyleSheets/header.css';
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import AboutSection from "../../Components/AboutSection/AboutSection";
import SkillsSection from "../../Components/SkillsSection/SkillsSection";
import EducationSection from "../../Components/EducationSection/EducationSection";
import ExperienceSection from "../../Components/ExperienceSection/ExperienceSection";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";
import BlogSection from "../../Components/BlogSection/BlogSection";
import FooterSection from "../../Components/FooterSection/FooterSection";
import ContactForm from "../../Components/ContactForm/ContactForm";

const Home = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <EducationSection/>
            <ExperienceSection/>
            <ServicesSection/>
            <PortfolioSection/>
            <TestimonialSection/>
            <ContactForm/>
            <BlogSection/>
            <FooterSection/>
        </div>
    );
};

export default Home;
