import '../css/Education.css';
import { useState } from 'react';
import {
    FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp
} from "react-icons/fa";
import { educationData } from '../config/education'
import { courseCategories } from '../config/education'
import banü from '../assets/images/banü.jpg'

function Education() {
    const { degree, type, school, location, period, gna, description, academicFocus } = educationData

    const [openCategories, setOpenCategories] = useState([0]);

    const toggleCategory = (index) => {
        setOpenCategories(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const toggleAll = () => {
        if (openCategories.length === courseCategories.length) {
            setOpenCategories([]);
        } else {
            setOpenCategories(courseCategories.map((_, index) => index));
        }
    };

    return (
        <div className="education-page page">
            <div className="education-container">
                <section className="education-header">
                    <h1 className="education-title">
                        Akademik Yolculuğum
                    </h1>
                    <p className="education-subtitle">
                        Bilgisayar Mühendisliği eğitimim boyunca edindiğim bilgi ve deneyimler
                    </p>
                </section>

                <section className="education-main">
                    <div className="education-card-main">
                        <div className="edu-header">
                            <img src={banü} className="edu-icon" alt="Üniversite Logosu" />
                            <div className="edu-title-section">
                                <h2 className="edu-degree">{degree}</h2>
                                <span className="edu-type">{type}</span>
                            </div>
                        </div>

                        <div className="edu-details">
                            <div className="edu-info">
                                <div className="info-item">
                                    <FaUniversity />
                                    <a href='https://mdbf.bandirma.edu.tr/bil-muh' target='_blank' rel="noopener noreferrer">{school}</a>
                                </div>
                                <div className="info-item">
                                    <FaMapMarkerAlt />
                                    <span>{location}</span>
                                </div>
                                <div className="info-item">
                                    <FaCalendarAlt />
                                    <span>{period}</span>
                                </div>
                            </div>

                            <div className="edu-gna">
                                <div className="gna-label">GNA</div>
                                <div className="gna-value">{gna}</div>
                            </div>
                        </div>

                        <div className="edu-description-section">
                            <h3 className="description-title">
                                Eğitim Sürecim
                            </h3>
                            <p className="edu-description">{description}</p>
                            <p className="edu-description">{academicFocus}</p>
                        </div>
                    </div>
                </section>
                <section className="courses-section">
                    <div className="courses-header">
                        <div>
                            <h2 className="section-title">Aldığım Dersler</h2>
                            <p className="section-subtitle">
                                Eğitim hayatım boyunca aldığım dersler ve öğrendiğim konular
                            </p>
                        </div>
                        <button
                            className="toggle-all-btn"
                            onClick={toggleAll}
                        >
                            {openCategories.length === courseCategories.length ? 'Tümünü Kapat' : 'Tümünü Aç'}
                        </button>
                    </div>

                    <div className="courses-accordion">
                        {courseCategories.map((category, index) => {
                            const isOpen = openCategories.includes(index);
                            return (
                                <div
                                    key={index}
                                    className={`accordion-item ${isOpen ? 'open' : ''}`}
                                >
                                    <div
                                        className="accordion-header"
                                        onClick={() => toggleCategory(index)}
                                    >
                                        <div className="accordion-header-content">
                                            <div
                                                className="category-icon-small"
                                                style={{ background: category.color }}
                                            >
                                                {category.icon}
                                            </div>
                                            <div className="accordion-title-section">
                                                <h3 className="accordion-title">{category.category}</h3>
                                                <span className="course-count">
                                                    {category.courses.length} ders
                                                </span>
                                            </div>
                                        </div>
                                        <div className="accordion-toggle">
                                            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </div>

                                    <div className={`accordion-content ${isOpen ? 'show' : ''}`}>
                                        <div className="courses-list">
                                            {category.courses.map((course, idx) => (
                                                <div key={idx} className="course-item">
                                                    <div className="course-header">
                                                        <span className="course-bullet">•</span>
                                                        <h4 className="course-name">{course.name}</h4>
                                                    </div>
                                                    <p className="course-description">{course.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="education-cta">
                    <div className="cta-content">
                        <h2>Öğrendiklerimi Uygulamaya Geçiriyorum</h2>
                        <p>Eğitim sürecimde edindiğim bilgileri gerçek projelere dönüştürüyorum</p>
                        <div className="cta-buttons">
                            <a href="/projects" className="cta-btn primary">
                                Projelerimi İncele
                            </a>
                            <a href="/certificates" className="cta-btn secondary">
                                Sertifikalarım
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Education;