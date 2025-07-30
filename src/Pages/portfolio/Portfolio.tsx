import Header from "../../Shared/Component/header/Header.tsx";
import HomeSection from "./component/landing/HomeSection.tsx";
import TaskCarousel from "./component/TaskCarousel/TaskCarousel.tsx";
import TechBanner from "./component/TechBanner/TechBanner.tsx";
import CVRoadmap from "./component/CVRoadmap/CVRoadmap.tsx";
import MyProjects from "./component/myprojects/MyProjects.tsx";
import Footer from "./component/footer/Footer.tsx";
import {useEffect, useState} from "react";

export default function Portfolio() {

    const [showObjects, setShowObjects] = useState(true);
    const [showHeader, setshowHeader] = useState(false);



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
            {/*<Header visible={showHeader} links={headerLinks} />;*/}

            <Header
                visible={showHeader}
                links={[
                    { label: "Home", href: "#Landing" },
                    { label: "Collaborations", href: "#task-carousel" },
                    { label: "Curriculum", href: "#CVRoadmap" },
                    { label: "Projects", href: "#my-projects" },
                ]}
            />
            <HomeSection showObjects={showObjects} />
            <TaskCarousel/>
            <TechBanner/>
            <CVRoadmap/>
            <MyProjects/>


            <Footer/>
        </div>
    )
}


