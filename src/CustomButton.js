import React from 'react';
import { Button } from 'antd';
 // Import your custom CSS
import './CustomButton.scss';

const CustomButton = ({ text, type, onClick,disabled }) => {
    return (
        <Button className={`custom-button ${type}`} onClick={onClick} disabled={disabled}>
            {text || 'Default Text'}
        </Button>
    );
};

export default CustomButton;

