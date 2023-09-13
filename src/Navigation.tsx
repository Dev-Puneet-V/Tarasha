import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import Packages from "./pages/Packages";
import Services from "./pages/Services";
import Questionare from "./pages/Questionare";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import ScrollToTop from "./ScrollToTop";

export default function Navigation() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
                <Routes>
                    <Route path="" element={<Home />}/>
                    <Route path="our-works" element={<OurWork />} />
                    <Route path="packages" element={<Packages />} />
                    <Route path="services" element={<Services />} />
                    <Route path="questionare" element={<Questionare />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="blog" element={<Blog />} />
                </Routes>
            <Outlet />
            <Footer />
        </Router>
    );
}