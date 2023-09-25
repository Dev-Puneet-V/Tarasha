import { HashRouter as Router, Route, Routes, Outlet } from "react-router-dom";
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
                    <Route path="our-works" key="our-works" children={<OurWork />} element={<OurWork />} />
                    <Route path="packages" key={"packages"} children={<Packages />} element={<Packages />} />
                    <Route path="services" key="services"  children={<Services />} element={<Services />} />
                    <Route path="questionare" key="questionare" children={<Questionare />} element={<Questionare />} />
                    <Route path="dashboard" key="dashboard" children={<DashboardUser />} element={<DashboardUser />} />
                    <Route path="save-payment" key="save-payment" children={<SavePayment />} element={<SavePayment />} />
                    <Route path="blog" key="blog" children={<Blog />} element={<Blog />} />
                    <Route path="blog/:id" key="blog/:id" children={<MainBlog />} element={<MainBlog />} />
                </Routes>
            <Outlet />
            <Footer />
        </Router>
    );
}