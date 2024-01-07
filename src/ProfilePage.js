import React from 'react';
import './ProfilePage.css'; // Make sure this path is correct
import CreditCard from './CreditCard';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const cardInfo = {
  cardNumber: '1234567890123456',
  expirationDate: '04/24',
};

const ProfilePage = () => {

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/setup');
  };

  return (
    <div className="contact-page-container">
      <div className="top-page-container">
        <p className="card-message">So close to receiving your card</p>
        <div className="card-wrapper">
        <CreditCard {...cardInfo} />
        </div> 
      </div>
      <button className="profile-box" onClick={handleProfileClick} type="button">
      <div className="profile-content">
        <div className="profile-text">
          <h2>Set up your Profile</h2>
          <p>Don’t be a stranger, tell us more about you.</p>
        </div>
        <div className="profile-loader">
          {/* Loader icon here */}
          <div className="loader-icon"></div>
        </div>
      </div>
    </button>
      <div className="profile-bottom-page-container">
        <p className="profile-unlock-text">Set up your profile to unlock more.</p>
      </div>
      <Footer iconColor="#5E4DB2"/>
    </div>
  );
};

export default ProfilePage;
