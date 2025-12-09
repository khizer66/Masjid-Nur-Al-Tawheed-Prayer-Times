# Quick Start Guide

**⏱️ Get up and running in 5 minutes**

> For detailed instructions, see `USER_GUIDE.md`

---

## 🚀 First Steps

### 1. Access Your Site
- **Main Display**: https://prayer-times-mu-eight.vercel.app/
- **Admin Panel**: https://prayer-times-mu-eight.vercel.app/admin.html
- **Default Password**: `masjid2025` ⚠️ **Change this immediately!**

### 2. Set Up on TV
1. Connect TV to internet
2. Open browser → Go to your site URL
3. Enter password → Set to fullscreen (F11)
4. Leave it running!

---

## ⚙️ Essential Configuration

### Change Password (CRITICAL!)
1. Open `index.html` → Find `const ADMIN_PASSWORD = 'masjid2025';`
2. Change password → Save
3. Repeat in `admin.html`
4. Upload to hosting

### TV Display Settings
In `index.html`, find (around line 214):

```javascript
tvMode: true,          // Large text for TV
allowScrolling: false, // No scrolling
compactLayout: false,  // Normal spacing
showHadith: true      // Show hadith section
```

**If content doesn't fit:**
- Set `compactLayout: true` OR
- Set `allowScrolling: true` OR  
- Set `showHadith: false`

---

## 📝 Quick Tasks

- [ ] Change passwords in both files
- [ ] Test on TV
- [ ] Adjust TV settings if needed
- [ ] Add hadiths via admin panel
- [ ] Update announcements in `index.html`

---

## 📝 Managing Hadiths

**Add Hadith:**
1. Go to `/admin.html`
2. Click "Add Hadith"
3. Enter text and source
4. Click "Save Hadiths"

**Import from Google Sheets:**
1. Create sheet with columns: `text`, `source`
2. Publish as CSV → Copy URL
3. Paste in admin panel → "Save Sheet URL"
4. Click "Save Hadiths"

---

## ❓ Quick Answers

**Q: How do I update prayer times?**  
A: Automatic! No action needed.

**Q: Can I use this offline?**  
A: Yes, but internet needed for fresh prayer times.

**Q: Text too small on TV?**  
A: Set `tvMode: true` in `index.html`.

**Q: Content doesn't fit?**  
A: Set `compactLayout: true` or `allowScrolling: true`.

---

**Need more details?** See `USER_GUIDE.md` for complete documentation.
