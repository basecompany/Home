import './MyProjects.css'
import spartanproject from "../../../../assets/projects/Spartan_Executive.png";
import magxproject from "../../../../assets/projects/magx.png";
// import justflightproject from "../../../../assets/projects/justflight.png";
import pecuniaproject from "../../../../assets/projects/pecunia.png";
import ratioproject from "../../../../assets/projects/ratio.png";
import scholaproject from "../../../../assets/projects/schola.png";
import {useInView} from "../../../../hooks/useInView.ts";
import ProjectCardModal, {type Link} from "./ProjectCardModal.tsx";
interface Project {
    img: string
    alt: string
    title: string
    date: string
    role: string
    techStack: string[]
    description: string
    links?: Link[]
    link?: string
    linkText?: string
    images?: string[]
}

const projects: Project[] = [
    {
        img: pecuniaproject,
        alt: "Pecunia",
        title: "Pecunia - Personal Financial Tracker",
        date: "2024-2025",
        role: "Full Stack Developer | Founder",
        description: "A secure, user-friendly finance tracker for non-technical users, featuring bank integration, analytics, and responsive design.",
        techStack: ["React", "Node.js", "Fastify", "PostgreSQL", "Vanilla CSS", "TypeScript", "Zustand", "Adobe XD"],
        link: "#",
        linkText: "View Project",
        links: [],
        images: [pecuniaproject]
    },
    {
        img: ratioproject,
        alt: "Ratio",
        title: "Ratio - Investment Portfolio Analyzer",
        date: "2023",
        role: "Full Stack Developer",
        description: "A tool for analyzing and optimizing investment portfolios, providing insights and recommendations for better returns.",
        techStack: ["Angular", "Node.js", "Fastify", "PostgreSQL", "Vanilla CSS", "TypeScript", "Zustand", "Adobe XD"],
        link: "#",
        linkText: "View Project",
        links: [],
        images: [ratioproject]
    },
    {
        img: scholaproject,
        alt: "Schola",
        title: "Schola - Online Learning Platform",
        date: "2025",
        role: "Frontend Developer",
        description: "An interactive online learning platform with course management, quizzes, and progress tracking.",
        techStack: ["Angular", "Node.js", "Fastify", "PostgreSQL", "Vanilla CSS", "TypeScript", "Zustand", "Adobe XD"],
        link: "#",
        linkText: "View Project",
        links: [],
        images: [scholaproject]
    },
    {
        img: spartanproject,
        alt: "Shadin Project",
        title: "Spartan Executive - Shadin Mini-FLO Gauge",
        date: "2024",
        role: "Junior Developer",
        description: "Developed a custom fuel flow gauge for the Spartan Executive aircraft in Microsoft Flight Simulator, integrating real-time data and legacy avionics for a seamless user experience.",
        techStack: ["MSFS SDK", "TypeScript"],
        link: "https://inibuilds.com/products/inibuilds-spartan-7w-executive-msfs",
        linkText: "View Project",
        links: [
            { label: "Product Page", url: "https://inibuilds.com/products/inibuilds-spartan-7w-executive-msfs" }
        ],
        images: [spartanproject]
    },
    {
        img: magxproject,
        alt: "MAGX",
        title: "MAGX - ATCO Management",
        date: "2022-2024",
        role: "Full Stack Developer | Founder",
        description: "Real-time management platform for air traffic control operations, with live updates, user roles, and analytics dashboard.",
        techStack: ["React", "ExpressJS", "Figma"],
        link: "#",
        linkText: "View Project",
        links: [],
        images: [magxproject]
    },

];

function MyProjects() {
    const [ref, isVisible] = useInView<HTMLDivElement>();

    return (
        <div ref={ref} className={`my-projects ${isVisible ? 'visible' : "hidden"}`} id="my-projects">
            <div className="my-project-title">
                <h1>My Projects</h1>
            </div>
            <div className="my-project">
                {projects.map((project: Project, idx: number) => (
                    <ProjectCardModal project={project} key={idx} />
                ))}
            </div>
        </div>
    );
}


export default MyProjects;