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
import MainBlog from "./pages/MainBlog";
import SavePayment from "./pages/SavePayment";
import DashboardUser from "./pages/DashboardUser";

export default function Navigation() {
    return (
        <Router basename="/">
            <ScrollToTop />
            <Header />
                <Routes>
                    <Route path="" element={<Home />}/>
                    <Route path="our-works" element={<OurWork />} />
                    <Route path="packages" element={<Packages />} />
                    <Route path="services" element={<Services />} />
                    <Route path="questionare" element={<Questionare />} />
                    <Route path="dashboard" element={<DashboardUser />} />
                    <Route path="save-payment" element={<SavePayment />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<MainBlog />} />
                </Routes>
            <Outlet />
            <Footer />
        </Router>
    );
}