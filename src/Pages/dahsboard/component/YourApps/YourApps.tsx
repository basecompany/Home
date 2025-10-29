import { useState } from 'react';
import './YourApps.css';

export interface YourAppsProps {
    profile?: {
        name?: string;
        email?: string;
        picture?: string;
    };
}


export default function YourApps() {

    const [apps, setApps] = useState([
        {
            id: 1,
            name: 'Pecunia',
            icon: "https://media.discordapp.net/attachments/1359149188461494395/1419403265736708187/Logo.png?ex=68d1a1cd&is=68d0504d&hm=ce36569614b107b5f2d55f3b5f452b2c2c7980424af4f745c8eb5589b84c20eb&=&format=webp&quality=lossless"
        },
        {
            id: 2,
            name: 'Schola',
            icon: "https://media.discordapp.net/attachments/1367550083817537648/1367552881598922845/ChatGPT_Image_May_1_2025_06_25_29_PM.png?ex=68d2d85e&is=68d186de&hm=97dbd470a60025347f9837a8d582b8a771507bcfb901a9053629280c9c5131c9&=&format=webp&quality=lossless&width=963&height=963"
        },
    ]);



    const handlePecuniaAuth = async ()=>{

        if(!localStorage.getItem('data')) return;

        const res = await fetch(
            `${import.meta.env.VITE_API_URL}/generate/redirect-token`,
            {
                method: "POST",                // HTTP method
                headers: {
                    "Content-Type": "application/json"  // tell server you're sending JSON
                },
                body: localStorage.getItem('data')
            }
            );
        const json = await res.json();

        console.log(json.redirect)

        window.location.href = "http://localhost:5175/VerifyToken?token=" + json.redirect;
    }


    return (
        <section className="your-apps">
            <h2 className="your-apps__title">Your Apps</h2>
            <ul className="your-apps__grid">
                {apps.map(app => (
                    <li key={app.id} className="app-card">
                        <div className="app-card-title">
                            <div className="app-card__icon"><img src={app.icon}/></div>
                        </div>
                        <div className="app-card-body">
                            <h1>{app.name}</h1>
                            <p>Financial tracker for individuals</p>
                            <a onClick={handlePecuniaAuth}>open</a>
                            <a href={"http://localhost:5175"}>website</a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
