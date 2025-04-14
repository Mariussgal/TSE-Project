'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../admin.css';
import './dashboard.css';
import LumberjackStats from './components/LumberjackStats';
import LumberjackTable from './components/LumberjackTable';

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('logwear_admin_auth');
    if (isAuthenticated !== 'true') {
      router.push('/progressivewebapp/admin');
    } else {
      setIsLoading(false);
      
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      setCurrentDate(now.toLocaleDateString('en-US', options));
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
        <Link href="/progressivewebapp" className="back-link">← Back to app</Link>
        <h1>LOGWEAR Admin Dashboard</h1>
        <button onClick={handleLogout} className="admin-logout-button">Logout</button>
      </header>
      
      <main className="dashboard-container">
        <div className="dashboard-header">
          <h2>Overview</h2>
          <div className="dashboard-date">{currentDate}</div>
        </div>
        
        <div className="dashboard-main-content">
          <div className="dashboard-left-column">
            <LumberjackStats />
            
            <LumberjackTable />
          </div>
          
          <div className="dashboard-right-column">
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3 className="dashboard-card-title">Recent notifications</h3>
              </div>
              <div className="notification-list">
                <div className="notification-item urgent">
                  <div className="notification-icon">🚨</div>
                  <div className="notification-content">
                    <p className="notification-message">Weather alert: Strong winds expected in the West sector</p>
                    <span className="notification-time">30 minutes ago</span>
                  </div>
                </div>
                
                <div className="notification-item">
                  <div className="notification-icon">📋</div>
                  <div className="notification-content">
                    <p className="notification-message">Equipment inspection scheduled for tomorrow</p>
                    <span className="notification-time">2 hours ago</span>
                  </div>
                </div>
                
                <div className="notification-item">
                  <div className="notification-icon">👷</div>
                  <div className="notification-content">
                    <p className="notification-message">New lumberjack added: Thomas Dubois</p>
                    <span className="notification-time">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3 className="dashboard-card-title">Quick actions</h3>
              </div>
              <div className="quick-actions">
                <button className="quick-action-btn">
                  <span className="action-icon">📢</span>
                  <span className="action-text">Send an alert</span>
                </button>
                
                <button className="quick-action-btn">
                  <span className="action-icon">📋</span>
                  <span className="action-text">Activity report</span>
                </button>
                
                <button className="quick-action-btn">
                  <span className="action-icon">👷</span>
                  <span className="action-text">Add a lumberjack</span>
                </button>
                
                <button className="quick-action-btn">
                  <span className="action-icon">🛠️</span>
                  <span className="action-text">Maintenance</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}