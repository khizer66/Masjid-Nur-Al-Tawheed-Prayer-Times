# How to Clear Service Worker Cache

## Quick Method (Recommended)

### Chrome/Edge:
1. Visit: https://masjid-nur-al-tawheed-prayer-times.vercel.app/
2. Press **F12** (or **Ctrl + Shift + I**)
3. Click **Application** tab
4. Left sidebar → **Service Workers** → Click **Unregister**
5. Left sidebar → **Cache Storage** → Right-click each cache → **Delete**
6. Close DevTools
7. Press **Ctrl + Shift + R** to hard refresh

### Firefox:
1. Visit: https://masjid-nur-al-tawheed-prayer-times.vercel.app/
2. Press **F12** (or **Ctrl + Shift + I**)
3. Click **Storage** tab
4. Expand **Service Workers** → Click **Unregister**
5. Expand **Cache Storage** → Right-click → **Delete All**
6. Close DevTools
7. Press **Ctrl + Shift + R** to hard refresh

## Alternative: Clear All Site Data

### Chrome/Edge:
1. Press **F12** → **Application** tab
2. Left sidebar → **Clear storage**
3. Check: **Cache storage** and **Service workers**
4. Click **Clear site data**
5. Refresh page

### Firefox:
1. Press **F12** → **Storage** tab
2. Right-click the site URL → **Delete All**
3. Refresh page

## Browser Settings Method

### Chrome:
1. Click **⋮** (three dots) → **Settings**
2. **Privacy and security** → **Clear browsing data**
3. **Advanced** tab
4. Select **Cached images and files**
5. Time range: **All time**
6. Click **Clear data**

### Edge:
1. Click **⋯** (three dots) → **Settings**
2. **Privacy, search, and services** → **Clear browsing data**
3. **Choose what to clear** → Select **Cached images and files**
4. Click **Clear now**

### Firefox:
1. Click **☰** (three lines) → **Settings**
2. **Privacy & Security** → Scroll to **Cookies and Site Data**
3. Click **Clear Data**
4. Check **Cached Web Content**
5. Click **Clear**

## After Clearing Cache

The amber/gold header should now be visible! If not:
- Wait 1-2 minutes for Vercel deployment to complete
- Try opening in an **Incognito/Private window**
- Add `?v=5` to the URL: https://masjid-nur-al-tawheed-prayer-times.vercel.app/?v=5

