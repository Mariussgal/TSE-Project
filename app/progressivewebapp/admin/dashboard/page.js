'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../admin.css';
import './dashboard.css';

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('logwear_admin_auth');
    if (isAuthenticated !== 'true') {
      router.push('/progressivewebapp/admin');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('logwear_admin_auth');
    router.push('/progressivewebapp/admin');
  };

  if (isLoading) {
    return (
      <div className="admin-container">
        <div className="admin-loading">
          <div className="admin-loading-spinner"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <header className="admin-header">
        <Link href="/progressivewebapp" className="back-link">← Back to Assistant</Link>
        <h1>LOGWEAR Admin Dashboard</h1>
        <button onClick={handleLogout} className="admin-logout-button">Logout</button>
      </header>
      
      <main className="dashboard-container">
        <p className="dashboard-placeholder">Dashboard content will be added soon</p>
      </main>
    </div>
  );
}