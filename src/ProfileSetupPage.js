import React from 'react';
import MultiStepForm from './MultiStepForm';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <MultiStepForm/>
      <div className="disable-footer-menu">
      <Footer
        buttonOpacity={0.2}
      />
      </div>
      {/* Content of the Home Page */}
    </div>
  );
};

export default HomePage;
