'use client'
import React, { useState, useEffect } from 'react';

export default function InstallPrompt() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [installEvent, setInstallEvent] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const hasUserDismissed = localStorage.getItem('installPromptDismissed');
    if (hasUserDismissed) {
      setDismissed(true);
    }

    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setInstallEvent(e);
      
      if (!hasUserDismissed) {
        setShowInstallPrompt(true);
      }
    };
  
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    
    const isAppInstalled = window.matchMedia('(display-mode: standalone)').matches;
    if (isAppInstalled) {
      setShowInstallPrompt(false);
    }
    
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstall = () => {
    if (installEvent) {
      installEvent.prompt();
      installEvent.userChoice.then(result => {
        if (result.outcome === 'accepted') {
          console.log('PWA installed');
          setShowInstallPrompt(false);
        }
      });
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setDismissed(true);
    localStorage.setItem('installPromptDismissed', Date.now().toString());
    
    setTimeout(() => {
      localStorage.removeItem('installPromptDismissed');
    }, 7 * 24 * 60 * 60 * 1000);
  };

  if (!showInstallPrompt || dismissed) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#143325',
      borderTop: '2px solid #ff6b35',
      padding: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.2)'
    }}>
      <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
        <div style={{ 
          marginRight: '15px', 
          backgroundColor: '#ff6b35', 
          borderRadius: '50%', 
          width: '40px', 
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px'
        }}>📱</div>
        <div>
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Install LOGWEAR</div>
          <div style={{ fontSize: '0.8rem' }}>Quickly access the assistant app even while beeing offline.</div>
        </div>
      </div>
      <div>
        <button
          onClick={handleInstall}
          style={{
            background: '#ff6b35',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            marginRight: '10px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Install
        </button>
        <button
          onClick={handleDismiss}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer'
          }} 
        >
          x
        </button>
      </div>
    </div>
  );
}