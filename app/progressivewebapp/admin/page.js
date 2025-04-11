'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './admin.css';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('logwear_admin_auth');
    if (isAuthenticated === 'true') {
      router.push('/progressivewebapp/admin/dashboard');
    }
  }, [router]);

  const Credentials = {
    username: 'admin',
    password: 'logwear2025'
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      if (username === Credentials.username && password === Credentials.password) {
        localStorage.setItem('logwear_admin_auth', 'true');
        router.push('/progressivewebapp/admin/dashboard');
      } else {
        setError('Invalid username or password');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <Link href="/progressivewebapp" className="back-link">← Back to Assistant</Link>
        <h1>LOGWEAR Admin</h1>
      </header>
      
      <main className="admin-login-container">
        <div className="admin-login-card">
          <div className="admin-login-logo">
            <div className="logo-circle">
              <span>LW</span>
            </div>
            <h2>Admin Access</h2>
          </div>
          
          {error && <div className="admin-login-error">{error}</div>}
          
          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            
            <button 
              type="submit" 
              className={`admin-login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Authenticating...' : 'Login'}
            </button>
          </form>
          
          <div className="admin-login-help">
            <p>For demo, use:</p>
            <p>Username: <strong>admin</strong></p>
            <p>Password: <strong>logwear2025</strong></p>
          </div>
        </div>
      </main>
    </div>
  );
}