import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from "../config/ScroolToTop";
function MainLayout() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main style={{ minHeight: "80vh" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout