import "./TechBanner.css";
import angular from "../../../../assets/technologie/angular.svg"
import reactjs from "../../../../assets/technologie/reactjs.svg"
import typescript from "../../../../assets/technologie/typescript.svg"
import msfsSDK from "../../../../assets/technologie/Microsoft-Flight-Simulator-SDK.png"
import fastify from "../../../../assets/technologie/fastify.jpg"
import nodejs from "../../../../assets/technologie/nodejs.jpg"
import springboot from "../../../../assets/technologie/spring.png"

const techLogos = [
    { name: "angular", src: angular},
    { name: "reactjs", src: reactjs },
    { name: "typescript", src: typescript },
    { name: "msfsSDK", src: msfsSDK },
    { name: "fastify", src: fastify },
    { name: "nodejs", src: nodejs },
    { name: "springboot", src: springboot },
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
