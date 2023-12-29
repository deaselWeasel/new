import React from 'react';
import { Button } from 'antd';
import './SplashPage.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { ReactComponent as GoogleIcon } from './images/Google.svg';
import { ReactComponent as MicrosoftIcon } from './images/Microsoft.svg';
import { ReactComponent as AppleIcon } from './images/Apple.svg';

const SplashPage = () => {
  return (
    <div className="splash-container">
      <div className="main-action-buttons">
        <Button className="customButton">Sign in with Magic Link</Button>
        <Link to="/setup">
          <Button className="customButton">Join Well Free</Button>
        </Link>
      </div>
      <div className="icon-buttons">
        <Button className="iconButton" icon={<AppleIcon />} />
        <Button className="iconButton" icon={<GoogleIcon/>} />
        <Button className="iconButton" icon={<MicrosoftIcon />} />
        
      </div>
      <div className="disable-footer-menu">
      <Footer
        customStyle="splash-footer"
        buttonOpacity={0.2}
      />
      </div>
    </div>
  );
};

export default SplashPage;
