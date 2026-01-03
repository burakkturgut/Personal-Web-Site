import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

export const contactInfo = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        value: "burak.turgut.dev@gmail.com",
        link: "mailto:burak.turgut.dev@gmail.com",
        color: "#2563eb"
    },
    {
        icon: <FaPhone />,
        title: "Telefon",
        value: "+90 546 221 23 02",
        link: "tel:+905xxxxxxxxx",
        color: "#10b981"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Konum",
        value: "Antalya, Türkiye",
        link: "#",
        color: "#ef4444"
    }
];

export const socialLinks = [
    {
        icon: <FaLinkedin />,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/burakkturgut",
        color: "#0077b5"
    },
    {
        icon: <FaGithub />,
        name: "GitHub",
        url: "https://github.com/burakkturgut",
        color: "#333"
    }
];