import "./Header.css"
import Logo from "../../../assets/logo.png"



type LinkItem = {
    label: string;
    href: string;
};

type HeaderProps = {
    visible: boolean;
    links: LinkItem[];
    showAuthButtons?: boolean; // Optional, defaults to false
};


function Header({ visible, links, showAuthButtons = false }: HeaderProps) {
    return (
        <div className={`Header animate__fadeInDown ${visible ? "visible" : "hidden"}`}>
            <div className="Header-Logo-Container">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="Header-Link">
                <div className="Nav-Links">
                    {links.map(({ label, href }) => (
                        <div key={href}>
                            <a href={href}>{label}</a>
                        </div>
                    ))}
                </div>

                {showAuthButtons && (
                    <div className="Header-Auth">
                        <a href="/login" className="auth-btn login">Login</a>
                        {/*<a href="#signup" className="auth-btn signup">Sign Up</a>*/}
                    </div>
                )}
            </div>

        </div>
    );
}


export default Header;
