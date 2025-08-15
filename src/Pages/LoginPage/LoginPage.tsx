import './LoginPage.css';
import {Chrome } from 'lucide-react';

const LoginPage = () => {
    const handleSSOLogin = () => {
        console.log(import.meta.env.VITE_API_URL)
        window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
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
                        onClick={() => handleSSOLogin()}
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
