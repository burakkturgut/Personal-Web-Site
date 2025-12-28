import "../css/Home.css";
import profilImage from '../assets/images/burak.jpg';
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('next-section');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <div className="home page">
            <div className="container" >
                <span className="availability">
                    ● Çalışmaya açığım
                </span>
                <section className="hero">
                    <div className="scroll-indicator" onClick={scrollToNextSection}>
                        ↓
                    </div>
                    <div className="hero-left">
                        <h1>Burak Turgut</h1>

                        <h2>Bilgisayar Mühendisi</h2>

                        <p>
                            React, TypeScript ve temiz mimari prensiplerini kullanarak modern, ölçeklenebilir ve kullanıcı odaklı web uygulamaları geliştiriyorum; aynı zamanda yapay zekâ ve makine öğrenmesi alanlarında projeler üretiyorum.
                        </p>

                        <div className="hero-buttons">
                            <button onClick={() => navigate("/projects")} className="primary">Projeleri Görüntüle</button>
                            <button onClick={() => navigate("/contact")} className="secondary">İletişime Geç</button>
                        </div>
                    </div>

                    <div className="hero-right">
                        <img
                            src={profilImage}
                            alt="Burak Turgut"
                            className="profile-image"
                        />
                    </div>
                </section>
                <section id="next-section" className="about-preview">
                    <div className="about-text">
                        <h3>Hakkımda</h3>

                        <p>
                            Teknolojiyle iç içe çalışıyorum, modern ve ölçeklenebilir projeler üretiyorum; frontend,backend, yapay zekâ ve yeni teknolojilere açık bir Bilgisayar Mühendisliği mezunu.
                        </p>

                        <button onClick={() => navigate("/about")} className="link-button">
                            Daha fazlası →
                        </button>
                    </div>
                    <div className="about-highlights">
                        <div className="highlight-item">
                            <span>Bilgisayar Mühendisi</span>
                        </div>
                    </div>

                </section>
                <section className="featured-projects">
                    <h3>Projelerim</h3>

                    <div className="projects-grid">
                        <div className="project-card">
                            <h4>E-Commerce Web Application</h4>
                            <p>
                                React, TypeScript, Redux Toolkit ve temiz mimari prensipleri kullanılarak geliştirilmiş modern bir e-ticaret uygulaması.
                            </p>
                            <span>• React  • TypeScript • Redux</span>
                        </div>

                        <div className="project-card">
                            <h4>Beyin Tümör Tespiti</h4>
                            <p>
                                MRI görüntüleriyle CNN tabanlı tümör sınıflandırma modeli tasarladım, görüntü işleme teknikleriyle doğruluğu artırdım ve Python/TensorFlow ile yüksek doğruluklu tahmin sistemi geliştirdim.
                            </p>
                            <span>• Python • TensorFlow • CNN • Görüntü İşleme</span>
                        </div>

                        <div className="project-card">
                            <h4>Gayrimenkul Fiyat Tahmini</h4>
                            <p>
                                Regresyon modelleri (Linear, Random Forest, Gradient Boosting) kullanarak gayrimenkul fiyat tahmin sistemi geliştirdim; verileri işleyip model performansını MAE, MSE ve R² ile ölçerek en iyi sonucu seçtim.
                            </p>
                            <span>• Python • Makine Öğrenmesi • Regresyon • Veri Analizi</span>
                        </div>
                    </div>

                    <button onClick={() => navigate("/projects")} className="link-button">
                        Tüm Projeleri Gör →
                    </button>
                </section>

            </div >
        </div >
    );
}

export default Home;
