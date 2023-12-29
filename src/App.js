import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './SplashPage';
import ProfileSetupPage from './ProfileSetupPage'; 
import WellPlusPage from './WellPlusPage';
import OffersPage from './OfferPage';
import ProfilePage from './ProfilePage';
import CardPage from './CardPage';
import HomePage2 from './HomePage2';
import ActivityPage from './ActivityPage/ActivityPage'; 
import Step1 from './step4/step1';
import BookingPage from './BookingPage/Booking';
import VerificationPage from './VerificationPage/VerificationPage';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/setup" element={<ProfileSetupPage />} /> 
          <Route path="/verify" element={<VerificationPage />} /> 
          <Route path="/booking" element={<BookingPage />} /> 
          <Route path="/step1" element={<Step1 />} />         
          <Route path="/activity" element={<ActivityPage />} /> 
          <Route path="/offers" element={<OffersPage />} />     
          <Route path="/profile" element={<ProfilePage/>} />   
          <Route path="/card" element={<CardPage />} />  
          <Route path="/homepage2" element={<HomePage2 />} />  
          <Route path="/plus" element={<WellPlusPage/>} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;