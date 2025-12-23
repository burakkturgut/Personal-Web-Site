import "../css/Home.css";
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiRedux,
    SiHtml5,
    SiCss3,
    SiGithubcopilot,
    SiPython,
    SiDjango,
    SiFlask,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiJupyter,
    SiSqlite,
    SiPostgresql,
    SiMysql,
    SiOpenai,
    SiSelenium,
    SiGit,
    SiGithub,
    SiPostman,
    SiJira,
    SiGooglegemini
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { RiClaudeFill } from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import profilImage from '../assets/images/burak.jpg';
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('next-section');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <div className="home">
            <div className="container">
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
                            🎓
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
                <section className="skills">
                    <h3>Kullandığım Teknolojiler</h3>

                    <div className="skills-category">
                        <h4>Backend & Data Science</h4>
                        <div className="skills-grid">
                            <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiPython />
                                    <span>Python</span>
                                </div>
                            </a>
                            <a href="https://www.djangoproject.com" target="_blank" rel="noopener noreferrer" >
                                <div className="skill-item">
                                    <SiDjango />
                                    <span>Django</span>
                                </div>
                            </a>
                            <a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer" >
                                <div className="skill-item">
                                    <SiFlask />
                                    <span>Flask</span>
                                </div>
                            </a>
                            <a href="https://pandas.pydata.org" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiPandas />
                                    <span>Pandas</span>
                                </div>
                            </a>
                            <a href="https://numpy.org" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiNumpy />
                                    <span>NumPy</span>
                                </div>
                            </a>
                            <a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiScikitlearn />
                                    <span>Scikit-learn</span>
                                </div>
                            </a>
                            <a href="https://jupyter.org" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiJupyter />
                                    <span>Jupyter</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h4>Frontend Development</h4>
                        <div className="skills-grid">
                            <a href="https://tr.react.dev" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiReact />
                                    <span>React</span>
                                </div>
                            </a>
                            <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiTypescript />
                                    <span>TypeScript</span>
                                </div>
                            </a>
                            <a href="https://www.w3schools.com/Js/" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiJavascript />
                                    <span>JavaScript</span>
                                </div>
                            </a>
                            <a href="https://redux.js.org" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiRedux />
                                    <span>Redux</span>
                                </div>
                            </a>
                            <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiHtml5 />
                                    <span>HTML5</span>
                                </div>
                            </a>
                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiCss3 />
                                    <span>CSS3</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h4>Veritabanı ve Depolama</h4>
                        <div className="skills-grid">
                            <a href="https://www.microsoft.com/tr-tr/sql-server/sql-server-2022" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <DiMsqlServer />
                                    <span>MsSQL</span>
                                </div>
                            </a>
                            <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiPostgresql />
                                    <span>PostgreSQL</span>
                                </div>
                            </a>
                            <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <TbSql />
                                    <span>SQL</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h4>Yapay Zeka ve Otomasyon</h4>
                        <div className="skills-grid">
                            <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiOpenai />
                                    <span>ChatGPT</span>
                                </div>
                            </a>
                            <a href="https://claude.ai/new" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <RiClaudeFill />
                                    <span>Claude AI</span>
                                </div>
                            </a>
                            <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiGooglegemini />
                                    <span>Gemini</span>
                                </div>
                            </a>
                            <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiGithubcopilot />
                                    <span>GitHub Copilot</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h4>Tools & Version Control</h4>
                        <div className="skills-grid">
                            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiGit />
                                    <span>Git</span>
                                </div>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiGithub />
                                    <span>GitHub</span>
                                </div>
                            </a>
                            <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <SiPostman />
                                    <span>Postman</span>
                                </div>
                            </a>
                            <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
                                <div className="skill-item">
                                    <VscVscode />
                                    <span>VS Code</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
}

export default Home;
