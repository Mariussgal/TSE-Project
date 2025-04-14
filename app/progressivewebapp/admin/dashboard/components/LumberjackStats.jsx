import React, { useState, useEffect } from 'react';
import './LumberjackStats.css';

const LumberjackStats = () => {
  const [stats, setStats] = useState({
    activeLumberjacks: 0,
    safetyIncidents: 0,
    weatherAlerts: 0
  });

  const loadStatistics = () => {
    setTimeout(() => {
      setStats({
        activeLumberjacks: Math.floor(Math.random() * 50) + 10, // 10 - 59
        safetyIncidents: Math.floor(Math.random() * 5), // 0 - 4
        weatherAlerts: Math.floor(Math.random() * 3) // 0 - 2
      });
    }, 1000);
  };

  useEffect(() => {
    loadStatistics();
    
    const interval = setInterval(() => {
      loadStatistics();
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stats-container">
      <h2 className="stats-title">Real time statistics</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon active-lumberjacks-icon">👷</div>
          <div className="stat-info">
            <h3>Active workers</h3>
            <p className="stat-value">{stats.activeLumberjacks}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className={`stat-icon ${stats.safetyIncidents > 0 ? 'warning' : 'safe'}`}>⚠️</div>
          <div className="stat-info">
            <h3>Security incidents</h3>
            <p className="stat-value">{stats.safetyIncidents}</p>
          </div>
        </div>
        
        
        <div className="stat-card">
          <div className={`stat-icon ${stats.weatherAlerts > 0 ? 'warning' : 'safe'}`}>🌦️</div>
          <div className="stat-info">
            <h3>Weather alerts</h3>
            <p className="stat-value">{stats.weatherAlerts}</p>
          </div>
        </div>
      </div>
      
      <div className="stats-refresh">
        <button onClick={loadStatistics} className="refresh-button">
          Refresh data 
        </button>
        <span className="last-updated">
          Last update: {new Date().toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default LumberjackStats;