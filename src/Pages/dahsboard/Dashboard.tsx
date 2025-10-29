import "./dashboard.css"
import Header from "./component/Header/Header.tsx";
import Sidebar from "./component/Sidebar/Sidebar.tsx";
import Banner from "./component/Banner/Banner.tsx";
import YourApps from "./component/YourApps/YourApps.tsx";
import Settings from "./component/Settings/Settings.tsx";
import 'animate.css';
import {useEffect, useState} from "react";
import Loading from "./component/Loading/Loading.tsx";
import {useDashboardSecurityVerification} from "../../hooks/useDashboardSecurityVerification.ts";
import {toast} from "react-toastify";


export type T_Profile ={

    "id":string,
    "email": string,
    "verified_email": boolean,
    "name": string,
    "given_name": string,
    "family_name": string,
    "picture": string

}

const Dashboard = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState<T_Profile|null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [isSecure, setIsSecure] = useState<boolean>(false);


    const {fetchTokenWithCookie, fetchGoogleAccount} = useDashboardSecurityVerification();




    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get the token
                const token = await fetchTokenWithCookie();
                if (!token) {
                    setIsSecure(false);
                    setIsLoading(false);
                    toast.error("Error in authentication, please login again");


                    return;
                }

                setIsSecure(true);

                // Fetch the Google account data
                const data = await fetchGoogleAccount(token);
                localStorage.setItem('data', JSON.stringify(data));
                setProfile(data);
            } catch (error) {
                setIsSecure(false);
                toast.error("Failed to fetch account data");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    if (isLoading) return <Loading isLoading={true} />;


    // Pass profile to all components
    if(isSecure)
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




