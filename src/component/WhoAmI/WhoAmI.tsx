import "./WhoAmI.css"
import codeLogo from "../../assets/4.png"

function WhoAmI({ visible }: { visible: boolean }){
    return(
        <div className={`WhoAmI ${visible ? "visible" : "hidden"}`} id={"WhoAmI"}>
            <div className={"WhoAmI-Text"}>
                <div>
                    <div className={"WhoAmI-Text-H1"}><h1>Who Am I ?</h1></div>
                    <div  className={"WhoAmI-Text-P"}>
                        <p>

                            I'm into programming, aviation, and electronic music. I enjoy building systems that work reliably, breaking down complex problems, and making things run smoothly.
                            <br/><br/>
                            I focus on structure, clear thinking, and paying attention to the details that matter.

                        </p>
                    </div>
                </div>
            </div>
            <div className={"WhoAmI-Logo"}>
                <img src={codeLogo}/>
            </div>
        </div>
    )
}


export default WhoAmI;