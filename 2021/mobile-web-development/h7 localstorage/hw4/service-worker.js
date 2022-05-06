var CACHE_VERSION = 'my-pwa-v1';
var CACHE_FILES = [
    'index.html',
    'mystyle.css',
    'browse-512x512.png',
    'browse-192x192.png',
    'lightgold.jpg',
    'lightblue.jpg'
];

self.addEventListener('install', event => {
    console.log('Service Worker installed');
    event.waitUntil(
        caches
        .open(CACHE_VERSION)
        .then(cache => {
            console.log('SW caching files');
            cache.addAll(CACHE_FILES)
        })
        .then(() => self.skipWaiting())

    );
});

self.addEventListener('activate',event => {
    console.log('SW activated');
    event.waitUntil(
        caches.keys().then(keyNames => {
            return Promise.all(
                keyNames.map(key => {
                    if(key !== CACHE_VERSION){
                        console.log('Deleting old version'+keyNames);
                        return caches.delete(key);
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', event => {
    console.log('SW fetching');
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});



