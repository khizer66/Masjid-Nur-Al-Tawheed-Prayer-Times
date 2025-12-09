// Service Worker for Prayer Times Display
// Version: bump this on each deploy (e.g. v7)

const CACHE_NAME = 'prayer-times-v7';
const CACHE_PREFIX = 'prayer-times-';
const urlsToCache = ['/', '/index.html'];

// Install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate – delete old caches ONLY if not current version
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      let removed = false;
      const deletions = cacheNames.map((name) => {
        if (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) {
          removed = true;
          return caches.delete(name);
        }
      });
      return Promise.all(deletions).then(() => {
        return self.clients.claim().then(() => removed);
      });
    }).then((removed) => {
      if (removed) {
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) =>
            client.postMessage({ type: 'SW_UPDATED', action: 'reload' })
          );
        });
      }
    })
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // API → always fetch
  if (event.request.url.includes('api.aladhan.com')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(
          JSON.stringify({ error: 'Network unavailable' }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      })
    );
    return;
  }

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    event.respondWith(fetch(event.request));
    return;
  }

  // HTML → always fresh
  if (event.request.destination === 'document' || event.request.url.endsWith('.html')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(() =>
        caches.match(event.request)
      )
    );
    return;
  }

  // Others → network first, then cache
  event.respondWith(
    fetch(event.request, { cache: 'no-cache' })
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          caches.open(CACHE_NAME).then((cache) =>
            cache.put(event.request, response.clone())
          );
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// Background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-prayer-times') {
    event.waitUntil(
      fetch('https://api.aladhan.com/v1/timingsByCity')
        .then((res) => res.json())
        .catch((err) => console.error('Background sync failed:', err))
    );
  }
});
