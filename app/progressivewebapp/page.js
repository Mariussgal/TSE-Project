'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './pwa.css';

export default function page(){
  const [activeTab, setActiveTab] = useState('emergency');
  
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [installEvent, setInstallEvent] = useState(null);


  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setInstallEvent(e);
      setShowInstallPrompt(true);
    };
  
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    }, []);

  const handleInstall = () => {
    if (installEvent) {
      installEvent.prompt();
      installEvent.userChoice.then(result => {
        if (result.outcome === 'accepted') {
          console.log('Application installée');
        }
        setShowInstallPrompt(false);
      });
    }
  };

  return (
    <div className="assistant-container">

      {showInstallPrompt && (
        <div style ={{
          position :'fixed',
          bottom: 0,
          left:0,
          right:0,
          background: '#143325',
          borderTop: '2px solid #ff6b35',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <span style ={{ marginLeft : '10px'}}>Install LOGWEAR Assistant on your device</span>
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
                  cursor: 'pointer'
                }}
              >
                Install
              </button>
              <button
                onClick={()=>setShowInstallPrompt(false)}
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
      )}

      <header className="assistant-header">
        <Link href="/" className="back-link">← Back to website</Link>
        <h1>LOGWEAR Assistant</h1>
      </header>
      
      <nav className="assistant-tabs">
        <button 
          className={activeTab === 'emergency' ? 'active' : ''} 
          onClick={() => setActiveTab('emergency')}
        >
          Emergency
        </button>
        <button 
          className={activeTab === 'technical' ? 'active' : ''} 
          onClick={() => setActiveTab('technical')}
        >
          Technical Docs
        </button>
        <button 
          className={activeTab === 'community' ? 'active' : ''} 
          onClick={() => setActiveTab('community')}
        >
          Community
        </button>
      </nav>
      
      <main className="assistant-content">
        {activeTab === 'emergency' && <EmergencySection />}
        {activeTab === 'technical' && <TechnicalSection />}
        {activeTab === 'community' && <CommunitySection />}
      </main>
    </div>
  );
}

