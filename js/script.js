// Write JavaScript here       
Push.Permission.request();
Push.create('こんにちは！', {
  body: '更新をお知らせします！',
  icon: 'https://cheshire-wara.com/wp-content/uploads/2016/07/cropped-fabicon512-192x192.png',
  timeout: 8000, // 通知が消えるタイミング
  vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
  onClick: function() {
    // 通知がクリックされた場合の設定
    console.log(this);
  }
});