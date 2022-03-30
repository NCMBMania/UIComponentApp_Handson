const $ = Dom7;

// Monacaアプリの場合はdeviceready、プレビューの場合はDOMContentLoaded
const event = window.cordova ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(event, async (e) => {
  // 設定ファイルの読み込み
  const config = await (await fetch('./js/config.json')).json();
  // NCMBの初期化
  window.ncmb = new NCMB(config.applicationKey, config.clientKey);
  // Mapboxの初期化
  mapboxgl.accessToken = config.mapboxToken;
  // Framework7の初期化
  window.app = new Framework7({
    el: '#app', // App root element
    name: 'framework7-core-tab-view', // App name
    theme: 'auto', // Automatic theme detection
    routes: routes,
  });
});
