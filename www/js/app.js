const $ = Dom7;

(async () => {
  const config = await (await fetch('./js/config.json')).json();
  window.ncmb = new NCMB(config.applicationKey, config.clientKey);
  mapboxgl.accessToken = config.mapboxToken;
  window.app = new Framework7({
    el: '#app', // App root element
    name: 'framework7-core-tab-view', // App name
    theme: 'auto', // Automatic theme detection
    routes: routes,
  });
})();
