import '../css/About.css';
import '../css/Home.css';
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
    SiPostgresql,
    SiOpenai,
    SiGit,
    SiGithub,
    SiPostman,
    SiGooglegemini
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { RiClaudeFill } from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { timeline } from '../config/timeline';
import { useEffect, useState } from "react";
import Image1 from '../assets/images/burak_siha.jpeg';
import Image2 from '../assets/images/burak_mezuniyet.jpeg';
import Image3 from '../assets/images/burak_siha2.jpeg';
import Image4 from '../assets/images/burak_mezuniyet2.jpeg';
import Image5 from '../assets/images/burak_siha_yapım.jpeg';


const images = [Image1, Image2, Image3, Image4, Image5];

function About() {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-page page">
            <div className="about-container">

                <section className="about-hero-with-photo">
                    <div className="hero-content">
                        <h1 className="about-title">
                            Merhaba, Ben <span className="gradient-text">Burak Turgut</span>
                        </h1>
                        <p className="about-intro">
                            Bilgisayar Mühendisliği mezunuyum ve teknolojiyi hayatı kolaylaştıran çözümler üretmek için kullanmayı seviyorum.
                            Yapay zekâ, görüntü işleme ve otonom sistemler üzerine projeler geliştirirken; problem çözme, sistem tasarımı ve performans odaklı düşünmeyi ön planda tutuyorum.
                            Akademik ve yarışma projelerinde edindiğim deneyimlerle, modern web teknolojileri özellikle React  kullanarak kullanıcı deneyimini merkeze alan, hızlı, ölçeklenebilir ve sürdürülebilir uygulamalar geliştiriyorum. Frontend ve backend bileşenlerini bütüncül bir yaklaşımla ele alan, sürekli öğrenmeye açık ve disiplinler arası çalışmalardan beslenen bir mühendis olarak, geliştirdiğim projelerle gerçek dünyada değer üretmeyi hedefliyorum.
                        </p>
                        <p className="about-quote">
                            "Kod yazmak sadece problem çözmek değil, geleceği şekillendirmektir."
                        </p>
                    </div>
                    <div className="hero-image">
                        <div className="image-wrapper">
                            <img
                                src={images[currentImage]}
                                alt="Burak Turgut"
                                className="about-profile-image fade-image"
                            />
                        </div>
                    </div>
                </section>

                <section className="about-timeline">
                    <h2 className="section-title">Yolculuğum</h2>
                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-line"></div>
                                <div
                                    className="timeline-dot"
                                    style={{ background: item.color }}
                                >
                                    {item.icon}
                                </div>
                                <div className="timeline-content">
                                    <span className="timeline-date">{item.date}</span>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <span className="timeline-subtitle">{item.subtitle}</span>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
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

                <section className="about-cta">
                    <div className="cta-card">
                        <h2>Birlikte Çalışalım</h2>
                        <p>Projeleriniz için modern çözümler üretelim</p>
                        <a href="/contact" className="cta-button">
                            İletişime Geç
                            <span className="arrow">→</span>
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default About;