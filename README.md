# Nossa U Dessert - Site Web Cofetărie Premium

Site web profesional pentru cofetăria Nossa U Dessert, construit cu Next.js 14, optimizat pentru SEO și mobile-first.

## 🚀 Caracteristici

- **Design Premium**: Interfață modernă și minimalistă cu accente luxoase
- **Optimizat SEO**: Meta tags complete, structured data, și optimizări pentru motoarele de căutare
- **Mobile-First**: Design responsive optimizat pentru toate dispozitivele
- **Animații Premium**: Microinteracțiuni și animații subtile cu Framer Motion
- **Performanță**: Optimizat pentru viteza de încărcare și experiență utilizator

## 📋 Structura Proiectului

```
nossa-dessert/
├── app/
│   ├── layout.tsx          # Layout principal cu metadata SEO
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Stiluri globale
│   ├── meniu/
│   │   └── page.tsx        # Pagină meniu cu filtre
│   ├── despre-noi/
│   │   └── page.tsx        # Pagină despre noi cu galerie
│   └── contact/
│       └── page.tsx        # Pagină contact cu formular și hartă
├── components/
│   ├── Header.tsx          # Header cu navigare
│   ├── Footer.tsx          # Footer cu link-uri și social media
│   ├── Hero.tsx            # Hero section homepage
│   ├── FeaturedProducts.tsx # Produse featured
│   ├── AboutPreview.tsx    # Preview despre noi
│   ├── Gallery.tsx          # Galerie carousel
│   └── ContactForm.tsx      # Formular contact
├── package.json
├── next.config.js
└── tsconfig.json
```

## 🛠️ Instalare și Rulare

### Pași pentru a rula site-ul:

1. **Instalează dependențele:**
   ```bash
   npm install
   ```

2. **Rulează serverul de dezvoltare:**
   ```bash
   npm run dev
   ```

3. **Deschide browserul:**
   Site-ul va fi disponibil la: `http://localhost:3000`

### Pentru producție:

1. **Construiește aplicația:**
   ```bash
   npm run build
   ```

2. **Rulează versiunea de producție:**
   ```bash
   npm start
   ```

## 📱 Pagini Disponibile

- **/** - Homepage cu hero section și produse featured
- **/meniu** - Meniu complet cu filtre pe categorii
- **/despre-noi** - Despre cofetărie cu galerie carousel
- **/contact** - Pagină contact cu formular și hartă Google Maps

## 🎨 Culori Principale

- **Primary**: `#88655f` - Maro deschis
- **Secondary**: `#553123` - Maro închis
- **Accent**: `#ece8dd` - Bej crem

## 📞 Informații de Contact

- **Telefon**: 0754 042 187
- **Adresă**: Drumul Gura Făgetului 40, București 032601
- **Instagram**: [@nossaudessert](https://www.instagram.com/nossaudessert/)

## 🔧 Tehnologii Utilizate

- **Next.js 14** - Framework React cu App Router
- **TypeScript** - Type safety
- **Framer Motion** - Animații și microinteracțiuni
- **CSS Modules** - Stiluri modulare
- **Google Fonts** - Inter și Playfair Display

## 📝 Note Importante

- Imagini folosesc placeholder-uri de la Unsplash. În producție, înlocuiește cu imagini reale ale produselor.
- Formularul de contact este simulat. Pentru funcționalitate reală, conectează-l la un serviciu de email (ex: SendGrid, Resend, etc.).
- Hartă Google Maps este embedată direct. Asigură-te că iframe-ul este configurat corect.

## 🚀 Deployment

Site-ul poate fi deployat pe:
- **Vercel** (recomandat pentru Next.js)
- **Netlify**
- **AWS Amplify**
- Orice platformă care suportă Next.js

Pentru Vercel:
```bash
npm install -g vercel
vercel
```

## 📄 Licență

Acest proiect este proprietate privată a Nossa U Dessert.

