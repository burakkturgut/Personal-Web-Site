import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll detection - navbar'ı sayfa aşağı kaydırıldığında daha belirgin yaptım.
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    <span className="logo-text">Burak Turgut</span>
                    <span className="logo-dot">.</span>
                </NavLink>
                <div className="nav-links">
                    <NavLink to="/" end className="nav-link">
                        Ana Sayfa
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        Hakkımda
                    </NavLink>
                    <NavLink to="/education" className="nav-link">
                        Eğitim
                    </NavLink>
                    <NavLink to="/projects" className="nav-link">
                        Projeler
                    </NavLink>
                    <NavLink to="/certificates" className="nav-link">
                        Sertifikalar
                    </NavLink>
                    <NavLink to="/contact" className="nav-link nav-link-cta">
                        İletişim
                    </NavLink>
                </div>

                <div
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </div>
            </div>

            <div
                className={`mobile-menu ${menuOpen ? "show" : ""}`}
                onClick={closeMenu}
            >
                <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                    <NavLink to="/" end onClick={closeMenu}>
                        Ana Sayfa
                    </NavLink>
                    <NavLink to="/about" onClick={closeMenu}>
                        Hakkımda
                    </NavLink>
                    <NavLink to="/education" onClick={closeMenu}>
                        Eğitim
                    </NavLink>
                    <NavLink to="/projects" onClick={closeMenu}>
                        Projeler
                    </NavLink>
                    <NavLink to="/certificates" onClick={closeMenu}>
                        Sertifikalar
                    </NavLink>
                    <NavLink to="/contact" onClick={closeMenu}>
                        İletişim
                    </NavLink>
                </div>
            </div>

            {menuOpen && <div className="menu-overlay" onClick={closeMenu} />}
        </nav>
    );
};

export default Navbar;