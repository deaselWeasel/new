import React from 'react';
import './HomePage2.css'; // Make sure this path is correct
import CreditCard from './CreditCard';
import Footer from './Footer';


const cardInfo = {
  cardNumber: '1234567890123456',
  expirationDate: '04/24',
};

const HomePage2 = () => {
  return (
    <div className="contact-page-container">
      <div className="top-of-page-container">
        <div className="content-container">
                <div className="text-container">
                <h1 className="balance-title">Home</h1>
                <p className="balance-amount">$1,500</p>
                <p className="balance-description">Your balance</p>
                </div>
                <div className='card-wrapper'>
                <CreditCard {...cardInfo} /> 
                </div>                  
            </div> 
      </div>
      <div className="action-buttons">
                <button className="action-button">Book an Appointment</button>
        </div> 
      <div className="bottom-page-container">
        <p className="unlock-text">You're all caught up</p>
      </div>
      <Footer
                customStyle="offers-footer"
                wellTextStyle="offers-wellText"
                iconColor="#5E4DB2" /* Change the icon color as needed */
                backgroundColor="yellow" /* Change the background color as needed */
                buttonOpacity={1} /* Change the button opacity as needed */
            />
    </div>
  );
};

export default HomePage2;
