import React from 'react';
import './App.css';
import './Static/StyleSheets/header.css';
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import EducationSection from "./Components/EducationSection/EducationSection";
import ExperienceSection from "./Components/ExperienceSection/ExperienceSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import TestimonialSection from "./Components/TestimonialSection/TestimonialSection";
import BlogSection from "./Components/BlogSection/BlogSection";
import FooterSection from "./Components/FooterSection/FooterSection";
import Home from "./Pages/Home/Home";
import BlogList from "./Pages/BlogList/BlogList";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog_list" element={<BlogList />} />
              <Route path="/blog_details" element={<BlogDetails />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
