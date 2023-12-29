import React from 'react';
// Assuming you are exporting them individually as shown above
import { ReactComponent as GoogleIcon } from './images/Google.svg';
import { ReactComponent as MicrosoftIcon } from './images/Microsoft.svg';
import { ReactComponent as ProfileIcon } from './images/Profile.svg';

const WelcomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome</h1>
      <GoogleIcon />
      <MicrosoftIcon />
      <ProfileIcon />
    </div>
  );
};

const styles = {
  container: {
    height: '100vh', // Full height of the viewport
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    textAlign: 'center',
  },
};

export default WelcomePage;
