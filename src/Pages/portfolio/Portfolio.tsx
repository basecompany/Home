import Header from "../../Shared/Component/Header/Header.tsx";
import HomeSection, {type I_HomeSectionContent} from "../../Shared/Component/HomeSection/HomeSection.tsx";
import TaskCarousel from "./component/TaskCarousel/TaskCarousel.tsx";
import TechBanner from "./component/TechBanner/TechBanner.tsx";
import CVRoadmap from "./component/CVRoadmap/CVRoadmap.tsx";
import MyProjects from "./component/myprojects/MyProjects.tsx";
import {useEffect, useState} from "react";
import Footer from "../../Shared/Component/footer/Footer.tsx";

export default function Portfolio() {

    const [showObjects, setShowObjects] = useState(true);
    const [showHeader, setshowHeader] = useState(false);

    const HomeSectionContent: I_HomeSectionContent = {
        title: "Hi, There",
        description: "I build scalable systems, enforce reliability through rigorous testing, and develop real-world simulations with clean architecture.",
        githubLink: "https://github.com/IlyassBa"
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setshowHeader(scrollY > window.innerHeight * 0.1); // Hide after 60% scroll
            setShowObjects(scrollY < window.innerHeight * 0.5); // Hide after 60% scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return(
        <div>

            <Header
                visible={showHeader}
                links={[
                    { label: "Home", href: "#Landing" },
                    { label: "Collaborations", href: "#task-carousel" },
                    { label: "Curriculum", href: "#CVRoadmap" },
                    { label: "Projects", href: "#my-projects" },
                ]}
            />
            <HomeSection
                showObjects={showObjects}
                content={HomeSectionContent}
            />
            <TaskCarousel/>
            <TechBanner/>
            <CVRoadmap/>
            <MyProjects/>

            <Footer/>

        </div>
    )
}


