'use client'
import React, { useState, useEffect } from 'react';

export default function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    setIsOffline(!navigator.onLine);
    
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '70px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#143325',
      border: '2px solid #ffa500',
      padding: '10px 20px',
      zIndex: 1000,
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      width: '90%',
      maxWidth: '300px'
    }}>
      <div style={{
        fontSize: '1.5rem',
        marginBottom: '5px',
        color: '#ffa500'
      }}>📶</div>
      <div style={{
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#ffa500'
      }}>OFFLINE</div>
      <div style={{
        fontSize: '0.8rem',
        color: 'white'
      }}>
        Currently in offline mode
        <br />
        some functonalities could be limited
      </div>
    </div>
  );
}