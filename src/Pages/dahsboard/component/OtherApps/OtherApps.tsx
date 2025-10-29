import { useState } from 'react';
import './OtherApps.css';

export interface YourAppsProps {
    profile?: {
        name?: string;
        email?: string;
        picture?: string;
    };
}


export default function OtherApps() {

    const [apps, setApps] = useState([
        {
            id: 1,
            name: 'Schola',
            icon: "https://media.discordapp.net/attachments/1367550083817537648/1367552881598922845/ChatGPT_Image_May_1_2025_06_25_29_PM.png?ex=68d2d85e&is=68d186de&hm=97dbd470a60025347f9837a8d582b8a771507bcfb901a9053629280c9c5131c9&=&format=webp&quality=lossless&width=963&height=963"
        },
    ]);



    return (
        <section className="other-apps">
            <h2 className="other-apps__title">Other Apps</h2>
            <ul className="other-apps__grid">
                {apps.map(app => (
                    <li key={app.id} className="app-card">
                        <div className="app-card-title">
                            <div className="app-card__icon"><img src={app.icon}/></div>
                        </div>
                        <div className="app-card-body">
                            <h1>{app.name}</h1>
                            <p>Education for everyone</p>
                            <a href={"http://localhost:5175/dashboard"}> + add</a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
