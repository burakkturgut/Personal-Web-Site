import React, { useState } from 'react';
import '../css/Contact.css';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    FaEnvelope,
    FaPaperPlane,
    FaCheckCircle,
    FaUser,
    FaComments,
} from "react-icons/fa";
import { contactInfo, socialLinks } from '../config/contactInfo';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const EMAILJS_SERVICE_ID = '********';      // EmailJS'den aldığım Service ID
    const EMAILJS_TEMPLATE_ID = '********';    // EmailJS'den aldığım Template ID
    const EMAILJS_PUBLIC_KEY = '*******';      // EmailJS'den aldığım Public Key

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            },
            EMAILJS_PUBLIC_KEY
        )
            .then((response) => {
                console.log('✅ Email başarıyla gönderildi!', response.status, response.text);

                toast.success('✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch((error) => {
                console.error('❌ Email gönderilemedi:', error);

                toast.error('❌ Mesaj gönderilemedi! Lütfen daha sonra tekrar deneyin veya email ile iletişime geçin.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-page page">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="contact-container">
                <section className="contact-header">
                    <h1 className="contact-title">
                        Benimle İletişime Geçin
                    </h1>
                    <p className="contact-subtitle">
                        Projeleriniz, iş fırsatları veya herhangi bir konuda benimle iletişime geçebilirsiniz
                    </p>
                </section>

                <div className="contact-content">
                    <div className="contact-info-section">
                        <h2 className="section-title">İletişim Bilgileri</h2>
                        <div className="contact-info-grid">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="contact-info-card"
                                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                >
                                    <div
                                        className="info-icon"
                                        style={{ background: info.color }}
                                    >
                                        {info.icon}
                                    </div>
                                    <div className="info-content">
                                        <span className="info-title">{info.title}</span>
                                        <span className="info-value">{info.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="social-section">
                            <h3 className="social-title">Sosyal Medya</h3>
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        style={{ background: social.color }}
                                    >
                                        {social.icon}
                                        <span>{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="quick-info">
                            <div className="quick-info-item">
                                <FaCheckCircle />
                                <span>Genellikle 24 saat içinde yanıt veririm</span>
                            </div>
                            <div className="quick-info-item">
                                <FaCheckCircle />
                                <span>Freelance projelere açığım</span>
                            </div>
                            <div className="quick-info-item">
                                <FaCheckCircle />
                                <span>İş fırsatlarını değerlendiririm</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-section">
                        <h2 className="section-title">Mesaj Gönderin</h2>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <FaUser />
                                        Adınız
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Adınız ve soyadınız"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <FaEnvelope />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="ornek@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">
                                    <FaComments />
                                    Konu
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Mesajınızın konusu"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    <FaComments />
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Mesajınızı buraya yazın..."
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        Gönderiliyor...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Mesajı Gönder
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

