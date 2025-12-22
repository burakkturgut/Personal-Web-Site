import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from "../pages/Home";
import About from "../pages/About";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";

function AppRouter() {
    //  Burada bir mainlayoutun icinde tüm yönledirmemi yapma sebebeim mainlayout kısmını ker sayfada navbar içerik footer şeklinde göstermek istiyorum ondan.
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default AppRouter


