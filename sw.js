// Minimal service worker so browsers allow "Install app".
// It does not store any patient data — every request goes straight to the network.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
