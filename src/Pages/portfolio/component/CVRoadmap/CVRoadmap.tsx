import "./CVRoadmap.css";
import {useInView} from "../../../../hooks/useInView.ts";

type RoadmapStep = {
    title: string;
    subtitle?: string;
    date: string;
    description?: string;
    category?: "education" | "work" | "internship";
};

const roadmap: RoadmapStep[] = [

    // {
    //     title: "Just Flight",
    //     subtitle: "Architect – Modular Logic",
    //     date: "2023 – Present",
    //     description: "Protected abstractions for avionics state, extensible SDK overlays, IP-segmented systems.",
    //     category: "work",
    // },

    // {
    //     title: "IT & Methods Division – Ministry of Health",
    //     subtitle: "Internship",
    //     date: "July 2021",
    //     description: "Authentication with auth app using AngularJS and ExpressJS",
    //     category: "internship",
    // },
    {
        title: "Pecunia",
        subtitle: "Personal Finance Web App",
        date: "Nov 2024 – Present",
        description: "React, Node.js, PostgreSQL. Expense tracking, budgeting, recommendation system.",
        category: "work",
    },
    {
        title: "Junior Developer – INIBUILDS",
        subtitle: "Flight Simulator Instrumentation",
        date: "Oct 2024 – May 2025",
        description: "Garmin G5, ECAM B747, MFD, IDU680, Shadin mini-FLO for StratoLauncher & Spartan Executive.",
        category: "work",
    },

    {
        title: "Surveyor – Census 2024",
        subtitle: "High Commission for Planning",
        date: "Aug 30 – Sep 30, 2024",
        description: "Official population survey work for Rabat region under government supervision.",
        category: "work",
    },
    {
        title: "IT & Methods Division – Ministry of Health",
        subtitle: "Internship",
        date: "July 2024",
        description: "Authentication with auth app using AngularJS and ExpressJS",
        category: "internship",
    },
    {
        title: "Engineering School – EMSI",
        subtitle: "Computer Science: Networks & Systems",
        date: "2023 – Present",
        description: "École Marocaine des Sciences d'Ingénieur. Systems architecture, development workflows, modular design.",
        category: "education",
    },

    {
        title: "MagX Web App",
        subtitle: "CRM Platform – Fullstack Developer",
        date: "Apr 2022 – Oct 2024",
        description: "Event scheduling, ATC dashboard, student registry, ATIS/METAR tools, VFR charting.",
        category: "work",
    },
    {
        title: "IT & Methods Division – Ministry of Health",
        subtitle: "Internship",
        date: "July 2021",
        description: "Authentication with React Native",
        category: "internship",
    },
    {
        title: "Morocco-Korea ICT Center",
        subtitle: "Internship – ICT Hardware & Networking",
        date: "July 2021",
        description: "Computer setup and lab networking preparation for training center.",
        category: "internship",
    },

    {
        title: "Bachelor - Networking and Proprietary systems",
        subtitle: "Bachelor Degree",
        date: "2020-2022",
        description: "How technician work and how to supervise systems",
        category: "education",
    },
    {
        title: "Electrical Engineering Baccalaureate",
        subtitle: "High School Degree",
        date: "2020",
        description: "Specialized in applied physics and circuits prior to higher education track.",
        category: "education",
    },
    {
        title: "INJAZ Arab Project",
        subtitle: "Developer – Muscat/Rabat",
        date: "2019 – 2020",
        description: "Ranked 3rd across Arab nations. Built and maintained technical systems for social innovation.",
        category: "education",
    },
    {
        title: "INJAZ Regional & National Winner",
        subtitle: "Developer – Rabat",
        date: "2019",
        description: "1st place project involving IT-based innovation and regional deployment.",
        category: "education",
    },
];

interface ZigzagItemProps {
    step: RoadmapStep;
    index: number;
}

const ZigzagItem: React.FC<ZigzagItemProps> = ({ step, index }) => {
    const [ref, isVisible] = useInView<HTMLDivElement>();

    return (
        <div ref={ref} className={`zigzag-item ${index % 2 === 0 ? "left" : "right"} ${isVisible ? 'visible' : "hidden"} ${step.category}`}>
            <div ref={ref} className={`zigzag-content ${isVisible ? "reveal" : "hidden"}`}>
                <h3>{step.title}</h3>
                {step.subtitle && <h4>{step.subtitle}</h4>}
                <span className="zigzag-date">{step.date}</span>
                {step.description && <p>{step.description}</p>}
            </div>
            <div className="zigzag-dot" />
        </div>
    );
};



export default function CVRoadmap() {
    return (
        <div className={"CVRoadmap"} id={"CVRoadmap"}>
            <div className="zigzag-title">
                {/*<h1>Professional Journey</h1>*/}
            </div>
            <div className="zigzag-wrapper">
                {roadmap.map((step, idx) => (
                    <ZigzagItem key={idx} step={step} index={idx} />
                ))}
                <div className="zigzag-line" />
            </div>
        </div>
    );
}
