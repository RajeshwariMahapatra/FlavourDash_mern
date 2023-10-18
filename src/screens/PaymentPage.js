import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  const pageStyle = {
    background: 'url("https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2R8ZW58MHx8MHx8fDA%3D&w=500")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const containerStyle = {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '0px', /* Adjust the font size as needed */
    textShadow: '2px 2px 4px rgb(0, 0, 0)', /* Adjust the shadow properties as needed */
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

  const imageStyle = {
    verticalAlign: 'middle',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    margin: '20px',
    animation: 'rotate 2s linear infinite',
  };

  const h1Style = {
    fontSize: '32px',
  };

  return (
    <div style={pageStyle}>
      <div className="paymentcontainer paymentpage-bg" style={containerStyle}>
        <h1 style={h1Style}>Choose a Payment Method</h1>
        <Link to="/payment/cash">
          <button className="paymentbutton" style={buttonStyle}>Cash Payment</button>
        </Link>
        <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
          <button className="paymentbutton" style={buttonStyle}>PayPal</button>
        </a>
        <img
        src="https://cdn1.iconfinder.com/data/icons/contact-us-31/65/37-1024.png"
        alt="Animated Image"
        className="image"
        style={{ width: '70px', height: '70px' }}
      />
      </div>
    </div>
  );
};

export default PaymentPage;
