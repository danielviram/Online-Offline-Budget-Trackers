const FILES_TO_CATCHE =[
    '/',
    '/index.html',
    '/index.js',
    '/styles.css',
    '/db.js',
    '/manifest.webmanifest',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    "https://cdn.jsdelivr.net/npm/chart.js@2.8.0",
    "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
];

const CACHE_NAME = "static-catche-v2";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", function(evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
            console.log("Your files are pre-cached successfully");     return cache.addAll(FILES_TO_CACHE);
        })
      );
    
      self.skipWaiting();
    });

    self.
