import React from 'react';
import { Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './LabelValue.css'; // You will create this CSS file to style your component



const LabelValue = ({ label, value, icon,className }) => {
  return (
    <Card className={`label-value-card ${className}`}>
      <div className="label">{label}</div>
      <div className="value">
        {icon && React.cloneElement(icon, { style: { marginRight: '8px', ...icon.props.style }})}
        {value}
      </div>
    </Card>
  );
};

export default LabelValue;
