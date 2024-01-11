// VerificationPage.js
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Spin } from 'antd';
import './VerificationPage.scss';
import backgroundImage from './../images/bg1.jpg';
import CustomButton from '../CustomButton';
import { ReactComponent as YourCustomIcon } from './../images/loading-waiting.1 1.svg';
import Footer from '../Footer';

const VerificationPage = () => {
  const [pin, setPin] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([...Array(4)].map(() => React.createRef()));
  const navigate = useNavigate();
  const customIcon = <YourCustomIcon className="custom-spin-icon" style={{ fontSize: 34 }} />;

  const handleChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value.replace(/[^0-9]/g, '');
    setPin(newPin);

    if (newPin[index] && index < 3) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleBackspace = (event, index) => {
    if ((event.key === 'Backspace' || event.key === 'Delete') && index > 0) {
      if (pin[index] === '') {
        inputRefs.current[index - 1].current.focus();
        handleChange('', index - 1);
      }
    }
  };

  const handleVerification = () => {
    if (pin.every(digit => digit) && pin.length === 4) {
      setIsLoading(true);
      // Initiate the verification process here
      // Simulating a fake API call with setTimeout
      setTimeout(() => {
        // This is where you would normally check if the PIN is correct
        // For now, we'll assume it's always correct and navigate to '/homepage2'
        navigate('/homepage2');
      }, 2000); // Fake API call delay
    }
  };

  return (
    <div className="verification-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <div className="verification-content">
          <h1 className="verification-title">Almost there</h1>
          <p className="verification-description">
            Enter the verification code we've just sent to <br/>your phone.
          </p>
          <div className="verification-inputs">
            {pin.map((digit, index) => (
              <Input
                key={index}
                className="verification-digit-input"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                ref={inputRefs.current[index]}
                disabled={isLoading}
                type="tel"
              />
            ))}
          </div>
          <div className='verification-button-container'>
            <CustomButton
              text="Next: Activate my card"
              type="primary1"
              disabled={isLoading || pin.some(digit => !digit)}
              onClick={handleVerification}
            />
            {/* Other buttons */}
            <CustomButton text="Resend Verification Code" type="secondary1" disabled={isLoading}></CustomButton>
            <CustomButton text="Verify another way" type="secondary1" disabled={isLoading}></CustomButton>
          </div>
          
          {isLoading && (
            <div className="verification-loading">
              <Spin indicator={customIcon} />
            </div>
          )}
        </div>       
      </div> 
      {isLoading && (
        <div className="verification-message">
          <p>Just a moment while we verify your pin.</p>
        </div>
      )}   
      <div className="disable-footer-menu">
      <Footer
        buttonOpacity={0.2}
      />
      </div>
    </div>
  );
};

export default VerificationPage;
