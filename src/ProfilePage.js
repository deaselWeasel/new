import React from 'react';
import './ProfilePage.css'; // Make sure this path is correct
import CreditCard from './CreditCard';
import Footer from './Footer';


const cardInfo = {
  cardNumber: '1234567890123456',
  expirationDate: '04/24',
};

const ProfilePage = () => {
  return (
    <div className="contact-page-container">
      <div className="top-page-container">
        <p className="card-message">So close to receiving your card</p>
        <div className="card-wrapper">
        <CreditCard {...cardInfo} />
        </div> 
      </div>
      <div className="profile-box">
        <div className="profile-content">
          <div className="profile-text">
            <h2>Set up your Profile</h2>
            <p>Don’t be a stranger, tell us more about you.</p>
          </div>
          <div className="profile-loader">
            {/* Assuming you're using an SVG or an icon library for the loader */}
            <div className="loader-icon"></div>
          </div>
        </div>
      </div>
      <div className="bottom-page-container">
        <p className="unlock-text">Set up your profile to unlock more.</p>
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

export default ProfilePage;
