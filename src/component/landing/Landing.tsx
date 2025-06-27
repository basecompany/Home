import "./Landing.css"
import Object from "./component/object/Object.tsx";
import {Github} from "lucide-react";


function Landing({ showObjects }: { showObjects: boolean }) {
    return (
        <div className={"Landing"} id={"Landing"}>

            <div className={`OBJECTS ${showObjects ? "visible" : "hidden"}`}>
                <Object />
            </div>

            <div className={`Landing-Text animate__fadeIn ${showObjects ? "visible" : "hidden"}`}>
                <div className={"Landing-Text-Title"}><h1>Hi, There</h1></div>
                <div className={"Landing-Text-Text"}>
                    {/*<p>Specializing in Software Architecture, Testing Frameworks, and Complex Simulations...</p>*/}
                    <p>I build scalable systems, enforce reliability through rigorous testing, and develop real-world simulations with clean architecture.</p>
                </div>
                <div className={"Landing-Text-Button"}>
                    <a href={"https://github.com/IlyassBa"} target={"_blank"}>
                        <Github/>
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
}


export default Landing