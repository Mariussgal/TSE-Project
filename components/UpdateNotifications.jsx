'use client'
import React, { useState, useEffect } from 'react';

export default function UpdateNotification() {
  const [showReload, setShowReload] = useState(false);
  const [updateAnimated, setUpdateAnimated] = useState(false);

  useEffect(() => {
    const handleServiceWorkerUpdate = () => {
      setShowReload(true);
      setTimeout(() => {
        setUpdateAnimated(true);
      }, 500);
    };

    window.addEventListener('serviceWorkerUpdateAvailable', handleServiceWorkerUpdate);
    
    const pendingUpdate = localStorage.getItem('pendingUpdate');
    if (pendingUpdate) {
      setShowReload(true);
      setUpdateAnimated(true);
    }

    return () => {
      window.removeEventListener('serviceWorkerUpdateAvailable', handleServiceWorkerUpdate);
    };
  }, []);

  const reloadPage = () => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
    localStorage.removeItem('pendingUpdate');
    window.location.reload();
  };

  const dismissUpdate = () => {
    setShowReload(false);
    localStorage.setItem('pendingUpdate', 'true');
  };

  if (!showReload) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: updateAnimated ? 'translateX(-50%) scale(1.05)' : 'translateX(-50%)',
      background: '#143325',
      borderTop: '2px solid #ff6b35',
      padding: '15px 20px',
      zIndex: 1000,
      borderRadius: '8px',
      boxShadow: updateAnimated ? '0 6px 20px rgba(255, 107, 53, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      width: '90%',
      maxWidth: '400px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      animation: updateAnimated ? 'pulse 2s infinite' : 'none'
    }}>
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2); }
          50% { box-shadow: 0 4px 20px rgba(255, 107, 53, 0.6); }
          100% { box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2); }
        }
      `}</style>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ 
          backgroundColor: '#ff6b35', 
          borderRadius: '50%', 
          width: '32px', 
          height: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '18px',
          marginRight: '12px'
        }}>
          ↻
        </div>
        <p style={{ margin: '0', color: 'white', fontWeight: 'bold', flex: 1 }}>Update available!</p>
      </div>
      
      <p style={{ margin: '0 0 15px 0', color: '#ccc', fontSize: '0.9rem' }}>
        New version of the app with new functionalities is available.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={dismissUpdate}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Later
        </button>
        <button
          onClick={reloadPage}
          style={{
            background: '#ff6b35',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Update Now!
        </button>
      </div>
    </div>
  );
}