import React, { useState } from 'react';
import '../css/Certificates.css';
import {
    FaCertificate,
    FaAward,
    FaCalendarAlt,
    FaBuilding,
    FaExternalLinkAlt,
    FaTimes,
    FaSearch
} from "react-icons/fa";
import { certificates, categories } from '../config/sertificates'

function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    const filteredCertificates = certificates.filter(cert => {
        const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || cert.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    const openModal = (cert) => {
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="certificates-page page">
            <div className="certificates-container">
                <section className="certificates-header">
                    <h1 className="certificates-title">
                        Sertifikalarım
                    </h1>
                    <p className="certificates-subtitle">
                        Eğitim ve gelişim yolculuğumda elde ettiğim sertifikalar
                    </p>
                </section>
                <section className="filters-section">
                    <div className="search-box">
                        <FaSearch />
                        <input
                            type="text"
                            placeholder="Sertifika ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="category-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                className={`filter-btn ${filterCategory === cat.value ? 'active' : ''}`}
                                onClick={() => setFilterCategory(cat.value)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </section>

                <div className="certificates-count">
                    <FaAward />
                    <span>{filteredCertificates.length} sertifika bulundu</span>
                </div>

                <section className="certificates-grid">
                    {filteredCertificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="certificate-card"
                            onClick={() => openModal(cert)}
                        >
                            <div className="cert-image-wrapper">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="cert-image"
                                />
                                <div className="cert-overlay">
                                    <FaSearch className="zoom-icon" />
                                    <span>Detayları Gör</span>
                                </div>
                            </div>
                            <div className="cert-content">
                                <span className="cert-category">{cert.category}</span>
                                <h3 className="cert-title">{cert.title}</h3>
                                <div className="cert-info">
                                    <div className="cert-info-item">
                                        <FaBuilding />
                                        <span>{cert.issuer}</span>
                                    </div>
                                    <div className="cert-info-item">
                                        <FaCalendarAlt />
                                        <span>{cert.date}</span>
                                    </div>
                                </div>
                                <div className="cert-skills">
                                    {cert.skills.map((skill, idx) => (
                                        <span key={idx} className="skill-badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>

            {selectedCert && (
                <div className="cert-modal-overlay" onClick={closeModal}>
                    <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <div className="modal-content">
                            <div className="modal-image">
                                <img src={selectedCert.image} alt={selectedCert.title} />
                            </div>3
                            <div className="modal-info">
                                <span className="modal-category">{selectedCert.category}</span>
                                <h2 className="modal-title">{selectedCert.title}</h2>
                                <div className="modal-details">
                                    <div className="detail-item">
                                        <FaBuilding />
                                        <div>
                                            <span className="detail-label">Kurum</span>
                                            <span className="detail-value">{selectedCert.issuer}</span>
                                        </div>
                                    </div>
                                    <div className="detail-item">
                                        <FaCalendarAlt />
                                        <div>
                                            <span className="detail-label">Tarih</span>
                                            <span className="detail-value">{selectedCert.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-skills">
                                    <h4>Kazanılan Beceriler</h4>
                                    <div className="skills-list">
                                        {selectedCert.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Certificates;