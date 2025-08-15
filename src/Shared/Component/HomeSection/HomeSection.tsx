import "./HomeSection.css"
import Object from "./component/object/Object.tsx";
import {Github} from "lucide-react";
import type {JSX} from "react";

export interface I_HomeSectionContent{
    title: string,
    description: string,
    githubLink: string
}
export interface I_HomeSectionProps {
    showObjects: boolean;
    content: I_HomeSectionContent;
}

function HomeSection({ showObjects, content }: I_HomeSectionProps): JSX.Element {
    return (
        <div className="Landing" id="Landing">
            <div className={`OBJECTS ${showObjects ? "visible" : "hidden"}`}>
                <Object />
            </div>

            <div className={`Landing-Text animate__fadeIn ${showObjects ? "visible" : "hidden"}`}>
                <div className="Landing-Text-Title">
                    <h1>{content.title}</h1>
                </div>
                <div className="Landing-Text-Text">
                    <p>{content.description}</p>
                </div>
                <div className="Landing-Text-Button">
                    <a href={content.githubLink} target="_blank">
                        <Github />
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
