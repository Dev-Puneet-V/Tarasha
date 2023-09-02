import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import Packages from "./pages/Packages";
import Services from "./pages/Services";

export default function Navigation() {

    return (
        <Router>
            <Header />
                <Routes>
                    <Route path="" element={<Home />}/>
                    <Route path="our-works" element={<OurWork />} />
                    <Route path="packages" element={<Packages />} />
                    <Route path="services" element={<Services />} />
                </Routes>
            <Outlet />
            <Footer />
        </Router>
    );
}