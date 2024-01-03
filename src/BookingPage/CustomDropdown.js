import React, { useState } from 'react';
import { Input, Menu, Dropdown } from 'antd';
import { DownOutlined, ClockCircleOutlined } from '@ant-design/icons';

const CustomDropdown = () => {
  const [duration, setDuration] = useState('');
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    setDuration(e.key);
    setVisible(false);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="standard appointment">15min</Menu.Item>
      <Menu.Item key="30min">30-minute appointment</Menu.Item>
      <Menu.Item key="45min">45-minute appointment</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} visible={visible} onVisibleChange={setVisible}>
      <Input
  value={duration}
  readOnly
  prefix={<ClockCircleOutlined />}
  suffix={<DownOutlined />}
  onClick={() => setVisible(!visible)}
  placeholder="Select Appointment Duration"
  style={{ 
    width: '21rem',
    height: '6rem', // Increased height
    borderRadius: 'var(--radius-btn-radius, 0.25rem)',
    marginTop: '-0.625rem',
    marginLeft: '-1.562rem',
    padding: '15px',
    fontSize: '1rem' // Adjust font size as needed
  }}
/>

    </Dropdown>
  );
};

export default CustomDropdown;
