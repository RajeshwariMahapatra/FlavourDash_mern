import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
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
    color: '#ffffff',
    fontSize: '0', // Adjust the font size as needed
    textShadow: '2px 2px 4px rgb(0, 0, 0)', // Adjust the shadow properties as needed
  };

  const buttonStyle = {
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: 'darkorange',
  };

  return (
    <div style={containerStyle}>
      <h1 style={containerContentStyle}>Welcome to the Payment Gateway</h1>
      <Link to="/payment">
        <button style={buttonStyle} className="paymentbutton">Proceed to Payment</button>
      </Link>
    </div>
  );
}

export default HomePage;
