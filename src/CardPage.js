import React from 'react';
import './CardPage.css';
import CreditCard from './CreditCard'; // Make sure this path is correct
import Footer from './Footer';

const CardPage = () => {
  // Dummy data for the credit card component
  const cardInfo = {
    cardNumber: '1234567890123456',
    expirationDate: '04/24',
  };

  return (
    <div>
      <div className='page-container'>
        <div className="profile-page-container">
            <div className="content-container">
                <div className="text-container">
                <h1 className="balance-title">My Card</h1>
                <p className="balance-amount-card">$1,500</p>
                <p className="balance-description">Your balance</p>
                </div>
                <CreditCard {...cardInfo} />    
            </div>                      
    </div>
    <div className="action-buttons">
                <button className="action-button-card">Add to Apple Wallet</button>
                <button className="action-button-card">Lock Card Temporarily</button>
                <button className="action-button-card">Report an Issue</button>
                <button className="action-button-card">Go to Card Settings</button>
    </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default CardPage;
