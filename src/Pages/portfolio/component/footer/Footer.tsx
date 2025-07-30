import "./Footer.css"
import Logo from "../../../../assets/logo.png"

function Footer(){
    return (
        <div className="footer" id="footer">
            <div className={"footer-container"}>
                <div>
                    <img src={Logo}/>
                    <h1>About</h1>
                    <p>This Plateform Is About Putting My Project To Real Life So People Can Use And Test Them. BASE May Contain Projects Related To Aviation, General Code, Finance, Music Or Any Other Field Of Interest </p>
                </div>
                <div>
                    <h1>Projects</h1>
                    <a href={"#"}>Pecunia</a>
                    <a href={"#"}>x86</a>
                    <a href={"#"}>Schola</a>
                    <a href={"#"}>Portfolio</a>
                </div>
                <div>
                    <h1>Legals</h1>
                    <a href={"#"}>Terms Of Service</a>
                    <a href={"#"}>Privacy Policy</a>
                    <a href={"#"}>Cookie Policy</a>
                    <a href={"#"}>Cookie Settings</a>
                </div>
                <div>
                    <h1>Help</h1>
                    <a href={"#"}>Help Center</a>
                    <a href={"#"}>Contact</a>
                </div>
            </div>
            <div className={"footer-legal"}>
                <i>
                    This Site Is Protected By
                    ReCAPTCHA And The Google Privacy
                    Policy And Terms Of Service Apply.
                </i>
            </div>
        </div>
    )
}

export default Footer;