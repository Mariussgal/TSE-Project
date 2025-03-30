if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('service woker saved:', registration.scope);
          
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
              return;
            }
            
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log('New version available!');
                  
                  const event = new CustomEvent('serviceWorkerUpdateAvailable');
                  window.dispatchEvent(event);
                } else {
                  console.log('offline utilisation');
                }
              }
            };
          };
        })
        .catch(error => {
          console.log('Service worker registration failed:', error);
        });
    });
  }