import {useEffect, useState} from "react";
import Header from "../../Shared/Component/header/Header.tsx";
import HomeSection from "../portfolio/component/landing/HomeSection.tsx";
import Products from "./components/Products/Products.tsx";

export const Landing = ()=>{
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
            <Header
                visible={showHeader}
                links={[
                    { label: "Home", href: "#Landing" },
                    { label: "Products", href: "#my-projects" },
                    { label: "Entreprise", href: "#my-projects" },
                ]}
                showAuthButtons={true}
            />

            <HomeSection showObjects={showObjects} />

            <Products/>
        </div>
    )
}