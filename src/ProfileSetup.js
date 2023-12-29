import React from 'react';
import { Progress } from 'antd';
import './ProfileSetup.css'; // Make sure to import the CSS file

const ProfileSetup = () => {
  const percent = 33; // You can calculate this based on the step you're in.

  return (
    <div className="profile-setup-step">
      <div className="profile-setup-header">
        <h1>Set up your Profile</h1>
        <p>Don’t be a stranger, tell us more<br/>about you.</p>
      </div>
      <div className="profile-setup-progress">
        <Progress type="circle" percent={percent} width={24} showInfo={false} />
      </div>
    </div>
  );
};

export default ProfileSetup;
