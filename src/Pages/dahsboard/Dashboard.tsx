import "./dashboard.css"
import Header from "./component/Header/Header.tsx";
import Sidebar from "./component/Sidebar/Sidebar.tsx";
import Banner from "./component/Banner/Banner.tsx";
import YourApps from "./component/YourApps/YourApps.tsx";
import Settings from "./component/Settings/Settings.tsx";
import 'animate.css';
import {useEffect, useState} from "react";
import Loading from "./component/Loading/Loading.tsx";

const Dashboard = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState<any>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        // Read token from HTTP-only cookie via backend API
        fetch("http://localhost:3000/api/auth/token")
            .then(res => res.json())
            .then(({ token }) => {
                if (!token) {
                    setIsLoading(false);
                    return;
                }
                // Fetch Google profile
                fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
                    headers: { Authorization: `Bearer ${token}` }
                })
                    .then(res => res.json())
                    .then(data => {
                        setProfile(data);
                        setIsLoading(false);
                    })
                    .catch(() => setIsLoading(false));
            })
            .catch(() => setIsLoading(false));

    }, []);

    if (isLoading) return <Loading isLoading={true} />;

    // Pass profile to all components
    return(
        <div className={`dashboard dashboard--${theme}`}>
            <div className="animate__animated animate__fadeInDown">
                <Header
                    onSettingsClick={() => setIsSettingsOpen(true)}
                    profile={profile}
                    onSidebarToggle={() => setIsSidebarOpen((prev) => !prev)}
                    theme={theme}
                    onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
            </div>
            <div className="content">
                {isSidebarOpen ? (
                    <div className="animate__animated animate__fadeInLeft animate__faster">
                        <Sidebar/>
                    </div>
                ) : (
                    <div className="animate__animated animate__fadeOutLeft animate__faster">
                        <Sidebar/>
                    </div>
                )}
                <div className={`main-content${isSidebarOpen ? " main-content--sidebar" : " main-content--full"}`}>
                    <div className="animate__animated animate__fadeInUp animate__delay-2s">
                        <Banner profile={profile} />
                    </div>
                    <div className="animate__animated animate__fadeInUp animate__delay-3s">
                        <YourApps/>
                    </div>
                    <Settings
                        isOpen={isSettingsOpen}
                        onClose={() => setIsSettingsOpen(false)}
                    />
                </div>
            </div>
        </div>
    )
}


export default Dashboard