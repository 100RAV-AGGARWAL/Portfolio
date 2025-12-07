import { TExperience } from "types";

export const experiences: TExperience[] = [
    {
        title: "Angular Developer",
        companyName: "Tracktrades",
        icon: "/static/experiences/Tracktrades.jpeg",
        iconBg: "#383E56",
        date: "Feb 2022 - Apr 2022",
        points: [
            "Implemented Frontend design and working using Angular.",
            "Implemented Text Editor using EditorJs and client-server integration.",
        ],
        siteLinks: [
            {
                title: "Tracktrades",
                url: "https://tracktrades.in",
            },
        ],
    },
    {
        title: "SDE Intern",
        companyName: "Kshipta Technologies LLP",
        icon: "/static/experiences/kshipta.png",
        iconBg: "#E6DEDD",
        date: "Jun 2021 - Sept 2022",
        points: [
            "Responsible for end-to-end implementation and design of modules.",
            "Project Pathlaws (Web) - Worked with MVC Design Pattern, Rest APIs, Paytm Payment Gateway, Google Captcha, and QnA Feature.",
            "Project Pathlaws (App) - Made a POC for a mobile app in Flutter. Features implemented include Login State retention, Push Notifications.",
            "Project Panchshastra (Web) - Design and implementation of SSO, User Management, Hindu Calendar, Design of Payment Gateway.",
            "Used following technologies - NodeJS, Angular, MongoDB, MySQL, Flutter, Django, Docker, Redis.",
        ],
    },
    {
        title: "Intern Trainee",
        companyName: "Accelalpha",
        icon: "/static/experiences/accelalpha.jpeg",
        iconBg: "#383E56",
        date: "Aug 2022 - Sept 2022",
        points: [
            "Gained hands-on experience with Oracle Cloud Infrastructure (OCI).",
            "Developed understanding of core cloud infrastructure concepts such as scalability, security, and high availability.",
            "Learned about load balancing solutions within OCI, enhancing skills in network optimization and performance management.",
        ],
    },
    {
        title: "Open Source Contributor",
        companyName: "Hacktoberfest",
        icon: "/static/experiences/hacktoberfest.jpeg",
        iconBg: "#E6DEDD",
        date: "October 2022",
        points: [
            "Contributed in the open source repository - Taskwarrior-flutter.",
            "Had 4 Pull Requests accepted and merged in the main repository.",
            "PRs included bug fixes, UI Improvements and logical error fixes.",
            "Technology stack used was Flutter.",
        ],
    },
    {
        title: "SDE Intern",
        companyName: "Electrade by Hatchnhack",
        icon: "/static/experiences/electrade.jpeg",
        iconBg: "#E6DEDD",
        date: "Feb 2023 - Jun 2024",
        points: [
            "Implemented Import and Competitor Matching Tool which mapped internal products with import/competitor products fetched from OpenSearch API in many-to-many fashion.",
            "Developed Customer CRM Tool which manages the customers for our company. Also optimized API response time by 91.2%.",
            "Developed a Python script to gather GST Orders from Shopify API and generate a bulk JSON for e-Invoicing of the orders.",
            "Worked on the documentations and wrote Critical User Journeys for major flows of the website.",
            "Worked on Product Catalog Dashboard, Coupons and Promotions Panel, SEO Panel, Vendor Management Panel using Angular, Typescript, HTML, CSS, NodeJs.",
            "Developed Electrade mobile app using React Native.",
            "Working on Progressive Web Application of Electrade's Vendor Portal.",
        ],
        siteLinks: [
            {
                title: "Vendor Portal",
                url: "https://seller.electrade.in",
            },
            {
                title: "Electrade BOM",
                url: "https://bom.electrade.in",
            },
            {
                title: "Marketplace",
                url: "https://electrade.in",
            },
        ],
    },
    {
        title: "Business Technical Solutions Associate (SDE)",
        companyName: "ZS Associates",
        icon: "/static/experiences/zs.jpeg",
        iconBg: "#E6DEDD",
        date: "Jul 2024 - Present",
        points: [
            "Built backend services for a multi-million-dollar enterprise platform for a Fortune 500 pharmaceutical company using a microservice architecture, ensuring high performance and API reliability",
            "Implemented modular APIs with SQLAlchemy ORM, efficient relational modeling, and optimized DB design for scalable internal usage.",
            "Authored complete technical documentation, including API signatures, user flows, and unit test cases.",
            "Improved API performance by approx. 90% through SQL indexing, query optimization, caching, debouncing, and eliminating redundant service-to-service calls.",
            "Created FastAPI best-practices playbook adopted across teams for consistent API structure, validations, error handling, dependency management, and security.",
            "Implemented API rate limiting using an Exponential Moving Average (EMA) algorithm and automated background tasks via APScheduler.",
            "Designed inter-pod communication flows and developed both sync and async services using SQLAlchemy (sync-async engine, session management, lifespan events)",
            "Ensured enterprise-grade authentication using PingOne SAML, OAuth, and RBAC-based authorization",
            "Maintained strong code quality with Pytest (mocker), Pylint, SonarQube, Trufflehog scanning, and pre-commit hooks.",
            "Solely developed a full-stack internal application using Angular, FastAPI, and PostgreSQL, establishing the application architecture",
            "Developing a multi-million-dollar project including document-management module integrating React, FastAPI backend, and MS Office automation",
            "Building a Vite + React + Jest frontend with real-time collaborative editing using CKEditor, custom annotation system, and metadata capture features",
            "Did a POC on custom MS Word plugin using Office.js for content tagging, smart metadata extraction, and seamless backend integration",
            "Contributing to backend enhancements (FastAPI, SQLAlchemy, Pydantic) to support document workflows, user activity logs, and content synchronization"
        ],
    },
];
