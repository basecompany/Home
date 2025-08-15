import "./Banner.css"

export interface BannerProps {
    profile?: {
        name?: string;
    };
}

export default function Banner({ profile }: BannerProps) {
    const date = new Date().toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    })

    return (
        <div className="banner">
            <div className="banner-content">
                <div>
                    <p className="banner-date">{date}</p>
                    <h1 className="banner-greeting">Bonjour {profile?.name || "Utilisateur"},</h1>
                </div>
            </div>
            <div className="banner-bg">
            </div>
        </div>
    )
}