function EmergencySection() {
  const [showSosMsg, setShowSosMsg] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  
  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const firstAidItems =[
    {
      title : "Cut injuries",
      setps:["Apply pressure to stop beeding",
        "Clean wound if possible",
        "Apply bandage",
        "Seek medical attention"
        ],
        icon:"🩸"
    },
    {
      title : "Crush injuries",
      setps:["Check for bleeding and broken bones",
        "Immobilize injurend area",
        "Apply cold compress if available",
        "Seek immediate medical attention"
        ],
        icon:"🦴"
    },
    {
      title : "Falls from Height",
      setps:["Do not move victim if back/neck injury suspected",
        "Maintain open airway",
        "Check for other injuries",
        "Call emergency services"
        ],
        icon:"⚠️"
    },

  ]
  return (
      <div className="emegency-section">
        <div className="sos-container">
          <button className="sos-button" onClick={() => setShowSosMsg(true)}>
            SOS EMERGENCY
          </button>
          <p>Press in case of emergency to share your location</p>
        </div>
        <div className="first-aid-guide">
          <h2>First Aid Guide</h2>
          <div className="fisrt-aid-items">
            {firstAidItems.map((item, index)=>(
              <div
                key={index}
                className={`first-aid-item ${expandedItem === index ? 'expanded' : ''}`}
                onClick={() =>toggleItem(index)}
                >
                  <div className="first-aid-header">
                    <div className="first-aid-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <span className="expand-icon">{expandedItem === index ? '−' : '+'}</span>
                  </div>

                  {expandedItem === index && (
                    <div className="fisrt-aid-component">
                      <ol className="steps-list">
                        {item.setps.map((step, stepIndex) =>(
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ol>
                    </div>
                   )}
              </div>
            ))}
          </div>
      </div>
      {showSosMsg && (
        <div className="sos-modal">
          <div className="sos-modal-content">
            <div className="sos-modal-header">

            <h2>SOS Emergency</h2>

            </div>
            <div className="location-status">
              <div className="status-indicator spinning"></div>
              <p>Simulating location sharing...</p>
            </div>
            <div className="location-info">
              <p><strong>Location:</strong> 36°34 54″N 118°45 05.5″W (simulated)</p>
              <div className="map-container">
                <img src="/images/image11.jpg" alt="Map location" className="location-map" />
              </div>
            </div>

            <p className="help-text">In a real implementation, this would share your exact GPS coordinates with emergency services or designated contacts.</p>
            <button 
              onClick={() => setShowSosMsg(false)}
              className="modal-primary-btn"            
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function TechnicalSection() {
  return (
    <div className="technical-section">
      <h2>Technical Documentation</h2>
      
      <div className="materials-docs">
        <div className="material-doc-card">
          <h3>Dyneema®</h3>
          <div className="doc-details">
            <p><strong>Certificate:</strong> EN 381-5 Class 1</p>
            <p><strong>Cut Resistance:</strong> Level 5 (highest)</p>
            <p><strong>Density:</strong> 0.97 g/cm³</p>
            <p><strong>Tensile Strength:</strong> 3.6 GPa</p>
          </div>
          <a href="#" className="doc-download">Download Full Specs (PDF)</a>
        </div>
        
        <div className="material-doc-card">
          <h3>GORE-TEX® Membrane</h3>
          <div className="doc-details">
            <p><strong>Certificate:</strong> EN 343 Class 3:3</p>
            <p><strong>Water Column:</strong> 28,000 mm</p>
            <p><strong>Breathability:</strong> RET &lt; 6</p>
            <p><strong>Material:</strong> ePTFE Membrane</p>
          </div>
          <a href="#" className="doc-download">Download Full Specs (PDF)</a>
        </div>
        
        <div className="material-doc-card">
          <h3>Lavalan® Wool Insulation</h3>
          <div className="doc-details">
            <p><strong>Certificate:</strong> EN ISO 11092</p>
            <p><strong>Thermal Resistance:</strong> 0.425 m²K/W</p>
            <p><strong>Composition:</strong> 100% European wool</p>
            <p><strong>Sustainability:</strong> Biodegradable, renewable</p>
          </div>
          <a href="#" className="doc-download">Download Full Specs (PDF)</a>
        </div>
      </div>
      
      <div className="compliance-section">
        <h3>Safety Compliance</h3>
        <ul className="certification-list">
          <li>EN ISO 11393-6:2019 - Protective clothing for users of hand-held chainsaws</li>
          <li>EN 343:2019 - Protective clothing against rain</li>
          <li>EN ISO 20471:2013+A1:2016 - High visibility clothing</li>
          <li>OEKO-TEX® Standard 100 - Harmful substances free</li>
        </ul>
      </div>
    </div>
  );
}

function CommunitySection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };
  
  return (
    <div className="community-section">
      <h2>Community & Feedback</h2>
      
      <div className="community-posts">
        <div className="community-post">
          <div className="post-header">
            <span className="post-author">Michael T.</span>
            <span className="post-date">3 days ago</span>
          </div>
          <p className="post-content">
            Been using my LOGWEAR jacket for 6 months in northern Canadian forests. 
            The GORE-TEX has held up incredibly well in the snow and rain. Only suggestion 
            would be to add more pocket options for chainsaw tools.
          </p>
          <div className="post-stats">
            <span>12 likes</span>
            <span>3 comments</span>
          </div>
        </div>
        
        <div className="community-post">
          <div className="post-header">
            <span className="post-author">Sarah K.</span>
            <span className="post-date">1 week ago</span>
          </div>
          <p className="post-content">
            Survived my first kickback incident yesterday - the Dyneema protection worked 
            exactly as advertised. Not even a scratch! Worth every penny for the protection alone.
          </p>
          <div className="post-stats">
            <span>28 likes</span>
            <span>7 comments</span>
          </div>
        </div>
        
        <div className="community-post">
          <div className="post-header">
            <span className="post-author">John D.</span>
            <span className="post-date">2 weeks ago</span>
          </div>
          <p className="post-content">
            Working in the PNW, I need gear that can handle constant rain. This jacket keeps 
            me dry even after 8+ hours in downpour. The wool insulation also seems to keep its 
            warming properties even when damp, which is impressive.
          </p>
          <div className="post-stats">
            <span>19 likes</span>
            <span>5 comments</span>
          </div>
        </div>
      </div>
      
      <div className="feedback-form">
        <h3>Send Us Your Feedback</h3>
        {formSubmitted ? (
          <div className="form-success">
            <p>Thank you for your feedback! Our team will review your suggestions.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group color=black">
              <label htmlFor="feedback-type">Feedback Type</label>
              <select id="feedback-type">
                <option value="improvement">Product Improvement</option>
                <option value="feature">New Feature Request</option>
                <option value="experience">Experience Share</option>
                <option value="issue">Issue Report</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Feedback</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Feedback</button>
          </form>
        )}
      </div>
    </div>
  );
}

