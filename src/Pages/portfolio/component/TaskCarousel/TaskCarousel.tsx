import React, { useEffect, useState } from "react";
import vatsimClient from "../../../../assets/clients/vatsim-client.png"
import inibuildsClient from "../../../../assets/clients/inibuilds-client.png"
import justflightClient from "../../../../assets/clients/justflight-client.png"

import justflightproject from "../../../../assets/projects/justflight.png";
import magxproject from "../../../../assets/projects/magx.png";
import spartanproject from "../../../../assets/projects/Spartan_Executive.png";

import "./TaskCarousel.css";
import {useInView} from "../../../../hooks/useInView.ts";

interface Slide {
    title: string;
    description: string;
    linkLabel?: string;
    orgLabel: string;
    imageUrl: string;
    backgroundColor?: string;
}

const partners = [
    { name: "VATSIM", logo: vatsimClient },
    { name: "iniBuilds", logo: inibuildsClient },
    { name: "JustFlight", logo: justflightClient },
];

const slides: Slide[] = [
    {
        title: "Head of Tech departement at Maghreb VACC",
        description:
            "Worked on MAGX, a modular aviation management webapp featuring event scheduling, student records, admin dashboards, and interactive VFR charting. Integrated specialized ATC tools such as ATIS broadcast editors, METAR/TAF visualizers, and real-time frequency coordination. Also served as mentor for S2 engineering students, guiding project architecture and interface implementation through agile cycles and code reviews.",
        orgLabel: "VATSIM",
        imageUrl: magxproject,
        backgroundColor: "#3e0463", // Navy blue
    },
    {
        title: "Independent consultant Inibuilds",
        description:"Built custom flight instruments including Shadin mini-FLO fuel flow meters, Garmin G5 EFIS, and Boeing 747 EICAS logic layers—each integrated with real-time telemetry, state machines, and modular UI rendering. Components were designed for high-fidelity simulation responsiveness.",
        // linkLabel: "See the avionics work >",
        orgLabel: "iniBuilds",
        // imageUrl: "https://inibuilds.com/cdn/shop/files/FlightSimulator2024_snbDhtIb4s_4472x.png?v=1745919066",
        imageUrl: spartanproject,
        backgroundColor: "#78350F", // Teal
    },
    {
        title: "Tooling System Architecture",
        description:
            "Engineered the CGR-30 avionics abstraction layer with simulation-grade telemetry fidelity and modular UI logic. Built custom state machines for dynamic parameter visualization, runtime config injection, and clean separation of SDK internals. Embedded secure bindings for protected IP and future-proof extensibility across simulation platforms—emulating engine metrics with precise, real-time responsiveness.",
        // linkLabel: "Review the architecture >",
        orgLabel: "Just Flight",
        imageUrl: justflightproject,
        backgroundColor: "#3e3e3e", // Brown-orange
    },
    // {
    //     title: "Pecunia Budgeting Platform",
    //     description:
    //         "Built a modular expense tracking and budgeting interface for Pecunia, enabling users to monitor subscriptions, categorize spending, and visualize financial trends in real time. Integrated dynamic budget planning, multi-account support, and secure local-first data architecture. Focused on intuitive UX, customizable dashboards, and extensible logic for savings goal management and subscription oversight.",
    //     orgLabel: "Pecunia",
    //     imageUrl: "https://media.discordapp.net/attachments/1359149188461494395/1399076844610912327/pecunia.png?ex=6887af59&is=68865dd9&hm=1d0c33cb6344fb06bc8921ef18feeac22620f5bbf972303daf6abf9fa318cad2&=&format=webp&quality=lossless&width=1527&height=859",
    //     // linkLabel: "Explore the budgeting tools >",
    //     backgroundColor: "#001445", // Soft blue
    // }

];

const TaskCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [ref, isVisible] = useInView<HTMLDivElement>();


    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(id);
    }, []);

    const { title, description, linkLabel, orgLabel, imageUrl ,backgroundColor} = slides[index];

    return (
        <div className="task-carousel-container">
            <div
                ref={ref}
                className={`banner ${isVisible ? 'visible' : 'hidden'}`}
                id="task-carousel"
            >
                <section className="partners-banner">
                    <h2 className="partners-title">
                        Worked with leading aviation platforms and simulation studios
                    </h2>
                    <div className="partners-logos">

                        {partners.map((partner) => (
                            <img
                                key={partner.name}
                                src={partner.logo}
                                alt={partner.name}
                                className="partner-logo"
                            />
                        ))}
                    </div>
                </section>
                <section
                    className="persona-banner"
                    style={{ backgroundColor: backgroundColor || "#ffffff" }}
                >
                    <div key={`text-${index}`} className="persona-text fade">
                        <h1>{title}</h1>
                        <div className="gartner">{orgLabel}</div>
                        <p>{description}</p>
                        {
                            linkLabel&&(
                                <a href="#" className="report-link">{linkLabel}</a>
                            )
                        }
                    </div>
                    <div key={`image-${index}`} className="persona-charts fade">
                        <div className="chart-image">
                            <img src={imageUrl} alt={orgLabel} />
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default TaskCarousel;
