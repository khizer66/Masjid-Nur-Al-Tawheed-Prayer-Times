# Prayer Times Display - User Guide

## 📋 Overview

This comprehensive guide covers everything you need to know about the Prayer Times Display system, from initial setup to ongoing maintenance.

> **Quick Reference**: See `QUICK_START.md` for a 5-minute setup guide.

---

## 🎯 What Has Been Delivered

### Core Features
- ✅ **Real-Time Prayer Times** - Automatically fetched and displayed
- ✅ **Admin Panel** - Easy management of hadiths and announcements
- ✅ **TV-Optimized Display** - Perfect for large screen displays
- ✅ **Password Protection** - Secure access control
- ✅ **Offline Support** - Works with cached data
- ✅ **Auto-Refresh** - Updates at 3 AM daily
- ✅ **99 Names of Allah** - Optional display feature
- ✅ **Announcement Banner** - Scrolling announcements
- ✅ **Iqamah Times** - Configurable delays for each prayer

### Recent Enhancements
- ✅ **TV Mode Toggle** - Switch between large/normal text sizes
- ✅ **Google Sheets Integration** - Import hadiths from spreadsheets
- ✅ **Modern UI** - Professional design with animations
- ✅ **Responsive Layout** - Works on all screen sizes

---

## 🚀 Deployment

### Vercel (Recommended)

This project is deployed on Vercel via GitHub:

1. **Connect GitHub Repository**
   - Create GitHub account at https://github.com
   - Create new repository and upload all project files
   - Go to https://vercel.com and sign up (free)

2. **Deploy to Vercel**
   - Import your GitHub repository
   - Vercel will auto-detect and deploy
   - Your site will be live immediately

**Current Deployment:** https://prayer-times-mu-eight.vercel.app/

3. **Automatic Deployments**
   - Push changes to GitHub → Vercel auto-deploys
   - No manual uploads needed

### Alternative: Other Hosting

If you prefer different hosting:
- Upload all project files to your hosting provider
- Site updates when you upload new files

---

## 🔐 Access & Security

### URLs
- **Main Display**: https://prayer-times-mu-eight.vercel.app/
- **Admin Panel**: https://prayer-times-mu-eight.vercel.app/admin.html

### Default Credentials
- **Password**: `masjid2025` ⚠️ **CHANGE IMMEDIATELY!**

### Changing Passwords

**Main Display (`index.html`):**
1. Open `index.html` in text editor
2. Find: `const ADMIN_PASSWORD = 'masjid2025';` (around line 610)
3. Replace `'masjid2025'` with your secure password
4. Save and redeploy

**Admin Panel (`admin.html`):**
1. Open `admin.html` in text editor
2. Find: `const ADMIN_PASSWORD = 'masjid2025';` (around line 808)
3. Replace `'masjid2025'` with your secure password
4. Save and redeploy

**⚠️ Security Note**: Passwords are visible in code. This provides basic protection only. For production, consider additional security measures.

---

## ⚙️ Configuration

### TV Display Settings

In `index.html`, locate the `CONFIG` object (around line 214):

```javascript
tvMode: true,              // true = Large text for TV, false = Normal
allowScrolling: false,      // true = Allow scrolling, false = No scroll
compactLayout: false,       // true = Compact spacing, false = Normal
showHadith: true           // true = Show hadith section, false = Hide
```

