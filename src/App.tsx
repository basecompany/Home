import './App.css'
import Header from "./component/header/Header.tsx";
import Landing from "./component/landing/Landing.tsx";
import WhoAmI from "./component/WhoAmI/WhoAmI.tsx";
import {useEffect, useState} from "react";
import MyProjects from "./component/myprojects/MyProjects.tsx";
import Footer from "./component/footer/Footer.tsx";

function App() {
    const [showObjects, setShowObjects] = useState(true);
    const [showWhoAmI, setShowWhoAmI] = useState(false);
    const [showMyProjects, setShowMyProjects] = useState(false);
    const [showHeader, setshowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            setshowHeader(scrollY > window.innerHeight * 0.5); // Hide after 60% scroll
            setShowObjects(scrollY < window.innerHeight * 0.5); // Hide after 60% scroll
            setShowWhoAmI(scrollY > window.innerHeight * 0.8);
            setShowMyProjects(scrollY > window.innerHeight * 1.5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div>
        <Header visible={showHeader}/>
        <Landing showObjects={showObjects} />
        <WhoAmI visible={showWhoAmI}/>
        <MyProjects visible={showMyProjects}/>
        <Footer/>
    </div>
  )
}

export default App
