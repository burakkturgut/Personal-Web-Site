import '../css/About.css';
import { timeline, jobtimeline } from '../config/timeline';
import { useEffect, useState } from "react";
import Image1 from '../assets/images/burak_siha.jpeg';
import Image2 from '../assets/images/burak_mezuniyet.jpeg';
import Image3 from '../assets/images/burak_siha2.jpeg';
import Image4 from '../assets/images/burak_mezuniyet2.jpeg';
import Image5 from '../assets/images/burak_siha_yapım.jpeg';
import Skills from "../components/skills";

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
                            Merhaba, Ben Burak Turgut
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
                <section className="about-timeline">
                    <h2 className="section-title">İş Deneyimlerim</h2>
                    <div className="timeline">
                        {jobtimeline.map((item, index) => (
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
                <Skills />
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