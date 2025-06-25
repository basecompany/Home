import "./Header.css"
import Logo from "../../assets/logo.png"

function Header({ visible }: { visible: boolean }){

    return (
        <div className={`Header animate__fadeInDown ${visible ? "visible" : "hidden"}`}>
            <div className="Header-Logo-Container"><img src={Logo}/></div>
            <div className="Header-Link">
                {/*<div><a href="#">Pecunia</a></div>*/}
                {/*<div><a href="#">x86</a></div>*/}
                {/*<div><a href="#">Schola</a></div>*/}
                {/*<div><a href="#">Portfolio</a></div>*/}

                <div><a href="#Landing">Home</a></div>
                <div><a href="#WhoAmI">About</a></div>
                <div><a href="#my-projects">Projects</a></div>
                <div><a href="#footer">Other</a></div>
            </div>
        </div>
    )
}

export default Header