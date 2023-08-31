import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";

export default function Navigation() {

    return (
        <Router>
            <Header />
                <Routes>
                    <Route path="" element={<Home />}/>
                    <Route path="our-works" element={<OurWork />} />
                </Routes>
            <Outlet />
            <Footer />
        </Router>
    );
}