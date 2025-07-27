import './App.css'
import Header from "./component/header/Header.tsx";
import Landing from "./component/landing/Landing.tsx";
import {useEffect, useState} from "react";
import MyProjects from "./component/myprojects/MyProjects.tsx";
import Footer from "./component/footer/Footer.tsx";
import TaskCarousel from "./component/TaskCarousel/TaskCarousel.tsx";
import CVRoadmap from "./component/CVRoadmap/CVRoadmap.tsx";
import TechBanner from "./component/TechBanner/TechBanner.tsx";

function App() {
    const [showObjects, setShowObjects] = useState(true);
    // const [showWhoAmI, setShowWhoAmI] = useState(false);
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
  return (
    <div>
        <Header visible={showHeader}/>
        <Landing showObjects={showObjects} />
        <TaskCarousel/>
        <TechBanner/>
        <CVRoadmap/>
        <MyProjects/>


        <Footer/>
    </div>
  )
}

export default App
