import React, { useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import items from './TopUpMenu'; // Adjust the path to where your items are defined
import './MenuButton.scss';


const MenuButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <Dropdown
      overlay={<Menu items={items} />}
      placement="top"
      arrow
      visible={dropdownOpen}
      onVisibleChange={(visible) => setDropdownOpen(visible)}
      trigger={['click']}
    >
      <Button onClick = {toggleDropdown} className='circular-button'>
        {dropdownOpen ? <CloseOutlined className='B-colour' /> : <MenuOutlined className='B-colour'/>}
      </Button>
    </Dropdown>
  );
};

export default MenuButton;
