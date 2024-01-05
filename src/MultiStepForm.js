import React, { useState } from 'react';
import './MultiStepForm.css';
import './CustomButton.scss';
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import CustomStep from './CustomStep';
import { ReactComponent as DateIcon } from './images/DateIcon.svg';

const fieldGroups = [
    [
      { label: 'First Name', placeholder: 'John', type: 'text', key: 'firstName' },
      { label: 'Last Name', placeholder: 'Citizen', type: 'text', key: 'lastName' },
      { label: 'Date of Birth', placeholder: 'Select date', type: 'date', key: 'dob' },
    ],
    [
      { label: 'Last Name', placeholder: 'Citizen', type: 'text', key: 'lastName' },
      { label: 'Date of Birth', placeholder: 'Select date', type: 'date', key: 'dob' },
      { label: 'Medicare Card Number', placeholder: '1234 5678 9012', type: 'number', key: 'medicare' },
    ],
    [
      { label: 'Date of Birth', placeholder: 'Select date', type: 'date', key: 'dob' },
      { label: 'Medicare Card Number', placeholder: '1234 5678 9012', type: 'number', key: 'medicare' },
      { label: 'Superfund Details', placeholder: 'Superfund Name/ID', type: 'text', key: 'superfund' },
    ],
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const totalSteps = fieldGroups.length;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (currentStep === totalSteps - 1) {
      // Change this to your desired final step route
      navigate('/step1');
    } else {
      // Here, handle the submission logic for the other steps
      console.log("Form Submitted");
    }
  };

  const renderFields = () => {
    const fieldsToShow = fieldGroups[currentStep];
    return fieldsToShow.map((field) => (
      <div className="form-field" key={field.key}>
        <label>{field.label}</label>
        {field.type === 'text' ? (
          <input type="text" placeholder={field.placeholder} />
        ) : field.type === 'number' ? (
          <input type="number" placeholder={field.placeholder} />
        ) : (
          <DatePicker
            className="setup-datepicker"
            placeholder="dd/mm/yy"
            suffixIcon={<DateIcon />} // Custom icon
            />
        )}
      </div>
    ));
  };

  const renderNextButton = () => {
    let buttonText = '';
    switch (currentStep) {
        case 0:
            buttonText = 'Next: Medicare Details';
            break;
        case 1:
            buttonText = 'Next: My Super Fund';
            break;
        default:
            buttonText = 'Next: Identification';
            break;
    }

    return (
        <button 
            type="button"
            onClick={nextStep} 
            className="customButton">
            {buttonText}
        </button>
    );
  };

  return (
    <div className="form-container">
      <div className="custom-step-container">
        <CustomStep currentStep={1} /> 
      </div>          
      <form onSubmit={handleSubmit}>               
        <div className="intro-text">
          <div className="heading-text">
            Let's get you set
          </div>
          <div className="body-text">
            Tell us a bit about you to determine whether<br/>you belong to a Well fund. If you don't, we'll<br/>help you get through.
          </div>
        </div>
        {renderFields()}
        <div className="body-text">
          If you're with a member fund we'll fast track<br/>your setup. If not, fear not, we'll guide you<br/>through.
        </div>
        <div className="button-container">
          {renderNextButton()}
        </div>
      </form>
      <div className="cancel-button-container">

        <button type="button" onClick={() => navigate('/')} className="customButton customButton-alternate">
          I'll do this later
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
