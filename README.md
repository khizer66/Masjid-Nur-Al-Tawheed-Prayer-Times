# Masjid Nur Al Tawheed Prayer Times Display

A modern, digital prayer times display system for Masjid Nur Al Tawheed in Skopje, Macedonia. This system provides real-time prayer times, Iqamah schedules, rotating hadiths, and an administrative interface for content management.

## Overview

The Prayer Times Display is a web-based application designed for large-screen displays in mosques. It automatically fetches prayer times from the Aladhan API, displays them in an elegant interface with Islamic aesthetics, and includes features for managing hadiths and announcements.

**Live Deployment:** https://prayer-times-mu-eight.vercel.app/

## Features

- ✨ **Dynamic Visual Themes** - Color schemes and animations that change based on prayer time
- 🌍 **Real-time Prayer Times** - Automatic fetching from Aladhan API with 24-hour caching
- 📱 **Responsive Design** - Optimized for all screen sizes, from mobile to large TV displays
- 💾 **Offline Support** - Service worker caches prayer times for offline functionality
- 🕌 **Islamic Aesthetics** - Arabic typography, Islamic patterns, and seasonal color themes
- ⏰ **Iqamah Times** - Automatically calculated with configurable offsets per prayer
- 📅 **Hijri Calendar** - Displays both Gregorian and Islamic calendar dates
- 📜 **Rotating Hadiths** - Displays inspirational quotes that rotate every 12 seconds
- 🎨 **Seasonal Themes** - Visual themes adapt to spring, summer, autumn, and winter
- ⚙️ **Admin Panel** - Web-based interface for managing hadiths, announcements, and settings
- 📺 **TV Mode** - Toggle between large and normal text sizes for optimal TV viewing
- 🔒 **Password Protection** - Secure access control for both display and admin panel

## Deployment

The system is deployed on **Vercel** and connected to a **GitHub repository** for automatic deployments. When changes are pushed to the GitHub repository, Vercel automatically rebuilds and deploys the updated site.

**Deployment URL:** https://prayer-times-mu-eight.vercel.app/

**Admin Panel:** https://prayer-times-mu-eight.vercel.app/admin.html

## Technical Architecture

### Frontend
- Pure HTML/CSS/JavaScript (no build process required)
- React-like component structure using Babel standalone
- Tailwind CSS via CDN for styling
- Lucide React icons for UI elements

### Data Sources
- **Prayer Times:** Aladhan API (https://aladhan.com)
- **Storage:** Browser localStorage for settings and hadiths
- **Caching:** Service Worker for offline support

### Configuration

The system is configured for:
- **Location:** Skopje, Macedonia
- **Timezone:** Europe/Skopje
- **Calculation Method:** 3 (Muslim World League)
- **Iqamah Offsets:**
  - Fajr: 20 minutes
  - Dhuhr: 15 minutes
  - Asr: 15 minutes
  - Maghrib: 5 minutes
  - Isha: 15 minutes

Configuration can be modified in the `CONFIG` object within `index.html` or via the admin panel.

## Admin Panel

The admin panel (`admin.html`) provides a web-based interface for:

- **Hadith Management:** Add, edit, delete, and reorder hadiths
- **Announcement Management:** Update scrolling banner messages
- **Iqamah Offsets:** Adjust delays for each prayer time
- **Display Settings:** Toggle features like 99 Names of Allah display
- **Language Selection:** Switch between Albanian and English
- **Google Sheets Integration:** Import hadiths from Google Sheets CSV
- **Data Export:** Download hadiths as CSV or JSON

All changes are saved to browser localStorage and sync across tabs using the same browser.

## Google Sheets Integration

The system supports importing hadiths from Google Sheets:

1. Create a Google Sheet with columns: `text` and `source`
2. Publish the sheet as CSV
3. Enter the CSV URL in the admin panel
4. The system automatically fetches and displays hadiths from the sheet

## Browser Support

- Chrome/Edge (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Service Worker for offline caching
- localStorage caching for prayer times (24-hour expiration)
- Optimized animations targeting 60fps
- Lazy loading of resources
- Automatic page refresh at 3 AM daily

## Security

- Password protection for display and admin panel access
- Content Security Policy headers
- XSS protection
- Secure headers configured via Vercel
- Session-based authentication for admin panel

**Default Password:** `masjid2025`

## File Structure

```
Prayer-Times/
├── index.html          # Main prayer times display
├── admin.html          # Administrative interface
├── sw.js               # Service worker for offline support
├── manifest.json       # PWA manifest
├── favicon.svg         # Website icon
├── serve.py            # Local development server
├── serve.bat           # Windows launcher for local server
├── README.md           # Technical documentation
├── USER_GUIDE.md       # Complete user guide
├── QUICK_START.md      # Quick setup guide
└── CHANGELOG.md        # Version history
```

## Maintenance

### Automatic
- Prayer times fetch automatically daily from Aladhan API
- Page auto-refreshes at 3 AM daily
- No manual intervention required for prayer time updates

### Manual
- **Weekly:** Verify prayer times display correctly
- **Monthly:** Review and update announcements via admin panel
- **As Needed:** Add/update hadiths via admin panel

## Troubleshooting

Common issues and solutions are documented in `USER_GUIDE.md`. For technical support, refer to the troubleshooting section in the user guide.

## Local Development

For local testing, use the included server:

```bash
python serve.py
```

Or use any local HTTP server:
- Python: `python -m http.server 8000`
- Node.js: `npx serve .`

## Documentation

- **USER_GUIDE.md** - Complete user guide with detailed instructions
- **QUICK_START.md** - Quick setup guide for getting started
- **CHANGELOG.md** - Version history and changes
- **SECURITY.md** - Security analysis and recommendations

## License

This project is created for Masjid Nur Al Tawheed. All rights reserved.

## Credits

- **Prayer Times API:** [Aladhan API](https://aladhan.com)
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Amiri, Outfit, Inter, Crimson Text)

## Support

For issues or questions, please contact the mosque administration.

---

**Last Updated:** December 2024
