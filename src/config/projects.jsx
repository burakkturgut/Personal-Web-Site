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
        description: "React, TypeScript, Redux Toolkit ve temiz mimari prensipleri kullanılarak geliştirilmiş modern bir e-ticaret uygulaması. Kullanıcı dostu arayüz, sepet yönetimi, ürün filtreleme ve responsive tasarım özellikleri içerir.",
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
        description: "React ve modern web teknolojileri kullanarak oluşturduğum kişisel portfolio websitesi. Responsive tasarım, smooth animasyonlar, EmailJS entegrasyonu ve kullanıcı dostu arayüz ile projelerimi ve becerilerimi sergiliyor.",
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
        description: "İnsansız hava aracı için geliştirilen Python tabanlı masaüstü kontrol arayüzü. Gerçek zamanlı veri takibi ve manuel kontrol sağlar.",
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
        description: "Regresyon modelleri (Linear Regression, Random Forest, Gradient Boosting) kullanarak gayrimenkul fiyat tahmin sistemi. Verileri işleyip model performansını MAE, MSE ve R² metrikleri ile ölçerek en iyi sonucu seçtim.",
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
        description: "React kullanılarak geliştirilen modern yapılacaklar listesi uygulaması. Görev ekleme, silme ve tamamlama işlemlerini destekler. Bileşen tabanlı mimari ile state yönetimi sağlanmış, sade ve kullanıcı dostu bir arayüz sunulmuştur.",
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
        description: "MRI görüntüleriyle CNN tabanlı beyin tümörü sınıflandırma modeli. Görüntü işleme teknikleriyle doğruluğu artırdım ve Python/TensorFlow ile yüksek doğruluklu tahmin sistemi geliştirdim. Derin öğrenme ve medikal görüntü analizi projesi.",
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
        description: "React kullanılarak geliştirilmiş döviz / kur takip uygulaması. Güncel kurların listelenmesi, kullanıcı dostu arayüz ve component tabanlı mimari ile modern bir frontend deneyimi sunar.",
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