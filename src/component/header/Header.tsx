import "./Header.css"
import Logo from "../../assets/logo.png"

function Header({ visible }: { visible: boolean }){

    return (
        <div className={`Header animate__fadeInDown ${visible ? "visible" : "hidden"}`}>
            <div className="Header-Logo-Container"><img src={Logo}/></div>
            <div className="Header-Link">
                <div><a href="#Landing">Home</a></div>
                <div><a href="#task-carousel">Collaborations</a></div>
                <div><a href="#CVRoadmap">Curriculum</a></div>
                <div><a href="#my-projects">Projects</a></div>
            </div>
        </div>
    )
}

export default Header