import image1 from '../assets/sertifikalar/Sıfırdan İleri Seviye React Kursu_page-0001.jpg'
import image2 from '../assets/sertifikalar/Makine Öğrenmesi Başarı Sertifikası_page-0001.jpg'
import image3 from '../assets/sertifikalar/Derin Öğrenme ile Görüntü İşleme Başarı Sertifikası_page-0001.jpg'
import image4 from '../assets/sertifikalar/wiresarhk_page-0001.jpg'
import image5 from '../assets/sertifikalar/Burak_Turgut-Sertifika.jpg'
import image6 from '../assets/sertifikalar/GDSC Flutter.jpg'
import image7 from '../assets/sertifikalar/Sıfırdan İleri Düzey Web Geliştirme sertifika_page-0001.jpg'
import image8 from '../assets/sertifikalar/GoIT_FS_Webinar_Certificate_of_Completion_page-0001.jpg'
import image9 from '../assets/sertifikalar/Javascript_Temelleri_Sertifika_page-0001.jpg'
import image10 from '../assets/sertifikalar/siber güvenlik.jpeg'
import image11 from '../assets/sertifikalar/Siber Güvenlik.png'
import image12 from '../assets/sertifikalar/GenAI Garanti BBVA_page-0001.jpg'
import image13 from '../assets/sertifikalar/ChatGPT Kullanımı ve Prompt Mühendisliği Garanti BBVA_page-0001.jpg'
import image14 from '../assets/sertifikalar/Temel Makine Öğrenmesi Garanti BBVA_page-0001.jpg'


export const categories = [
    { value: 'all', label: 'Tümü' },
    { value: 'Frontend Development', label: 'Frontend' },
    { value: 'Web Development', label: 'Web Geliştirme' },
    { value: 'Full Stack Development', label: 'Full Stack' },
    { value: 'Artificial Intelligence', label: 'Yapay Zeka' },
    { value: 'Machine Learning', label: 'Makine Öğrenmesi' },
    { value: 'Computer Vision', label: 'Görüntü İşleme' },
    { value: 'Cyber Security', label: 'Siber Güvenlik' },
    { value: 'Networking', label: 'Ağ & Networking' },
    { value: 'Mobile Development', label: 'Mobil Geliştirme' },
    { value: 'IT & Internship', label: 'IT & Staj' }
];


export const certificates = [
    {
        id: 1,
        title: "Sıfırdan İleri Seviye React Kursu",
        issuer: "Udemy",
        date: "Aralık 2025",
        category: "Frontend Development",
        image: image1,
        skills: ["React", "Hook Kullanımı", "Redux", "JavaScript"]
    },
    {
        id: 12,
        title: "GenAI",
        issuer: "Garanti BBVA",
        date: "Aralık 2025",
        category: "Artificial Intelligence",
        image: image12,
        skills: ["Üretken Yapay Zeka", "Büyük Dil Modelleri (LLM)", "Yapay Zeka Temelleri"]
    },
    {
        id: 13,
        title: "ChatGPT Kullanımı ve Prompt Mühendisliği",
        issuer: "Garanti BBVA",
        date: "Aralık 2025",
        category: "Artificial Intelligence",
        image: image13,
        skills: ["Prompt Mühendisliği", "ChatGPT", "Üretken Yapay Zeka"]
    },
    {
        id: 14,
        title: "Temel Makine Öğrenmesi",
        issuer: "Garanti BBVA",
        date: "Aralık 2025",
        category: "Machine Learning",
        image: image14,
        skills: ["Makine Öğrenmesi", "Denetimli Öğrenme", "Model Değerlendirme"]
    },
    {
        id: 5,
        title: "Bilgi Teknolojileri Stajı",
        issuer: "TNCGROUP",
        date: "Kasım 2025",
        category: "IT & Internship",
        image: image5,
        skills: ["BT Destek", "Ağ Temelleri", "Sistem Yönetimi"]
    },
    {
        id: 9,
        title: "Javascript Temelleri",
        issuer: "BTK Akademi",
        date: "Eylül 2025",
        category: "Frontend Development",
        image: image9,
        skills: ["JavaScript", "ES6+", "Programlama Temelleri"]
    },
    {
        id: 8,
        title: "Yapay Zeka Destekli Full Stack Developer",
        issuer: "GO IT",
        date: "Ağustos 2025",
        category: "Full Stack Development",
        image: image8,
        skills: ["Frontend Geliştirme", "Backend Geliştirme", "Yapay Zeka Entegrasyonu"]
    },
    {
        id: 2,
        title: "Makine Öğrenmesi",
        issuer: "Türkiye Cumhuriyeti Cumhurbaşkanlığı Dijital Dönüşüm Ofisi",
        date: "Ağustos 2024",
        category: "Machine Learning",
        image: image2,
        skills: ["Python", "Scikit-learn", "Model Eğitimi"]
    },
    {
        id: 3,
        title: "Derin Öğrenme ile Görüntü İşleme",
        issuer: "Türkiye Cumhuriyeti Cumhurbaşkanlığı Dijital Dönüşüm Ofisi",
        date: "Ağustos 2024",
        category: "Computer Vision",
        image: image3,
        skills: ["Derin Öğrenme", "Evrişimsel Sinir Ağları (CNN)", "Görüntü İşleme"]
    },
    {
        id: 7,
        title: "Sıfırdan İleri Düzey Web Geliştirme",
        issuer: "Udemy",
        date: "Ekim 2023",
        category: "Web Development",
        image: image7,
        skills: ["HTML", "CSS", "JavaScript", "Web Mimarisi"]
    },
    {
        id: 6,
        title: "Flutter'a Giriş",
        issuer: "GDSC",
        date: "Kasım 2023",
        category: "Mobile Development",
        image: image6,
        skills: ["Flutter", "Dart", "Mobil Arayüz Tasarımı"]
    },
    {
        id: 10,
        title: "Siber güvenlik ve Bilgi Güvenliği",
        issuer: "Yönetim Bilişim Sistemleri Topluluğu",
        date: "Kasım 2023",
        category: "Cyber Security",
        image: image10,
        skills: ["Bilgi Güvenliği", "Siber Güvenlik Temelleri"]
    },
    {
        id: 11,
        title: "A'dan Z'ye Siber Güvenlik",
        issuer: "Yazılım Mühendisliği Topluluğu",
        date: "Kasım 2023",
        category: "Cyber Security",
        image: image11,
        skills: ["Ağ Güvenliği", "Tehdit Analizi", "Siber Güvenlik Farkındalığı"]
    },
    {
        id: 4,
        title: "Wireshark ile Ağ Analizi",
        issuer: "Yazılım Mühendisliği Topluluğu",
        date: "Ağustos 2023",
        category: "Networking",
        image: image4,
        skills: ["Wireshark", "Ağ Analizi", "TCP/IP"]
    }
];
