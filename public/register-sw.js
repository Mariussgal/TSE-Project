if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('service woker saved:', registration.scope);
          
          setInterval(() => {
            registration.update();
            console.log('Service Worker updates verification...');
          }, 6 * 60 * 60 * 1000);

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
                  if (Notification.permission === 'granted') {
                    navigator.serviceWorker.ready.then(registration => {
                      registration.showNotification('LOGWEAR', {
                        body: 'Application successfully installed. Disponible offline.',
                        icon: '/icons/icon-192x192.png'
                      });
                    });
                  }
                }
              }
            };
          };
        })
        .catch(error => {
          console.log('Service worker registration failed:', error);
        });
        if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
          Notification.requestPermission();
        }
      });
      navigator.serviceWorker.addEventListener('message', event => {
        if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
          console.log('SW Message: Update available');
        
          const updateEvent = new CustomEvent('serviceWorkerUpdateAvailable');
          window.dispatchEvent(updateEvent);
        }
    });
  }