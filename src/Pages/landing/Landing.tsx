import {useEffect, useState} from "react";
import Header from "../../Shared/Component/Header/Header.tsx";
import HomeSection, {type I_HomeSectionContent} from "../../Shared/Component/HomeSection/HomeSection.tsx";
import Products from "./components/Products/Products.tsx";
import Footer from "../../Shared/Component/footer/Footer.tsx";

const Landing = ()=>{
    const [showObjects, setShowObjects] = useState(true);
    const [showHeader, setshowHeader] = useState(false);

    const HomeSectionContent: I_HomeSectionContent = {
        title: "Hi, There",
        description: "Modular systems for people and businesses. We build scalable platforms, automate workflows, and design reliable, adaptive interfaces.",
        githubLink: "https://github.com/basecompany"
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
                    { label: "Products", href: "#my-projects" },
                    { label: "Entreprise", href: "#my-projects" },
                ]}
                showAuthButtons={true}
            />

            <HomeSection
                showObjects={showObjects}
                content={HomeSectionContent}
            />

            <Products/>

            <Footer/>
        </div>
    )
}

export default Landing;