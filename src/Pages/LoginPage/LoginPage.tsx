import './LoginPage.css';
import { Github, Chrome } from 'lucide-react';

const LoginPage = () => {
    const handleSSOLogin = (provider: string) => {
        console.log(`Initiate ${provider} SSO`);
        // Replace with actual redirect logic
    };

    return (
        <div className="base-login-wrapper">
            <div className="base-login-bg" />
            <div className="base-login-card">
                <h1 className="base-login-title">Welcome to Base</h1>
                <p className="base-login-subtitle">
                    Sign in securely to manage your systems and simulations.
                </p>

                <div className="base-login-buttons">
                    <button
                        className="base-sso-button"
                        onClick={() => handleSSOLogin('GitHub')}
                    >
                        <Github size={18} />
                        <span>Sign in with GitHub</span>
                    </button>
                    <button
                        className="base-sso-button"
                        onClick={() => handleSSOLogin('Google')}
                    >
                        <Chrome size={18} />
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
