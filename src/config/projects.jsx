import {
    SiReact,
    SiTypescript,
    SiRedux,
    SiPython,
    SiTensorflow,
    SiFolium,
    SiJavascript,
    SiCss3,
    SiOpencv,
    SiFlask,
    SiScikitlearn,
    SiPandas,
} from "react-icons/si";
import braintümor from '../assets/images/BrainTümor.jpg'
import personelWebSite from '../assets/images/kişisel_web_site.png'
import e_commerce_web_site from '../assets/images/e-commerce_web_site.png'
import real_estate_price from '../assets/images/real_estate_price.png'
import todo from '../assets/images/todo.png'
import exchange from '../assets/images/exchange.png'
import iha from '../assets/images/iha.png'


export const projects = [
    {
        id: 1,
        title: "E-Commerce Web Application",
        description: "React ve TypeScript kullanılarak geliştirdiğim ölçeklenebilir bir e-ticaret web uygulaması. Redux Toolkit ile global state yönetimi sağladım. Ürün listeleme, filtreleme ve sepet yönetimi modülleri geliştirdim. Temiz mimari prensipleri uygulanarak sürdürülebilir ve okunabilir bir frontend yapısı oluşturdum.",
        image: e_commerce_web_site,
        category: "Frontend",
        technologies: [
            { name: "React", icon: <SiReact />, color: "#61DAFB" },
            { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
            { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        ],
        github: "https://github.com/burakkturgut/E-Commerce-Web-Site",
        demo: false,
        featured: true,
        date: "2025"
    },
    {
        id: 2,
        title: "Personal Portfolio Website",
        description: "React kullanılarak geliştirdiğim kişisel portföy web sitesi. Modern UI/UX prensipleri doğrultusunda responsive tasarım uyguladım. Smooth animasyonlar ve EmailJS entegrasyonu ile kullanıcı etkileşimi artırmayı hedefledim. Bileşen tabanlı mimari kullanılarak performans ve okunabilirlik ön planda tuttum.",
        image: personelWebSite,
        category: "Frontend",
        technologies: [
            { name: "React", icon: <SiReact />, color: "#61DAFB" },
            { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
            { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" }
        ],
        github: "https://github.com/burakkturgut/Personal-Web-Site",
        demo: null,
        featured: true,
        date: "2025"
    },
    {
        id: 3,
        title: "İHA Kontrol Arayüzü (PyQt5)",
        description: "İnsansız hava aracı için Python ve PyQt5 kullanılarak geliştirdiğim masaüstü kontrol arayüzü. Gerçek zamanlı telemetri verilerinin izlenmesi, manuel kontrol ve harita tabanlı konum takibi sağlanması, OpenCV ile görüntü işleme entegrasyonu ve Flask ile servis tabanlı veri iletişimi gerçekleştirdim.",
        image: iha,
        category: "Otonom Sistem",
        technologies: [
            { name: "Python", icon: <SiPython />, color: "#3776AB" },
            { name: "OpenCV", icon: <SiOpencv />, color: "#A42256" },
            { name: "Flask", icon: <SiFlask />, color: "#000000" },
            { name: "Folium", icon: <SiFolium />, color: "#00FF00" }
        ],
        github: "https://github.com/burakkturgut/iha-kontrol-arayuzu-pyqt5",
        demo: null,
        featured: true,
        date: "2025"
    },
    {
        id: 4,
        title: "Real Estate Price Prediction",
        description: "Python ve Scikit-learn kullanılarak geliştirdiğim gayrimenkul fiyat tahmin sistemi. Veri ön işleme ve feature engineering adımlarını uyguladım. Linear Regression, Random Forest ve Gradient Boosting modelleri MAE, MSE ve R² metrikleri ile karşılaştırılarak en iyi performans gösteren model belirledim.",
        image: real_estate_price,
        category: "AI & ML",
        technologies: [
            { name: "Python", icon: <SiPython />, color: "#3776AB" },
            { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
            { name: "Pandas", icon: <SiPandas />, color: "#150458" }
        ],
        github: "https://github.com/burakkturgut/Real-Estate-Price-Prediction",
        demo: null,
        featured: false,
        date: "2025"
    },
    {
        id: 5,
        title: "To-Do List Application",
        description: "React kullanılarak geliştirilen yapılacaklar listesi uygulaması. Görev ekleme, silme ve tamamlama işlemleri destekler. Component tabanlı mimari ile state yönetimi sağladım ve sade, kullanıcı dostu bir arayüz tasarladım.",
        image: todo,
        category: "Frontend",
        technologies: [
            { name: "React", icon: <SiReact />, color: "#61DAFB" },
            { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
            { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" }
        ],
        github: "https://github.com/burakkturgut/Todo.app",
        demo: null,
        featured: false,
        date: "2025"
    },
    {
        id: 6,
        title: "Brain Tumor Detection",
        description: "MRI görüntüleri üzerinde çalışan CNN tabanlı beyin tümörü sınıflandırma modeli geliştirdim. Python ve TensorFlow kullanılarak derin öğrenme modeli eğittim. Görüntü ön işleme teknikleri ile model doğruluğu artırdım. Medikal görüntü analizi alanında uygulamalı bir yapay zeka projesi gerçekleştirdim.",
        image: braintümor,
        category: "AI & ML",
        technologies: [
            { name: "Python", icon: <SiPython />, color: "#3776AB" },
            { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" }
        ],
        github: "https://github.com/burakkturgut/BrainTumorDetection",
        demo: null,
        featured: false,
        date: "2025"
    },
    {
        id: 7,
        title: "Exchange App",
        description: "React kullanılarak geliştirilen döviz ve kur takip uygulaması. Güncel kur verilerinin listelenmesi sağladım. Component tabanlı yapı ve kullanıcı dostu arayüz ile modern bir frontend deneyimi sundum.",
        image: exchange,
        category: "Frontend",
        technologies: [
            { name: "React", icon: <SiReact />, color: "#61DAFB" },
            { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
            { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" }
        ],
        github: "https://github.com/burakkturgut/exchange.app",
        demo: null,
        featured: false,
        date: "2025"
    }
];