import React, { useState } from 'react';
import { Input, Button, Menu, Dropdown } from 'antd';
import { DownOutlined, MedicineBoxOutlined } from '@ant-design/icons';

const CustomDropdown = () => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    setValue(e.key);
    setVisible(false);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Fund A">Fund A</Menu.Item>
      <Menu.Item key="Fund B">Fund B</Menu.Item>
      <Menu.Item key="Fund C">Fund C</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} visible={visible} onVisibleChange={setVisible}>
      <Input
        value={value}
        readOnly
        prefix={<MedicineBoxOutlined />}
        suffix={<DownOutlined />}
        onClick={() => setVisible(!visible)}
        placeholder="Select your Medicare Fund"
      />
    </Dropdown>
  );
};
export default CustomDropdown;
