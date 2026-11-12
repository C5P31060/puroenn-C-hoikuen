/* おかえりタイムライン　通知を出す係（Service Worker）
   ・アプリを開いているあいだ、アプリから頼まれた通知を、スマホやパソコンの通知として表示する
     （Android の Chrome などは、この係を通さないと通知を出せない）
   ・通知を押したら、開いているアプリの画面に戻る
   ・外部のサービスやサーバーからの通知は使わない
   ※ index.html（アプリのHTML）と同じ場所に置いてください */
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const open = (e.notification.data || {}).open || '';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) {
      if ('focus' in c) { c.postMessage({ type: 'okaeri-open', open }); return c.focus(); }
    }
    return self.clients.openWindow('./');
  }));
});
