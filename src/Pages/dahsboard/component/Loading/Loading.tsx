import React from "react";
import "./Loading.css";

interface LoadingProps {
    isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
    if (!isLoading) return null;
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner" />
        </div>
    );
};

export default Loading;