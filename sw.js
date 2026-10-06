const V="ga75-v2";
const SHELL=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png"];
const CDN=["https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js","https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/exporters/GLTFExporter.js","https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"];
self.addEventListener("install",function(e){
e.waitUntil(caches.open(V).then(function(c){
return c.addAll(SHELL).then(function(){return Promise.allSettled(CDN.map(function(u){return fetch(u,{mode:"no-cors"}).then(function(r){return c.put(u,r)})}))})}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){
e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
var r=e.request;if(r.method!=="GET")return;
if(r.mode==="navigate"){e.respondWith(fetch(r).then(function(n){var cp=n.clone();caches.open(V).then(function(c){c.put("index.html",cp)});return n}).catch(function(){return caches.match("index.html")}));return}
e.respondWith(caches.match(r).then(function(h){
var net=fetch(r).then(function(n){if(n&&(n.ok||n.type==="opaque")){var cp=n.clone();caches.open(V).then(function(c){c.put(r,cp)})}return n}).catch(function(){return h});
return h||net}))});
