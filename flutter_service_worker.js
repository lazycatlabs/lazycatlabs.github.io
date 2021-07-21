'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7826e3c646b9ed93ced1ed329540f027",
"index.html": "8db6ddf108ab86fb4c13779f4ed2786b",
"/": "8db6ddf108ab86fb4c13779f4ed2786b",
"main.dart.js": "ceaaa4ebc1d8a464842614c591111769",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "94bd43341db4aa51772a78e1bf7aa425",
"icons/favicon.ico": "a735fa0d46998bbc65cef32fd78b9759",
"icons/apple-icon.png": "2c5691e72b83761af374e09cb8e267f8",
"icons/apple-icon-144x144.png": "212247551a3d75741b0b24cdc5f14d93",
"icons/android-icon-192x192.png": "ebb11bd44d0798aed3c7a5694bb82721",
"icons/apple-icon-precomposed.png": "2c5691e72b83761af374e09cb8e267f8",
"icons/apple-icon-114x114.png": "cf667202b6330bbc7763902db59614e3",
"icons/ms-icon-310x310.png": "89718ba472f4a608fed9dd5961d117f3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/ms-icon-144x144.png": "212247551a3d75741b0b24cdc5f14d93",
"icons/apple-icon-57x57.png": "e42e737cf7bf784d7419a646b20bb873",
"icons/apple-icon-152x152.png": "905b07b750dc3a06e53c262c3a5ab0af",
"icons/ms-icon-150x150.png": "d21bd3ad6be997f70667b53f1293f8fd",
"icons/android-icon-72x72.png": "4d85cc9cca2e0222286f4448055ecf1b",
"icons/android-icon-96x96.png": "3074f5e565965167e8059ebee3ddc886",
"icons/android-icon-36x36.png": "13a24f4ea2bdfd61e79665c230af8d5a",
"icons/apple-icon-180x180.png": "f36b3db7ad98f7730e1f6b5a68708964",
"icons/favicon-96x96.png": "3074f5e565965167e8059ebee3ddc886",
"icons/android-icon-48x48.png": "583e5969724089aa123dfb2de262075a",
"icons/apple-icon-76x76.png": "a1cbab5ab15b1fc45af58dc4bf28186f",
"icons/apple-icon-60x60.png": "b6c7b0f96e8bd8f21729a3a73f2a59eb",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "212247551a3d75741b0b24cdc5f14d93",
"icons/apple-icon-72x72.png": "4d85cc9cca2e0222286f4448055ecf1b",
"icons/apple-icon-120x120.png": "870a02eab74e24d1549478d36bfc6302",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "e25fdbbf7e26845d1a29028b00064a74",
"icons/ms-icon-70x70.png": "9481cade8da7bca72bc6626207eea3d9",
"manifest.json": "ed53a1d782d166e1613be4368f397158",
"assets/locales/id.json": "c63715cf72083218e1e3c010ab16613f",
"assets/AssetManifest.json": "364ac3d83e14294347f95b0549de7135",
"assets/NOTICES": "f383e49b1e14c90407eba9aac18dcbc6",
"assets/FontManifest.json": "f46f534c69b0c524a07e5fa9a20d4843",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/ic_profile.svg": "7a3f2544085a206f5a4b4441004f4621",
"assets/assets/images/img_brupedia.jpg": "43e9d5ca495f5c5f662e74dd45c54109",
"assets/assets/images/ic_home.svg": "adb61bffce63970484bc18ae57bdc6cb",
"assets/assets/images/ic_logo_text.svg": "f2fc4d1242b7a3cbd7ceb102065f24dd",
"assets/assets/images/bg_home.svg": "0f27ed4f0c19d909761a7d95dfe11a4e",
"assets/assets/images/img_mobilaku.jpg": "99d053bef6301ddc240ca18db7f84028",
"assets/assets/images/ic_coffee.svg": "ce24d22bf9bec6c378ac2c65e05809de",
"assets/assets/images/ic_logo.svg": "70be640137ce7adb1de7c62fe8450479",
"assets/assets/images/img_lutim.jpg": "b6318bb87e0d62430cf9cf22095bd493",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