**Recommended TV Settings:**
- `tvMode: true` - Larger, more readable text
- `allowScrolling: false` - Keep everything on one screen
- `compactLayout: false` - Normal spacing (set `true` if content doesn't fit)
- `showHadith: true` - Show hadith section (set `false` if it doesn't fit)

**Troubleshooting TV Display:**
- Content too large? → Set `compactLayout: true`
- Need scrolling? → Set `allowScrolling: true`
- Hide hadith? → Set `showHadith: false`

### Prayer Time Offsets (Iqamah Times)

In `index.html`, find `iqamahOffset` (around line 211):

```javascript
iqamahOffset: { 
    Fajr: 20,    // 20 minutes after Adhan
    Dhuhr: 15,   // 15 minutes after Adhan
    Asr: 15,     // 15 minutes after Adhan
    Maghrib: 5,  // 5 minutes after Adhan
    Isha: 15     // 15 minutes after Adhan
}
```

**To Adjust:**
1. Edit the numbers to match your masjid's schedule
2. Save and redeploy
3. OR use the Admin Panel to adjust (changes saved to localStorage)

### Announcements

In `index.html`, find `announcements` (around line 212):

```javascript
announcements: [
    "Jummah Prayer at 13:00",
    "Islamic Classes - Sunday after Dhuhr",
    "Support Your Masjid - JazakAllah Khair"
]
```

**To Update:**
1. Add or modify announcement text
2. Save and redeploy
3. OR use the Admin Panel to manage announcements

### Mosque Information

In `index.html`, find (around line 201):

```javascript
mosqueName: "MASJID NUR AL TAWHEED",
mosqueArabic: "مسجد نور التوحيد",
```

Edit these to match your masjid's name.

### Location & Timezone

Already configured for:
- **City**: Skopje, Macedonia
- **Timezone**: Europe/Skopje
- **Calculation Method**: 3 (Muslim World League)

To change, edit in `index.html` (around line 207).

---

## 📱 Usage Guide

### For Viewers

**What They See:**
- Current time and date (Gregorian & Hijri)
- All 5 prayer times with Iqamah times
- Active prayer highlighted with "NOW" badge
- Countdown to next prayer
- Rotating hadiths (every 12 seconds)
- Scrolling announcements banner
- Optional: 99 Names of Allah display

**Access:**
1. Open website URL
2. Enter password
3. View display

### For Administrators

**Admin Panel Features:**
- Manage hadiths (add, edit, delete)
- Import hadiths from Google Sheets
- Export hadiths to CSV/JSON
- Manage announcements
- Adjust Iqamah time offsets
- Toggle 99 Names of Allah display
- Change display language (Albanian/English)

**Managing Hadiths:**

1. **Add Hadith:**
   - Go to admin panel
   - Click "Add Hadith"
   - Enter text and source
   - Click "Save Hadiths"

2. **Edit Hadith:**
   - Click on hadith text or source field
   - Modify content
   - Click "Save Hadiths"

3. **Delete Hadith:**
   - Click delete icon (trash can)
   - Confirm deletion
   - Click "Save Hadiths"

4. **Import from Google Sheets:**
   - Create Google Sheet with columns: `text`, `source`
   - File → Share → Publish to web → CSV
   - Copy CSV URL
   - Paste in admin panel's "Google Sheets CSV URL" field
   - Click "Save Sheet URL"
   - Click "Save Hadiths"

5. **Export Data:**
   - Click "Export JSON" or "Export CSV"
   - File downloads automatically

**Important:** Always click "Save Hadiths" after making changes!

---

## 📺 TV Setup

### Step-by-Step Setup

1. **Connect TV to Internet**
   - Use WiFi or Ethernet cable
   - Ensure stable connection

2. **Open Browser**
   - Use TV's built-in browser
   - OR connect laptop/device to TV

3. **Navigate to Site**
   - Enter website URL
   - Enter password
   - Bookmark for easy access

4. **Set Fullscreen**
   - Press F11 (computer) or TV's fullscreen button
   - Display is optimized for fullscreen

5. **Keep Running**
   - Leave browser open
   - Page auto-refreshes at 3 AM daily
   - Prayer times update automatically

### Recommended TV Settings

- **Resolution**: 1920x1080 (Full HD) or higher
- **Display Mode**: Fullscreen
- **Browser**: Chrome, Firefox, or Edge (latest version)
- **Auto-Start**: Configure browser to open site on startup (if available)

### TV Mode Toggle

Users can toggle TV mode directly from the display:
- Click the "TV Mode" indicator (top right)
- OR press `T` key on keyboard
- Changes persist after page reload

---

## 🎨 Customization

### Colors & Themes

The display automatically adapts:
- **Time-based colors**: Different colors for each prayer time
- **Seasonal themes**: Spring, Summer, Autumn, Winter
- **Active prayer**: Highlighted with special effects

### Display Features

Toggle these in Admin Panel:
- **99 Names of Allah**: Show/hide Arabic calligraphy display
- **Announcements**: Manage scrolling banner
- **Language**: Switch between Albanian and English

---

## 🔧 Troubleshooting

### Display Not Loading
- ✅ Check internet connection
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Try different browser
- ✅ Check if site is deployed correctly

### Password Not Working
- ✅ Verify correct password
- ✅ Check if password was changed in code
- ✅ Clear sessionStorage: F12 → Application → Session Storage → Clear
- ✅ Try incognito/private window

### Prayer Times Incorrect
- ✅ Verify timezone in `index.html`
- ✅ Check calculation method (line 208)
- ✅ Verify API is accessible (Aladhan API)
- ✅ Check if location coordinates are correct

### Content Doesn't Fit on TV
- ✅ Set `compactLayout: true` in `index.html`
- ✅ Set `allowScrolling: true` to enable scrolling
- ✅ Set `showHadith: false` to hide hadith section
- ✅ Adjust TV browser zoom level

### Hadiths Not Updating
- ✅ Click "Save Hadiths" in admin panel
- ✅ Clear browser cache
- ✅ Verify Google Sheets URL is correct (if using)
- ✅ Check browser console for errors (F12)

### TV Mode Not Working
- ✅ Check localStorage is enabled in browser
- ✅ Verify TV mode setting in code
- ✅ Try hard refresh (Ctrl+Shift+R)
- ✅ Check browser compatibility

---

## 📞 Maintenance

### Regular Tasks

**Weekly:**
- Verify prayer times display correctly
- Check if announcements are current

**Monthly:**
- Review and update announcements
- Add/update hadiths as needed
- Export hadiths as backup

**As Needed:**
- Adjust Iqamah offsets if schedule changes
- Update mosque information
- Modify display settings

### Automatic Updates

- ✅ Prayer times fetch automatically daily
- ✅ Page refreshes at 3 AM daily
- ✅ No manual updates needed for prayer times
- ✅ Only hadiths and announcements need manual updates

---

## 📝 Files Included

- `index.html` - Main prayer times display
- `admin.html` - Admin panel interface
- `sw.js` - Service worker (offline support)
- `manifest.json` - PWA configuration
- `favicon.svg` - Website icon
- `serve.py` - Local development server (optional)
- `serve.bat` - Windows launcher for local server (optional)

---

## ⚠️ Important Notes

1. **Change Default Passwords** - Replace `masjid2025` immediately
2. **Backup Regularly** - Export hadiths using CSV export feature
3. **Test on TV** - Always test on actual TV before going live
4. **Internet Required** - Fresh prayer times need internet connection
5. **Browser Compatibility** - Works best on Chrome, Firefox, Edge (latest versions)
6. **LocalStorage** - Settings stored in browser's localStorage (per device)
7. **Cross-Port Issues** - Admin panel and main display must be on same port for localStorage sync

---

## 🎯 Next Steps Checklist

- [ ] Deploy site to hosting (if not already)
- [ ] Change passwords in both `index.html` and `admin.html`
- [ ] Test on actual TV
- [ ] Adjust TV settings if needed (`tvMode`, `compactLayout`, etc.)
- [ ] Add hadiths via admin panel
- [ ] Update announcements
- [ ] Verify Iqamah offsets are correct
- [ ] Bookmark site on TV browser
- [ ] Test password protection
- [ ] Export hadiths as backup
- [ ] Document your custom passwords securely

---

## 📧 Pre-Handover Questions

Before finalizing, confirm:

1. **TV Setup**
   - TV size/resolution?
   - Does everything fit on one screen?
   - Is text readable from viewing distance?

2. **Security**
   - What password for main display?
   - What password for admin panel?

3. **Prayer Times**
   - Are Iqamah offsets correct? (Fajr: 20min, Dhuhr: 15min, etc.)
   - Is calculation method correct? (3 - Muslim World League)

4. **Content**
   - Want to add custom hadiths?
   - What announcements to display?
   - Is mosque name/Arabic text correct?

5. **Preferences**
   - TV Mode ON (large text) or OFF (normal)?
   - Enable scrolling if content doesn't fit?
   - Show 99 Names of Allah?

---

## ✨ Features Summary

### Key Highlights

- 🎨 **Beautiful Design** - Modern, elegant interface with Islamic patterns
- ⏱️ **Real-Time Updates** - Automatic prayer time detection and countdown
- 📺 **TV Optimized** - Perfect for large screen displays
- 🛠️ **Easy Management** - Simple admin panel for non-technical users
- 📱 **Responsive** - Works on phones, tablets, computers, and TVs
- 🔒 **Secure** - Password protection for access control
- 🔄 **Auto-Refresh** - No manual maintenance needed
- 💾 **Offline Support** - Works with cached data

---

**Need Technical Help?** Refer to code comments or contact your developer.

**Quick Reference:** See `QUICK_START.md` for essential setup steps.

**Last Updated:** December 2024
