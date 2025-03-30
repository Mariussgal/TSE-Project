'use client'
import React, { useState, useEffect } from 'react';

export default function UpdateNotification() {
  const [showReload, setShowReload] = useState(false);

  useEffect(() => {
    const handleServiceWorkerUpdate = () => {
      setShowReload(true);
    };

    window.addEventListener('serviceWorkerUpdateAvailable', handleServiceWorkerUpdate);
    
    return () => {
      window.removeEventListener('serviceWorkerUpdateAvailable', handleServiceWorkerUpdate);
    };
  }, []);

  const reloadPage = () => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  };

  if (!showReload) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#143325',
      borderTop: '2px solid #ff6b35',
      padding: '10px 20px',
      zIndex: 1000,
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
      maxWidth: '400px'
    }}>
      <p style={{ margin: '0', color: 'white' }}>New version available!</p>
      <button
        onClick={reloadPage}
        style={{
          background: '#ff6b35',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginLeft: '10px'
        }}
      >
        Update!
      </button>
    </div>
  );
}