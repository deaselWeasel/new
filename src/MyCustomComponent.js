import React from 'react';
import { Card, Typography } from 'antd';
import { BorderOutlined } from '@ant-design/icons';


const CustomCard = ({ title, label, icon: BorderOutlined , style, titleStyle, labelStyle }) => {
  return (
    <Card 
      bordered={false} 
      style={{ width: 300, padding: 16, ...style }} // Allow custom styles
      className="custom-card"
    >
      {BorderOutlined && < BorderOutlined style={{ fontSize: '24px', marginRight: 8 }} />}
      <Typography.Title level={4} style={{ marginBottom: 0, ...titleStyle }}>
        {title}
      </Typography.Title>
      <Typography.Text type="secondary" style={labelStyle}>
        {label}
      </Typography.Text>
    </Card>
  );
};

export default CustomCard;
