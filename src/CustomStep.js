// CustomSteps.js
import React from 'react';
import './CustomStep.css';

const CustomStep = ({ currentStep }) => {
  const steps = [1, 2, 3]; // Define three steps

  return (
    <div className="custom-steps-container">
      {steps.map((step) => (
        <React.Fragment key={step}>
          <div className={`step ${step === currentStep ? 'current' : ''} ${step < currentStep ? 'previous' : ''}`} data-step-number={step}>
            {step === currentStep || step < currentStep ? step : ''}
          </div>
          {step < steps.length && <div className="step-tail"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CustomStep;
