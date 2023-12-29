// VerificationPage.js
import React, { useState, useRef } from 'react';
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
  const customIcon = <YourCustomIcon className="custom-spin-icon" style={{ fontSize: 34 }} />;

  const handleChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value.replace(/[^0-9]/g, '');

    setPin(newPin);

    if (newPin[index] && index < 3) {
      inputRefs.current[index + 1].current.focus();
    }

    // If all inputs have values, initiate the loading state
    if (newPin.every(digit => digit !== '') && index === 3) {
      setIsLoading(true);
      // Trigger the verification process here
      // After the verification process, you should update the loading state accordingly
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
                ref={inputRefs.current[index]}
                disabled={isLoading}
              />
            ))}
          </div>
          <div className='verification-button-container'>
          <CustomButton text="Next: Activate my card"  type="primary1"  disabled={isLoading}  ></CustomButton>
          <CustomButton text="Resend Verification Code" type = "secondary1" disabled={isLoading} ></CustomButton>
          <CustomButton text="Verify another way" type ="secondary1" disabled={isLoading} ></CustomButton>
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
          <Footer/>
    </div>
        
      );
    };
    
    export default VerificationPage;
