# 💼 Kişisel Web Sitesi - Burak Turgut

Modern, responsive ve kullanıcı dostu kişisel portfolyo web sitesi. React ve Vite kullanılarak geliştirilmiştir.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple.svg)](https://vitejs.dev/)

## 🌐 Canlı Demo

🔗 [Siteyi Ziyaret Et](https://burakkturgut.github.io/Personal-Web-Site)

## ✨ Özellikler

- ⚡ **Hızlı Performans** - Vite ile optimize edilmiş build süreci
- 📱 **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- 🎨 **Modern UI/UX** - Temiz ve profesyonel arayüz
- 🚀 **Smooth Animations** - Akıcı geçişler ve animasyonlar
- 📄 **CV İndirme** - Tek tıkla CV indirme özelliği
- 🎯 **SEO Optimize** - Arama motorları için optimize edilmiş
- ♿ **Erişilebilir** - WCAG standartlarına uygun

## 🛠️ Kullanılan Teknolojiler

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** CSS3 (Custom)
- **Version Control:** Git & GitHub
- **Deployment:** GitHub Pages / Vercel / Netlify

## 📂 Proje Yapısı

```
Personal-Web-Site/
├── public/
│   ├── cv/                    # CV dosyaları
│   └── vite.svg              # Favicon ve ikonlar
├── src/
│   ├── assets/
│   │   └── images/           # Profil fotoğrafı ve görseller
│   ├── components/           # React bileşenleri
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/                # Sayfa bileşenleri
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── css/                  # Stil dosyaları
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Projects.css
│   │   └── Contact.css
│   ├── App.jsx              # Ana uygulama bileşeni
│   └── main.jsx             # Giriş noktası
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Kurulum

### Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn

### Adım Adım Kurulum

1. **Projeyi Klonlayın**
```bash
git clone https://github.com/burakkturgut/Personal-Web-Site.git
cd Personal-Web-Site
```

2. **Bağımlılıkları Yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Geliştirme Sunucusunu Başlatın**
```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcıda Açın**
```
http://localhost:5173
```

## 🎨 Özelleştirme

### 1. Kişisel Bilgileri Güncelleme

`src/pages/` klasöründeki dosyaları kendi bilgilerinizle güncelleyin:

- **Home.jsx** - Ana sayfa içeriği
- **About.jsx** - Hakkımda bilgileri
- **Projects.jsx** - Proje detayları
- **Contact.jsx** - İletişim bilgileri

### 2. CV Dosyası Ekleme

```bash
# public klasöründe cv klasörü oluşturun
mkdir public/cv

# CV dosyanızı buraya ekleyin
# Örnek: public/cv/Burak_Turgut_CV.pdf
```

### 3. Profil Fotoğrafını Değiştirme

Fotoğrafınızı `src/assets/images/` klasörüne ekleyin ve `Home.jsx` dosyasında import edin:

```javascript
import profilImage from '../assets/images/your-photo.jpg';
```

### 4. Renk Temasını Özelleştirme

CSS dosyalarındaki renk değerlerini değiştirerek kendi renk temanızı oluşturabilirsiniz.

## 📦 Production Build

Projeyi production için derlemek:

```bash
npm run build
# veya
yarn build
```

Build dosyaları `dist/` klasöründe oluşturulacaktır.

## 🌍 Deployment (Canlıya Alma)

### GitHub Pages ile Deployment

#### Adım 1: package.json Ayarları

`package.json` dosyasına aşağıdaki satırları ekleyin:

```json
{
  "homepage": "https://burakkturgut.github.io/Personal-Web-Site",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Adım 2: gh-pages Paketini Yükleyin

```bash
npm install --save-dev gh-pages
```

#### Adım 3: vite.config.js Ayarları

`vite.config.js` dosyanızı şu şekilde güncelleyin:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Personal-Web-Site/',
})
```

#### Adım 4: Deploy Edin

```bash
npm run deploy
```

Bu komut projenizi GitHub Pages'e otomatik olarak deploy edecektir.

#### Adım 5: GitHub Ayarları

1. GitHub reponuza gidin
2. **Settings** > **Pages** bölümüne gidin
3. **Source** olarak `gh-pages` branch'ini seçin
4. **Save** butonuna tıklayın
5. Birkaç dakika içinde siteniz yayında olacak!

### Vercel ile Deployment

1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub ile giriş yapın
3. **New Project** butonuna tıklayın
4. Repository'nizi seçin
5. Framework Preset otomatik olarak "Vite" olarak algılanacak
6. **Deploy** butonuna tıklayın

✅ Tamamlandı! Siteniz canlıda!

### Netlify ile Deployment

1. [Netlify](https://netlify.com) hesabı oluşturun
2. **Add new site** > **Import an existing project**
3. GitHub ile bağlan
4. Repository'nizi seçin
5. Build ayarları:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. **Deploy site** butonuna tıklayın

✅ Birkaç dakika içinde canlıda!

## 🔧 Sorun Giderme

### Build Hatası

```bash
# node_modules ve package-lock.json'ı silin
rm -rf node_modules package-lock.json

# Yeniden yükleyin
npm install
```

### Port Zaten Kullanımda

```bash
# Farklı port kullanın
npm run dev -- --port 3000
```

### GitHub Pages'de 404 Hatası

`vite.config.js` içinde `base` ayarının doğru olduğundan emin olun.

## 📝 Lisans

Bu proje [MIT](LICENSE) lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Burak Turgut**
- GitHub: [@burakkturgut](https://github.com/burakkturgut)
- Website: [burakkturgut.github.io/Personal-Web-Site](https://burakkturgut.github.io/Personal-Web-Site)

## 🤝 Katkıda Bulunma

1. Bu projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📧 İletişim

Herhangi bir sorunuz veya öneriniz için benimle iletişime geçebilirsiniz.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!