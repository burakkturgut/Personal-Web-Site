import {
    FaLaptopCode,
    FaChartLine,
    FaCode,
    FaBrain,
    FaDatabase,
    FaNetworkWired,
    FaEye,
    FaProjectDiagram
} from "react-icons/fa";


export const educationData = {
    degree: "Bilgisayar Mühendisliği",
    type: "Lisans",
    school: "Bandırma Onyedi Eylül Üniversitesi",
    location: "Bandırma, Balıkesir",
    period: "2020 - 2025",
    gpa: "3.35 / 4.0",
    description: `Bilgisayar Mühendisliği lisans eğitimim boyunca yazılım geliştirme, veri yapıları, algoritmalar, yapay zekâ ve web teknolojileri gibi bilgisayar mühendisliğinin temel alanlarında kapsamlı bir akademik altyapı edindim. Eğitim sürecimde, teorik bilgiyi proje tabanlı çalışmalarla pekiştirerek analitik düşünme, problem çözme ve sistematik çalışma becerilerimi geliştirdim. Bu süreç, modern yazılım geliştirme yaklaşımlarını ve mühendislik bakış açısını benimsememde önemli rol oynadı. Eğitimim süresince özellikle yapay zekâ, makine öğrenmesi ve yazılım mühendisliği alanlarına odaklandım. Derin öğrenme algoritmaları, veri analizi ve model geliştirme konularında çalışmalar yaparak, bu teknolojilerin gerçek dünya problemlerine nasıl uygulanabileceğini deneyimleme fırsatı buldum. Aynı zamanda modern web teknolojileri ile kullanıcı odaklı ve sürdürülebilir yazılım çözümleri geliştirdim.`,
    academicFocus: `Aldığım dersler ve gerçekleştirdiğim projeler sayesinde, teorik temelleri güçlü, pratik uygulamalarla desteklenen bir mühendislik yaklaşımı kazandım. Eğitim hayatım boyunca sürekli öğrenmeyi, kendimi geliştirmeyi ve yeni teknolojileri yakından takip etmeyi ilke edinerek, üretken ve çözüm odaklı bir çalışma anlayışı benimsedim.`
};

export const courseCategories = [
    {
        category: "Yapay Zeka, Makine Öğrenmesi & Veri Bilimi",
        icon: <FaBrain />,
        color: "#8b5cf6",
        courses: [
            { name: "Yapay Zeka", description: "Arama algoritmaları, problem çözme, bilgi temsili" },
            { name: "Makine Öğrenmesine Giriş", description: "Denetimli öğrenme, regresyon, sınıflandırma" },
            { name: "Veri Madenciliği", description: "Veri ön işleme, örüntü keşfi, kümeleme" },
            { name: "Örüntü Tanıma", description: "Örüntü analizi, özellik çıkarımı, sınıflandırma" },
            { name: "Sosyal Ağ Analizlerine Giriş", description: "Graf tabanlı veri analizi, ağ metrikleri" }
        ]
    },
    {
        category: "Görüntü İşleme & Bilgisayarlı Görü",
        icon: <FaEye />,
        color: "#6366f1",
        courses: [
            { name: "Görüntü İşleme", description: "Görüntü filtreleme, iyileştirme, bölütleme" },
            { name: "Bilgisayarla Görme ve Görüntüleme Teknikleri", description: "Bilgisayarlı görü, görüntü anlama, uygulamalar" },
            { name: "Bilgisayarlı Görü", description: "Nesne tespiti, özellik çıkarımı, görüntü analizi" }
        ]
    },
    {
        category: "Yazılım Geliştirme & Yazılım Mühendisliği",
        icon: <FaCode />,
        color: "#2563eb",
        courses: [
            { name: "Programlamaya Giriş", description: "Programlama temelleri, algoritmalar, problem çözme" },
            { name: "Nesneye Dayalı Programlama", description: "OOP prensipleri, sınıflar, kalıtım, çok biçimlilik" },
            { name: "İleri Programlama", description: "İleri programlama kavramları ve uygulamaları" },
            { name: "Yazılım Mühendisliği", description: "Yazılım yaşam döngüsü, Agile metodları, yazılım geliştirme" },
            { name: "Programlama Dilleri", description: "Programlama paradigmaları, dil yapıları" }
        ]
    },
    {
        category: "Algoritmalar & Teorik Bilgisayar Bilimi",
        icon: <FaProjectDiagram />,
        color: "#0ea5e9",
        courses: [
            { name: "Veri Yapıları", description: "Listeler, ağaçlar, graflar, yığınlar, kuyruklar" },
            { name: "Algoritmalar", description: "Algoritma tasarımı, karmaşıklık analizi" },
            { name: "Ayrık Matematik", description: "Mantık, kümeler, bağıntılar, graf teorisi" },
            { name: "Otomata Teorisi", description: "Biçimsel diller, otomatlar, hesaplama teorisi" }
        ]
    },
    {
        category: "Veritabanı & Web Teknolojileri",
        icon: <FaDatabase />,
        color: "#10b981",
        courses: [
            { name: "Veritabanı Yönetimi", description: "SQL, şema tasarımı, işlemler" },
            { name: "İnternet Tabanlı Programlama", description: "Web uygulamaları, istemci-sunucu mimarisi" },
            { name: "Web Programlama", description: "HTML, CSS, JavaScript temelleri" }
        ]
    },
    {
        category: "Sistem, Donanım & Ağ",
        icon: <FaNetworkWired />,
        color: "#ef4444",
        courses: [
            { name: "İşletim Sistemleri", description: "Süreçler, bellek yönetimi, dosya sistemleri" },
            { name: "Bilgisayar Mimarisi", description: "CPU mimarisi, komut kümeleri" },
            { name: "Mikroişlemciler", description: "Gömülü sistemler, düşük seviyeli programlama" },
            { name: "Bilgisayar Ağları", description: "TCP/IP, protokoller, veri iletişimi" },
            { name: "Gömülü Sistemler", description: "Donanım-yazılım entegrasyonu" }
        ]
    },
    {
        category: "Matematik & Temel Mühendislik",
        icon: <FaChartLine />,
        color: "#f59e0b",
        courses: [
            { name: "Lineer Cebir", description: "Vektörler, matrisler, lineer dönüşümler" },
            { name: "Diferansiyel Denklemler", description: "Matematiksel modelleme, adi diferansiyel denklemler" },
            { name: "Olasılık ve İstatistik", description: "Olasılık teorisi, istatistiksel çıkarım" },
            { name: "Sayısal Analiz", description: "Sayısal yöntemler, yaklaşım teknikleri" },
            { name: "Optimizasyon Teorisi", description: "Optimizasyon yöntemleri ve uygulamaları" }
        ]
    }
];
