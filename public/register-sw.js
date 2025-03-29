if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker validated:', registration.scope);
        })
        .catch(error => {
          console.log('Service worker not validated:', error);
        });
    });
  }