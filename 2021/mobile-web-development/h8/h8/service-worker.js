var cache_version='v1';
var cache_files=[
    'index.html',
    'mystyle.css'
];

self.addEventListener('install', event => {
    console.log('Service Worker installed');
    event.waitUntil(
        caches
        .open(cache_version)
        .then(cache => {
            console.log('SW caching files');
            cache.addAll(cache_files)
        })
        .then(() => 
            self.skipWaiting()
        )
    );
});

self.addEventListener('activate', event =>{
    console.log('SW activated');
    event.waitUntil(
        caches.keys().then(keyNames => {
            return Promise.all(
                keyNames.map(key => {
                    if(key!=cache_version) {
                        console.log('Deleting old version' + keyNames);
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
    )
})