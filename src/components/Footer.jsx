import "../css/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <p className="footer-name">Burak Turgut</p>
                        <p className="footer-role">Computer Engineer</p>
                        <p className="footer-tagline">
                            Teknolojiyle iç içe çalışıyorum, modern ve ölçeklenebilir projeler üretiyorum; frontend,backend, yapay zekâ ve yeni teknolojilere açık bir Bilgisayar Mühendisliği mezunu.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-heading">Hızlı Bağlantılar</h4>
                        <div className="footer-links">
                            <Link to="/">Ana Sayfa</Link>
                            <Link to="/about">Hakkımda</Link>
                            <Link to="/education">Eğitim</Link>
                            <Link to="/projects">Projeler</Link>
                            <Link to="/certificates">Sertifikalar</Link>
                            <Link to="/contact">İletişim</Link>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-heading">İletişim</h4>
                        <div className="footer-contact">
                            <a href="mailto:burak.turgut.dev@gmail.com" className="contact-item">
                                <FaEnvelope />
                                <span>burak.turgut.dev@gmial.com</span>
                            </a>
                        </div>
                        <h4 className="footer-heading footer-heading-social">Sosyal Medya</h4>
                        <div className="footer-social">
                            <a href="https://github.com/burakkturgut" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/burakkturgut" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/burak.trgutt" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://x.com/buraktturgut" target="_blank" rel="noopener noreferrer" aria-label="X">
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-bottom-content">
                        <p className="footer-copy">
                            © {currentYear} Burak Turgut. Tüm hakları saklıdır.
                        </p>
                    </div>
                </div>
            </div>
            <button
                className={`scroll-top ${showScrollTop ? "visible" : ""}`}
                onClick={scrollToTop}
                aria-label="Yukarı çık"
            >
                <FaArrowUp />
            </button>
        </footer>
    );
};

export default Footer;