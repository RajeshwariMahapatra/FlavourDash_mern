import React from 'react';

const CashPayment = () => {
  const containerStyle = {
    background: 'url("https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2R8ZW58MHx8MHx8fDA%3D&w=500")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const containerContentStyle = {
    textAlign: 'center',
    color: '#000', // Change the text color to black
    fontSize: '32px', // Adjust the font size as needed
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Adjust the shadow properties as needed
  };

  return (
    <div style={containerStyle}>
      <div style={containerContentStyle}>
        <h1>Thank you for ordering! </h1>
      </div>
      <div style={containerContentStyle}>
        <h1>Your delicious food is on its way</h1>
      </div>
    </div>
  );
}

export default CashPayment;
