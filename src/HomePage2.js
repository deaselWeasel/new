import React from 'react';
import './HomePage2.css'; // Make sure this path is correct
import CreditCard from './CreditCard';
import Footer from './Footer';
import { Link } from 'react-router-dom';


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
        <Link to="/booking">
          <button className="action-button">Book an Appointment</button>
        </Link> 
        <Link to="/plus">
          <button className="ghost-button">View Offers</button>
        </Link>    
        </div> 
      <div className="bottom-page-container">
        <p className="unlock-text">You're all caught up</p>
      </div>
      <Footer iconColor="#5E4DB2"/>
    </div>
  );
};

export default HomePage2;
