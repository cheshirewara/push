if (typeof window !== "undefined") {
    document.addEventListener('DOMContentLoaded', function () {
        if ('serviceWorker' in navigator) {
            navigator
            .serviceWorker
            .register('./serviceworker.js')
            .then(function() { console.log('Service Worker Registered'); 
            });
        }
        var push = document.getElementById('push');
        push.addEventListener('click', function () {
            navigator.serviceWorker.ready.then(function (sw) {
                return sw.showNotification("プッシュ通知だよ😁", {
                    body: "通知メッセージ👐",
                    icon: "./icon.png",
                    tag: "tag",
                    actions: [
                        { action: 'action1', title: "ボタンだよ⚡️" },
                        { action: 'action2', title: "こっちもボタン🍑" }
                    ]
                });
            });
        });
    });
}

if (typeof window === "undefined") {
    self.addEventListener('notificationclick', function (event) {
        event.notification.close();

        if (event.action === 'action1') {
            clients.openWindow("/action1");
        } else {
            clients.openWindow("/");
        }
    }, false);
}