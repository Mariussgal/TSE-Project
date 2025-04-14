import React, { useState, useEffect } from 'react';
import './LumberjackTable.css';

const LumberjackTable = () => {
  const [lumberjacks, setLumberjacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      const mockLumberjacks = [
        {
          id: 1,
          name: 'Jean Dubois',
          location: 'North sector',
          status: 'Active',
          lastActive: 'Now',
        },
        {
          id: 2,
          name: 'Marie Lambert',
          location: 'East sector',
          status: 'Pause',
          lastActive: '15 min ago',
        },
        {
          id: 3,
          name: 'Pierre Martin',
          location: 'West sector',
          status: 'Active',
          lastActive: 'Now',
        },
        {
          id: 4,
          name: 'Sophie Renard',
          location: 'South sector',
          status: 'Active',
          lastActive: '1 min ago',
        },
        {
          id: 5,
          name: 'Michel Blanc',
          location: 'North-west Sector',
          status: 'Inactive',
          lastActive: '30 min ago',
        }
      ];
      
      setLumberjacks(mockLumberjacks);
      setIsLoading(false);
    }, 1500);
  }, []);

  const getStatusClass = (status) => {
    switch(status) {
      case 'Active':
        return 'status-active';
      case 'Pause':
        return 'status-pause';
      case 'Inactive':
        return 'status-inactive';
      default:
        return '';
    }
  };
  

  return (
    <div className="lumberjack-table-container">
      <h2 className="table-title">Workers onfield</h2>
      
      {isLoading ? (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Loading data...</p>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="lumberjack-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Localisation</th>
                  <th>Status</th>
                  <th>Last activity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {lumberjacks.map(lumberjack => (
                  <tr key={lumberjack.id}>
                    <td>{lumberjack.name}</td>
                    <td>{lumberjack.location}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(lumberjack.status)}`}>
                        {lumberjack.status}
                      </span>
                    </td>
                    <td>{lumberjack.lastActive}</td>

                    <td>
                      <div className="table-actions">
                        <button className="action-button contact-btn" title="Contact">
                          📞
                        </button>
                        <button className="action-button location-btn" title="See localisation">
                          📍
                        </button>
                        <button className="action-button more-btn" title="More options">
                          ⋮
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="table-pagination">
            <span className="pagination-info">Page 1/1</span>
            <button className="pagination-button">Next &gt;</button>
          </div>
        </>
      )}
    </div>
  );
};

export default LumberjackTable;