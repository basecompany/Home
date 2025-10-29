import "./Header.css"
import {
    PanelLeftDashed,
    Settings, User, Sun, Moon
} from "lucide-react";
import type {T_Profile} from "../../Dashboard.tsx";

export interface HeaderProps {
    onSettingsClick(): void;
    profile: T_Profile|null;
    onSidebarToggle(): void;
    theme: "dark" | "light";
    onThemeToggle(): void;
}

const Header = (props: HeaderProps) => {
    const { profile, onSidebarToggle, theme, onThemeToggle } = props;
    return(
        <div className="header">
            <div className="left-sidebar">
                <div className="sidebar_toggle" onClick={onSidebarToggle}>
                    <PanelLeftDashed/>
                </div>
            </div>
            <div className="right-sidebar">
                <div className="theme_toggle" onClick={onThemeToggle}>
                    {theme === "dark" ? <Sun /> : <Moon />}
                </div>
                <div className="setting_toggle">
                    <Settings
                        onClick={props.onSettingsClick}
                    />
                </div>
                <div className="header_account">
                    {profile?.picture ? (
                        <img src={profile.picture} alt={profile.name} className="header_avatar" />
                    ) : (
                        <User/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header