import React, {useEffect} from 'react';
import logo from "../../Static/images/Logo.png";
import '../../Static/StyleSheets/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../Static/StyleSheets/header.css';
import moon from "../../Static/icons/ic_moon.png";
import sun from "../../Static/icons/ic_sun.png";
import Sidebar from "../Sidebar/Sidebar";
import {staticData} from "../../data/staticData";

const Header = () => {

    const {header_section} = staticData;

    useEffect(() => {
        // apply dark theme is set
        if ((window as any).isDarkTheme()) {
            (window as any).toggleTheme("dark");
        }

        // populate the theme switcher icon
        (window as any).populateThemeSwitcherIcon();

        const themeButton = document.querySelector('[data-toggle="theme"]');

        if (themeButton) {
            themeButton.addEventListener('click', function () {
                (window as any).toggleTheme();
            });
        }

        document.querySelectorAll('[data-toggle="sidebar-menu"]').forEach(function (element) {
            element.addEventListener('click', function () {
                (window as any).toggleSidebarMenu();
            });
        });

    })

    return (
        <div>
            <div className="header-section">
                <div className="container">
                    <nav>
                        <table>
                            <tr>
                                <td>
                                    <a href="/">
                                        <div className="logo"><p>{header_section.logo_letter}</p></div>
                                    </a>
                                </td>
                                <td>
                                    <ul>
                                        <li><a href="/" className="active">Home</a></li>
                                        <li><a href="#about">About Me</a></li>
                                        <li><a href="#services">Services</a></li>
                                        <li><a href="#portfolio">Portfolio</a></li>
                                        <li><a href="#testimonial">Testimonial</a></li>
                                        <li><a href="#blog">Blog</a></li>
                                    </ul>
                                </td>
                                <td>
                                    <div className="wrapper">
                                        <div>
                                            <button>Hire Me</button>
                                        </div>
                                        <div className="theme-toggle" data-toggle="theme">
                                            <img src={moon} alt="" data-theme-icon="moon"/>
                                            <img src={sun} alt="" data-theme-icon="sun"/>
                                        </div>
                                        <div className="menu-icon" data-toggle="sidebar-menu">
                                            <i className="fa fa-bars"></i>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </nav>
                </div>
            </div>
            <Sidebar/>
        </div>
    );
};

export default Header;
