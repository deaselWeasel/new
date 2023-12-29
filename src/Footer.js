import React, { useState } from 'react';
import { Popover, FloatButton, Button } from 'antd';
import { MenuOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';
import FooterMenu from './FooterMenu';
import './Footer.css';

import { ReactComponent as ProfileIcon } from './images/Profile.svg';
import { ReactComponent as MenuIcon } from './images/MenuIcon.svg';

const Footer = ({ customStyle, wellTextStyle, iconColor, backgroundColor, buttonOpacity }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleVisibilityChange = visible => {
    setMenuVisible(visible);
  };

  return (
    <div className={`footerStyle ${customStyle}`} style={{ '--icon-color': iconColor, '--bg-color': backgroundColor }}>
      <Popover
        content={<FooterMenu />}
        placement="topLeft"
        trigger="click"
        visible={menuVisible}
        onVisibleChange={handleVisibilityChange}
        overlayStyle={{
          width: '100vw',
          left: '0px', // Adjust the value as needed to shift the menu to the right
          textAlign: 'right'
        }}
      >
        <Button
          icon={menuVisible ? <CloseOutlined style={{ color: 'var(--icon-color)' }} /> : <MenuIcon style={{ color: 'var(--icon-color)' }} />}
          type="default"
          onClick={() => setMenuVisible(!menuVisible)}
          className="float-button-right"
          style={{ opacity: buttonOpacity }}
        />
      </Popover>
      <h1 className={`wellText ${wellTextStyle}`}>Well</h1>
      <Button
        icon={<ProfileIcon style={{ color: 'var(--icon-color)' }} />}
        type="default"
        style={{ position: 'absolute', left: 20, bottom: 15, opacity: buttonOpacity }}
        className="float-button-left"
      />
    </div>
  );
};

export default Footer;
