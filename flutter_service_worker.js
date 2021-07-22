'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7826e3c646b9ed93ced1ed329540f027",
"index.html": "c210153d446cf3d7eb5a0fe529f5aba9",
"/": "c210153d446cf3d7eb5a0fe529f5aba9",
"main.dart.js": "d28db4f437d747ee72aca450866fa184",
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
".git/config": "c6dcd36eafe8d9225329ef402690f394",
".git/objects/0d/a1b8063089f2cf77f66b55ed909ffdd4cc6afb": "80d9eefdeba0d7cbf3358f5ddf54b9b4",
".git/objects/95/9a891f667d8f2948a626f901d31b6440b51014": "69ad6cdb57b76e7abe51a62580055b65",
".git/objects/3e/73823ad918a5e200262422ff05004e98576835": "ef5e301bc232a52e1df34f361f2fc26f",
".git/objects/03/81c07383033ca36346f97a7890ea642bbf01e7": "4c9f2abe2421ab5e625efbfc62967fc6",
".git/objects/04/ab898ed9c96e0b8fc65b6a1131a1af162acbdb": "c6b8b5b3eced343f0e9dbc64db2bad31",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/558d313181e22e720c5b7da4dee75d64aca715": "65836c0b9d1474e177c68304a38d4966",
".git/objects/0e/31e47586faadff24a749e4cece17a772171556": "67f7b2ce6399f5570b34054d678eaff4",
".git/objects/60/3bfdb05c520591bac1c239bc94f749c9a1c61f": "88a712a2ecba9daf0537866e237bc2d7",
".git/objects/9d/deed05fc7a01108acdff3b832107fd73e93ed1": "2cc3d9f94b607828557bb2b828dddb42",
".git/objects/9c/e849d9a7b24462e142f19ff64a7d1e79b79a98": "42db4a6fb6253de2737c5bf2462fbafa",
".git/objects/02/6b554f8fffb113ec7a2577054d3e9308234569": "c9f4a7950cf8a2f50644b68bae2a7e49",
".git/objects/02/b34244183f7d1467bf0b758735714ebd834ee0": "b72f240432c8a84a2511e7a46f1f6f00",
".git/objects/b2/c0fc60e0230aa9a36783ea128609ad639637dd": "9435df8e5161c765443ff3b8bc635a65",
".git/objects/b2/1e3ca124cb984e2b07f91822cc04f5343495f5": "6aed694e6e3087dad53921ce838aa994",
".git/objects/d9/a62ee752b43802855c318eafe656c8046a4aa0": "f7199d13238ced09c53355cb83e53a1d",
".git/objects/ad/f2e94766d42100f084da4bb6a86fa12afb1f71": "29a46d0bc145e019523e29a93e5fc116",
".git/objects/bb/8703a58656220f348511d78f1962bccfebe812": "cec9270b85f4efb06b08aa3fc57eb648",
".git/objects/d0/94872d687e147e32486fcc5c7f1cee8b72c786": "852cd1992320520eea0641d9627cd3e9",
".git/objects/be/6b291f58b1826ae0feb16d9f1dfafc95805138": "acce594bc35bb0c37ef8d45a8fdbb3ff",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/da/9a8330922b9ed08f06ef36c15b8cda87b97c91": "36681576e93aa9c6f6d9c3a623523d8f",
".git/objects/bd/a9d46f2753d19d244868a3bd57759401fc3e72": "4b5e9b534235f1616d0dda5ead799171",
".git/objects/bd/21b81ae142f32488dbbc63adcb13efbaa17199": "7b1135a9a1db0d223f15abf8053bf8d1",
".git/objects/d1/2a8c5b210f8afa7cd90ca61561b7ac9e204bc1": "a7c979d46caa1b3d12bfd38273c73654",
".git/objects/bc/7316ccd0adeb31d10fceff506aefe095316567": "832cd8fce5c5ca1e68ee5d80b71f62ae",
".git/objects/ae/b806980a69f2ae604ade4443ba3f0e457007c9": "f3a0c9d2ca3aa14c6174deaca0432f09",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/520554f231f7af2e7074ce80d29994dc93f7d1": "0162eab443a26faff6dace72c0dacb04",
".git/objects/f4/16155bc62a15f7ce715db1e10772e580ebe756": "876592f8195577a128672c7c69dd0ba3",
".git/objects/eb/f6f08664d60f1a9088b30d7e130d0f2c55181a": "9d843111abe70cf3ebd107f17b25afbd",
".git/objects/c9/ff9519bc7dbf82ee9d3d02c3c00e45cd6e72e7": "3915ad17df0028d48c6e4434dcd186df",
".git/objects/fd/940ea7cac1b9412fe739eb95cdd349722195f4": "cb96f3625ae2b94b1e9a6c4f0ef92eb5",
".git/objects/f5/ec693053a10fdc45127b36733de1f4ee187720": "be088a3a17cda31f1947a3b76025d26c",
".git/objects/cf/d0e499468858e39ed7dc414a7b308cf6b0aaa5": "a76fd1146875bdfbc0775c0c46dea47c",
".git/objects/fe/54a05d403967aab5968123cac70f84aad4e488": "4abe79823320d9084a65c1c29677c621",
".git/objects/c8/8f3ea2df8b7f476538865cd2143c0f930e6cd3": "fc98118776aba24cf48dcd621a656193",
".git/objects/fb/f757a909306b87444496d2d4aadf33b79f1d0e": "412c305c3e59122258fe0eba36a42f03",
".git/objects/ec/06103546d6b443a6e1c36e499f38c095c70d25": "ee719021dfefa40bed98c9e816aece97",
".git/objects/20/2b758c6a1bf5ce5a50c0a506aae8a1f3ba58ab": "c804c391260ff5a47be9c0a8abfc76bc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/e3da0fc00791fbfee051022cb127e4d6d3ef27": "a723cb1ca9c7f09708b67db9d352da4f",
".git/objects/16/2d955c3662787c6afa726a33b050a60a4c344a": "a9f7b5de603cb87e3b2fbb70670788fd",
".git/objects/16/0c81a005731bb70ee04bde5bb75d593eef0478": "5533004f77917f7d9e7eef20e8735ba9",
".git/objects/45/dae13cea880f00431e9f9e5755e5e3c73fd328": "296216745a17bda66cbf3b72240f6afc",
".git/objects/8a/81e1d066bf4bc16ed4a1a724776a546dbae8f5": "905f6b567347320b2d45f8d8fd276c2f",
".git/objects/8a/1926e8c60707a979da57d9e0ffdf8cd9d01da1": "c2bd04cd0178db2b2ce33d15c39e1306",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/1b5d23584206e1d075610ec45637eaea1d881c": "7746968ae65111a056d3c75f65d2aed5",
".git/objects/4d/f40a054f6f0fb69be9a622db164a0f4d8905b2": "c5ac6404cb2dbc915adce4d61a775292",
".git/objects/44/7cc4a4603ac8722726cd69ffe350505f4d76bb": "07f404e5b57c40d056ea15af5e19720d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/57f00a6dbac9e990b7825a670ea8a3386ee054": "d6cd40b92a5177e04af5e6ab0ea016a8",
".git/objects/38/6d9640167853c0f7343c1798805589eea9e3a7": "cf89cabfe7b7ee30775828e828791ead",
".git/objects/31/e1aeca783251f5fb78924ad6dab02aef6283f1": "f4f1dd6462fb53f84cd2f25ee878d070",
".git/objects/65/fe497f5fb313cf9ddc6e0b92bb378a9aaedbe9": "a8ed5948e8821f1b697c3ea093497217",
".git/objects/62/50c44fc5dd86218ad1d0cb6d2c2b8d1ec33bb0": "596d0a527ba7603ecc95b60e0cd46691",
".git/objects/3a/49439ca062d069c6b97a65cc15d08a15e0520a": "93e5e3c63699080f5f12efbfb192b350",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/01/fd04c3ca861a7ca1a97b273758223dd801047a": "2d4fb68f95e09e2189b538132e18e7a4",
".git/objects/06/e95babe537596a32aa4d7d34c21004a146cfa0": "c7f90456f4e1712b268967bdb51995aa",
".git/objects/99/28883bd7e1c165d02c70a34234654015753805": "295312e88f76c25abc014093686998a9",
".git/objects/52/5b3544a3cc0d0e5d4f6a076458ab487a75f62c": "092944d41c224b06f3b96a7753023df2",
".git/objects/97/b0148a6a8fb3f9e4320275ccbc60ba0c6f482a": "059510b8a10ce338e51e39428c20966b",
".git/objects/90/20d431d32dce0b07938fdfd2d88c7ab2a27c64": "1946b271816cd9e8312deb3f822a3b0d",
".git/objects/ba/e1249f72bb2937b7d899c67c9005c592200ac4": "d1a9e054e48041712ebf01817e2c81b1",
".git/objects/a0/7591bdb30591e78824958d66f6ab74b0745e23": "21c6d3ab58dd4d57ed43641cd9ca10ba",
".git/objects/a0/ae1efec4a8691e0fa1db825367a2cfde9d6eb7": "33b6928e222642befdb94e810318d848",
".git/objects/b8/f0b1fdf5e0b83812c7b940ee8861b70779af07": "4c815b9d84b5d0d27a8719d86760cf7b",
".git/objects/d2/b920205719319bdd3ede87ef041525beea6d32": "829e9908508cc3e7f3432a68a3605862",
".git/objects/d2/2d02cb945eb916c4c8c365c35f062f97933c5e": "6835a57cb6cb4d0c1ebb2b08107dd48c",
".git/objects/aa/13f48ff0ac29b7f4084cda6efde1c5423f2c4a": "932fa12baa6169c530fd4e7465953187",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/470628c84363747063bba448fd68eaf9227cbf": "da678ebf1044c3f2e7fa9b9f53dd49d0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/10c382a8a6870595dbcd29e69d065f4cfbf37f": "789df4dc1dd73c9a556980765fcaf879",
".git/objects/ea/40cf98ced2718abb6688ce9ad3f00340a92620": "e30e3aba6672934d1d5897dd824ccfcf",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/1cd04206c6ce49265861461383d4389e075880": "cce298aa616d83471451fb1f3a93d907",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e0/60cce06d89b363592ec9aaed0834b2b7b34cb5": "cadf2bf0edc83840593fad2106bcfe3e",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/2c/12e1accbc8d96c391892fd58c9363a29db935f": "ce24e72b064775c28868ee230606b6f7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4f/afb2ce54f1c83bd2dea4b58c4bbf09e8575302": "d3e32e2b7c05fc626fc88818700df140",
".git/objects/12/4bf4a9e1aa505deade0568002e109cfde07f3d": "5f0ada37393c5a1c640c9b1e2c671a0a",
".git/objects/85/82d5ff6d6f53d0dc7ee644cffaa2780cf4b609": "0e49e856e3c4434076af25cfb6f398d9",
".git/objects/1d/0bb6c138d4c76c91f936026a148a98dba4ddb3": "bd01ea37544ab7b8afbc248fe4728bb1",
".git/objects/76/862ce527d5c3d367dc9a46ff41a374e6f0511d": "315df39eab94c20ff37d1f544ad1f27f",
".git/objects/82/b49801493ff437846a08063a4347d872be0ba1": "22abe91a4b31bb6145580eb9290b20b2",
".git/objects/22/1712bc1bc11fa8db01b0d0f37d0114bad6bb7d": "92e6368c5d6b01b7667a1f67ef811562",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "73564e014ecefede92bf881fcf52899d",
".git/logs/refs/heads/master": "91675295ea83032c58b7f31fa123b3cb",
".git/logs/refs/heads/main": "7a31a6d7c0767cf4b25ee1bb12efe17c",
".git/logs/refs/remotes/origin/main": "3dd1fc591bd972272ea9dda0b9220254",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "637100e78d5e0c9f3d0849736c6de771",
".git/refs/heads/main": "eeeaccf1b27477fb44a0294677cc2851",
".git/refs/remotes/origin/main": "eeeaccf1b27477fb44a0294677cc2851",
".git/index": "5f8e81551663db76f20fc4d0149723ed",
".git/COMMIT_EDITMSG": "cc37c26b9e916e9127b8e2c8c301a048",
".git/FETCH_HEAD": "06c1011510db426c91b4e8405247c8e4",
"assets/locales/id.json": "8ee4937b587806aa19882beb8fe38447",
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
