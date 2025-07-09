import React from 'react';
import { FaUserTie, FaBuilding, FaCalculator } from 'react-icons/fa';

function UseCases() {
  const containerStyle = {
    width: '100%',
    padding: '20px',
    backgroundColor: '#1E201E',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
  };

  const useCaseStyle = {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    borderRadius: '8px',
    margin: '10px 0',
    color: '#03346E',
    fontSize: '1.5rem',
  };

  const iconStyle = {
    fontSize: '2rem',
    marginRight: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#F3FDE8', marginBottom: '30px' }}>Use Cases</h2>

      <div style={{ ...useCaseStyle, backgroundColor: '#FFCCEA' }}>
        <FaUserTie style={iconStyle} />
        <span>Personal Banking</span>
      </div>

      <div style={{ ...useCaseStyle, backgroundColor: '#f39c12' }}>
        <FaBuilding style={iconStyle} />
        <span>Corporate Transactions</span>
      </div>

      <div style={{ ...useCaseStyle, backgroundColor: '#BFECFF' }}>
        <FaCalculator style={iconStyle} />
        <span>Automated Accounting</span>
      </div>
    </div>
  );
}

export default UseCases;
