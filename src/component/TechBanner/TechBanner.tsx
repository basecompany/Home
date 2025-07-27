import "./TechBanner.css";
import angular from "../../assets/technologie/angular.svg"
import reactjs from "../../assets/technologie/reactjs.svg"
import typescript from "../../assets/technologie/typescript.svg"
import msfsSDK from "../../assets/technologie/Microsoft-Flight-Simulator-SDK.png"

const techLogos = [
    { name: "angular", src: angular},
    { name: "reactjs", src: reactjs },
    { name: "typescript", src: typescript },
    { name: "msfsSDK", src: msfsSDK },
];

export default function TechBanner() {
    return (
        <section className="tech-banner">
            <h2 className="banner-heading">Technologies and Platforms I have expertise in</h2>
            <div className="banner-logos">
                {techLogos.map(({ name, src }) => (
                    <img key={name} src={src} alt={name} className="banner-logo" />
                ))}
            </div>
        </section>
    );
}
