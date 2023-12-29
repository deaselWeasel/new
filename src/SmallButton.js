import React from 'react';
import { Button } from 'antd';
import './SmallButton.css'; // Import custom CSS for SmallButton

const SmallButton = ({ text, type, onClick }) => {
    return (
        <Button className={`small-button ${type}`} onClick={onClick}>
            {text || 'Button'}
        </Button>
    );
};

export default SmallButton;