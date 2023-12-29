import React from 'react';
import './OffersPage.css';
import Footer from './Footer';
import imageOne from './images/image 1.png'; // Update with the path to your image
import imageTwo from './images/image 2.png'; // Update with the path to your image


const OffersPage = () => {

    return (
        <div className="offers-page-container">
            <div className="central-alignment-container">
                <div className='offers-header'>
                    <h1 className='offers-title'>Offers</h1>
                    <p className='offers-description'>Offers you join will be converted<br/>into points here</p>
                </div>
                <div className="white-rectangle-box">
                    {/* ... Your offer containers ... */}
                    <div className="offer-container">
                    <img src={imageOne} alt="Offer One" className="offer-image" />
                    <h2 className="offer-title">Last minute physio sessions</h2>
                    <p className="offer-description">Book now and get discounted physio</p>
                </div>
                <div className="offer-container">
                    <img src={imageTwo} alt="Offer Two" className="offer-image" />
                    <h2 className="offer-title">Join Well Plus</h2>
                    <p className="offer-description">And get unlimited access to GPs</p>
                </div>
                </div>
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

export default OffersPage;

