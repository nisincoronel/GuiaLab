const CACHE_NAME = 'guialab-cache-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Instalación: Guarda los archivos en el dispositivo
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache OK: Archivos guardados');
      return cache.addAll(assets);
    })
  );
});

// Activación: Borra el caché viejo si cambias el CACHE_NAME (v1 -> v2)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Limpiando versiones antiguas');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch: Carga desde el caché si no hay conexión
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
