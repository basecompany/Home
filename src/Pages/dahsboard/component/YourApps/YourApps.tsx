import { useState } from 'react';
import './YourApps.css';

export interface YourAppsProps {
    profile?: {
        name?: string;
        email?: string;
        picture?: string;
    };
}

// Example icon placeholders; swap in your SVGs or React-Icons
const DefaultIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#ccc" />
    </svg>
);

export default function YourApps() {
    const [apps, setApps] = useState([
        { id: 1, name: 'Trello', icon: <DefaultIcon /> },
        // { id: 2, name: 'Account settings', icon: <DefaultIcon /> },
        // { id: 3, name: 'Atlassian Support', icon: <DefaultIcon /> },
        // { id: 4, name: 'Atlassian Community', icon: <DefaultIcon /> },
        // { id: 5, name: 'Self-managed licensing', icon: <DefaultIcon /> },
    ]);

    const addApp = () => {
        const name = prompt('Enter new app name:');
        if (!name?.trim()) return;
        setApps([
            ...apps,
            { id: Date.now(), name: name.trim(), icon: <DefaultIcon /> }
        ]);
    };

    return (
        <section className="your-apps">
            <h2 className="your-apps__title">Your Apps</h2>
            <ul className="your-apps__grid">
                {apps.map(app => (
                    <li key={app.id} className="app-card">
                        <div>
                            <div className="app-card__icon">{app.icon}</div>
                            <span className="app-card__label">{app.name}</span>
                        </div>
                    </li>
                ))}

                <li className="app-card app-card--add" onClick={addApp}>
                    <div>
                        <div className="app-card__icon">＋</div>
                        <span className="app-card__label">Add new app</span>
                    </div>
                </li>
            </ul>
        </section>
    );
}
