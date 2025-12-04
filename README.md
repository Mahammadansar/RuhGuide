# 📿 Quran Mood Finder

A full-stack Islamic web application that provides personalized Quranic guidance based on your emotional state. Select your mood and receive relevant Quran verses, surahs, tafsir clips, and duas.

## ✨ Features

- **10 Emotional States Supported**: Stressed, Lonely, Angry, Lost, Grateful, Sad, Confused, Afraid, Hopeless, Seeking Guidance
- **Comprehensive Guidance**: 
  - Quran verses with Arabic text, transliteration, and English translation
  - Recommended surahs with explanations
  - Tafsir (exegesis) video links
  - Authentic duas (supplications)
- **Beautiful UI**: Modern design with soft gradients, Arabic font support, and smooth animations
- **Dark Mode**: Light/dark theme toggle
- **PWA Ready**: Installable as a Progressive Web App with offline support
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd qu
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
qu/
├── app/
│   ├── api/
│   │   └── mood/
│   │       └── [name]/
│   │           └── route.ts      # API endpoint for mood data
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── results/
│   │   └── page.tsx              # Results page
│   ├── globals.css               # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── sw-register.tsx          # Service worker registration
├── components/
│   ├── DuaCard.tsx              # Dua display component
│   ├── MoodCard.tsx             # Mood selection card
│   ├── Navbar.tsx               # Navigation bar
│   ├── SurahCard.tsx            # Surah recommendation card
│   ├── TafsirCard.tsx           # Tafsir video card
│   ├── ThemeProvider.tsx        # Dark mode provider
│   └── VerseCard.tsx            # Quran verse card
├── data/
│   └── mood_data.json           # Mood data with Islamic content
├── public/
│   ├── manifest.json            # PWA manifest
│   └── sw.js                    # Service worker
└── package.json
```

## 📱 PWA Features

The app is configured as a Progressive Web App:
- Installable on mobile and desktop
- Offline support via service worker
- App-like experience

**Note**: To complete PWA setup, add icon files:
- `public/icon-192.png` (192x192 pixels)
- `public/icon-512.png` (512x512 pixels)

You can generate these using tools like [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator) or create custom Islamic-themed icons.

## 🎨 Customization

### Adding New Moods

Edit `data/mood_data.json` and add a new mood object with the required structure:

```json
{
  "new-mood": {
    "verses": [...],
    "surahs": [...],
    "tafseer": [...],
    "duas": [...],
    "explanation": "..."
  }
}
```

Then add the mood to the `moods` array in `app/page.tsx`.

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes in component files

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

The app is optimized for Vercel deployment with:
- Serverless API routes
- Static page generation where possible
- Edge-ready configuration

## 📝 Notes

- All Quranic content is sourced from authentic Islamic texts
- Arabic text uses Amiri and Scheherazade New fonts for beautiful rendering
- Tafsir links are placeholders - replace with actual YouTube or video URLs
- The app uses local JSON data - no external API calls required for MVP

## 🔮 Future Enhancements

- User accounts and saved moods
- AI chat for Islamic Q&A (with verified sources)
- Voice input for mood detection
- Daily mood-based Quran reminders
- Social sharing features
- More comprehensive tafsir library

## 📄 License

This project is open source and available for personal and educational use.

## 🤲 Acknowledgments

All Quranic verses, translations, and Islamic content are sourced from authentic Islamic texts. May this app serve as a means of guidance and peace for all users.

