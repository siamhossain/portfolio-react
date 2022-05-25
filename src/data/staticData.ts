import portfolio01 from '../Static/images/portfolio/portfolio01.png';
import portfolio02 from '../Static/images/portfolio/portfolio02.png';
import portfolio03 from '../Static/images/portfolio/portfolio03.png';
import portfolio04 from '../Static/images/portfolio/portfolio04.png';
import portfolio05 from '../Static/images/portfolio/portfolio05.png';

import explore from '../Static/icons/ic_explore.png';
import graphic from '../Static/icons/ic_graphic.png';
import AppDevelopment from '../Static/icons/App-Development.png';
import WebDevelopment from '../Static/icons/Web-Development.png';

import frontend from "../Static/images/Skills/Front-End-Developer.png";
import UI from "../Static/images/Skills/UI-Design.png";
import reactImg from "../Static/images/Skills/React.png";
import Marketing from "../Static/images/Skills/Marketing.png";
import Graphic from "../Static/images/Skills/Graphic-Design.png";
import Apps from "../Static/images/Skills/Apps.png";
import Next from "../Static/images/Skills/Next-js.png";

import {StaticData} from './staticData.d';

const staticData: StaticData = {

    header_section: {
        logo_letter: "M",
    },

    short_introduction: {
        name: "Martin Adison",
        title: "Web Designer",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    about_section: {
        section_title: "About Me",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores commodi deleniti dicta ducimus enim, eos explicabo facilis laudantium nisi, nobis nulla,                               perferendis praesentium quasi quis saepe sapiente sed suscipit unde veritatis. Aliquid amet aut beatae eius est, fugit illo laudantium necessitatibus utt voluptates.",
        client: 350,
        experience: 10,
        awards: 35,
    },

    skills: {
        section_title: "My Skills",
        data: {
            categories: [
                {
                    key: "Web",
                    initial: true,
                    title: "Web",
                    items: [
                        {
                            color: "light-green",
                            progress: "90%",
                            icon: UI,
                            title: "UI/UX Design"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: reactImg,
                            title: "React"
                        },
                        {
                            color: "light-blue",
                            progress: "80%",
                            icon: Graphic,
                            title: "Graphic Design"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Next.JS"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Apps,
                            title: "Mobile App Design"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Marketing,
                            title: "SEO Marketing"
                        },
                        {
                            color: "light-yellow",
                            progress: "80%",
                            icon: frontend,
                            title: "Front End Developer"
                        },
                    ],
                },
                {
                    key: "Others",
                    initial: false,
                    title: "Development",
                    items: [
                        {
                            color: "light-green",
                            progress: "90%",
                            icon: UI,
                            title: "Others"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Apps,
                            title: "Mobile App Design"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Marketing,
                            title: "SEO Marketing"
                        },
                        {
                            color: "light-yellow",
                            progress: "80%",
                            icon: frontend,
                            title: "Front End Developer"
                        },
                    ],
                },
                {
                    key: "Programming",
                    initial: false,
                    title: "Development",
                    items: [
                        {
                            color: "light-blue",
                            progress: "80%",
                            icon: Graphic,
                            title: "Graphic Design"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Next.JS"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Apps,
                            title: "Mobile App Design"
                        },
                    ],
                },
                {
                    key: "tools",
                    initial: false,
                    title: "Development",
                    items: [
                        {
                            color: "light-green",
                            progress: "90%",
                            icon: UI,
                            title: "UI/UX Design"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: reactImg,
                            title: "React"
                        },
                        {
                            color: "light-blue",
                            progress: "80%",
                            icon: Graphic,
                            title: "Graphic Design"
                        },
                        {
                            color: "light-purple",
                            progress: "80%",
                            icon: Next,
                            title: "Next.JS"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Apps,
                            title: "Mobile App Design"
                        },
                        {
                            color: "light-sky",
                            progress: "80%",
                            icon: Marketing,
                            title: "SEO Marketing"
                        },
                        {
                            color: "light-yellow",
                            progress: "80%",
                            icon: frontend,
                            title: "Front End Developer"
                        },
                    ],
                },
            ],
        }
    },

    education_section: {
        section_title: "Education",
        section_subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt, fugit harum id iste laudantium minima nobis nulla omnis repellat.",
        data: [
            {
                year: "2012-2013",
                degree_title: "Bachelor in Computer Science",
                institution: "Brack University",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                icon: null,
                color: "light-green",
            },
            {
                year: "2013-2017",
                degree_title: "Higher Secondary School Certificate",
                institution: "Brack University",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                icon: null,
                color: "light-blue",
            },
            {
                year: "2017-2019",
                degree_title: "Diploma in Information Technology",
                institution: "Brack University",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                icon: null,
                color: "light-orange",
            },
            {
                year: "2019-2020",
                degree_title: "Art & Creative Director",
                institution: "Brack University",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                icon: null,
                color: "light-purple",
            },
        ],
    },

    experience_section: {
        section_title: "Experience",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut viverra maecenas accumsan lacus vel facilisis.",
        data: [
            {
                year: "2012-2013",
                title: "Dribble",
                designation: "Senior UI UX Designer",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                icon: "fa fa-backward",
                color: "light-pink",
                left: true,
                pointer_left: true,
                pointer_bg: "light-pink-bg",
                border: "light-pink-border",
            },
            {
                year: "2012-2013",
                title: "UI/UX Designer",
                designation: "Senior UI UX Designer",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                icon: "fa fa-anchor",
                color: "light-orange",
                left: false,
                pointer_left: false,
                pointer_bg: "light-orange-bg",
                border: "light-orange-border",
            },
            {
                year: "2012-2013",
                title: "Envato",
                designation: "Senior UI UX Designer",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                icon: "fa fa-leaf",
                color: "light-green",
                left: true,
                pointer_left: true,
                pointer_bg: "light-green-bg",
                border: "light-green-border",
            },
            {
                year: "2012-2013",
                title: "Behance",
                designation: "Senior UI UX Designer",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                icon: "fa fa-behance",
                color: "light-purple",
                left: false,
                pointer_left: false,
                pointer_bg: "light-purple-bg",
                border: "light-purple-border",
            },
        ],
    },

    service_section: {
        section_title: "My Services",
        sub_title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat inventore, non. A adipisci, assumenda facilis minima omnis quisquam totam.",
        data: [
            {
                icon: graphic,
                title: "Graphic Design",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fugit molestiae mollitia natus, optio quis reprehenderit",
                button: {
                    title: "Learn More",
                    href: "http://google.com",
                },
            },
            {
                icon: AppDevelopment,
                title: "Web Design",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fugit molestiae mollitia natus, optio quis reprehenderit",
                button: {
                    title: "Learn More",
                    href: "http://google.com",
                },
            },
            {
                icon: WebDevelopment,
                title: "App Development",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fugit molestiae mollitia natus, optio quis reprehenderit",
                button: {
                    title: "Learn More",
                    href: "http://google.com",
                },
            },
            {
                icon: WebDevelopment,
                title: "Wev Development",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error fugit molestiae mollitia natus, optio quis reprehenderit",
                button: {
                    title: "Learn More",
                    href: "http://google.com",
                },
            },
        ]
    },

    portfolio_section: {
        section_title: "My Portfolio",
        data: {
            categories: [
                {
                    key: "design",
                    initial: true,
                    title: "Design",
                    items: [
                        {
                            grouped: false,
                            image: portfolio01,
                            href: "",
                            size: "large",
                        },
                        {
                            grouped: true,
                            groupItmes: [
                                {
                                    image: portfolio02,
                                    href: "",
                                    size: "small",
                                },
                                {
                                    image: portfolio03,
                                    href: "",
                                    size: "medium",
                                },
                            ]
                        },
                        {
                            grouped: true,
                            groupItmes: [
                                {
                                    image: portfolio04,
                                    href: "",
                                    size: "medium",
                                },
                                {
                                    image: portfolio05,
                                    href: "",
                                    size: "small",
                                },
                            ]
                        },
                    ],
                },
                {
                    key: "development",
                    initial: false,
                    title: "Development",
                    items: [
                        {
                            grouped: true,
                            groupItmes: [
                                {
                                    image: portfolio04,
                                    href: "",
                                    size: "medium",
                                },
                                {
                                    image: portfolio05,
                                    href: "",
                                    size: "small",
                                },
                            ],
                        },
                        {
                            image: portfolio01,
                            href: "",
                            size: "large",
                        },
                        {
                            grouped: true,
                            groupItmes: [
                                {
                                    image: portfolio02,
                                    href: "",
                                    size: "small",
                                },
                                {
                                    image: portfolio03,
                                    href: "",
                                    size: "medium",
                                },
                            ],
                        },
                    ],
                },
                {
                    key: "photography",
                    initial: false,
                    title: "Photography",
                    items: [
                        {
                            grouped: true,
                            groupItmes: [
                                {
                                    image: portfolio02,
                                    href: "",
                                    size: "small",
                                },
                                {
                                    image: portfolio03,
                                    href: "",
                                    size: "medium",
                                },
                            ]
                        },
                        {
                            image: portfolio01,
                            href: "",
                            size: "large",
                        },
                    ],
                },
            ],
        }
    },

    testimonial_section: {
        section_title: "Testimonial",
        data: [
            {
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam aspernatur at aut consectetur doloribus eius eos, eveniet facilis impedit neque nostrum                                 perferendis quam quo reiciendis, saepe sed vel veritatis! Dolor illum quas recusandae totam voluptatibus?",
                name: "Jackson Roy",
                designation: "Web designer",
            },
        ]
    },

    contact_section: {
        section_title: "Get in touch",
        phone: [
            "+0214 214 215",
            "+0214 214 215",
        ],
        email: [
            "info@example.com",
            "hr@example.com",
        ],
        location: [
            "Moscow street A.Pushkin 14560, 24569",
        ],
    },

    blog_section: {
        section_title: "My Blogs",
        sub_title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
        data: [
            {
                image: "path/to/image",
                date: "August 30, 2022",
                title: "Market Place UI/UX"
            },
            {
                image: "path/to/image",
                date: "September 30, 2021",
                title: "Branding Supharman"
            },
            {
                image: "path/to/image",
                date: "October 30, 2021",
                title: "The Day for Happines"
            },
        ]
    },

    footer_section: {
        topCard: {
            title: "Let's Make Something Together",
            subtitle: "Start a Conversation",
            hireButton: {
                title: "Hire Me Now",
                href: "http://google.com",
            },
        },
        logo_letter: "M",
        description: "Lorem ipsum dolor sit amet, ing elit, sed do eiusmod tempor incididunt ut sed do labore et dolore magna aliqua.eiusmod",
        service_links: [
            {
                href: "",
                title: "Strategy",
            },
            {
                href: "",
                title: "Design",
            },
            {
                href: "",
                title: "Content",
            },
            {
                href: "",
                title: "Technology",
            },
        ],
        about_links: [
            {
                href: "",
                title: "Case Studies",
            },
            {
                href: "",
                title: "Career",
            },
            {
                href: "",
                title: "Contact Us",
            },
            {
                href: "",
                title: "Privacy Policy",
            },
        ],
        contact_info: {
            phone: "+7 928-101-23-45",
            email: "olux.moore@gmail.com",
            address: "374 William S Canning Blvd",
        },
        showSocialIcons: true,
    },

    social_links: {
        facebook: {
            title: "",
            href: "",
            icon: null,
        },
        twitter: {
            title: "",
            href: "",
            icon: null,
        },
    },
};

export {staticData};