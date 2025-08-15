import './App.css'
import Portfolio from "./Pages/portfolio/Portfolio.tsx";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage.tsx";
import Landing from "./Pages/landing/Landing.tsx";
import Dashboard from "./Pages/dahsboard/Dashboard.tsx";

export const App = () => (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
);

