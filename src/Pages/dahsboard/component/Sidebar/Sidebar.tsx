import "./Sidebar.css";
import { LayoutDashboard } from "lucide-react";

export interface SidebarProps {
    profile?: {
        name?: string;
        email?: string;
        picture?: string;
    };
}

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <a href="#" className="sidebar-link">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                </a>
                {/*<a href="#" className="sidebar-link">*/}
                {/*    <User />*/}
                {/*    <span>Profile</span>*/}
                {/*</a>*/}
            </nav>
        </aside>
    );
};

export default Sidebar;
