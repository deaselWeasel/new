import React from 'react';
import { Radio } from 'antd';
import './CustomRadioCard.scss';


const CustomRadioCard = ({ value, title, label, checked, onChange }) => {
    return (
        <div className="custom-radio-wrapper">
          <Radio
            value={value}
            checked={checked}
            onChange={onChange}
          />
          <div className="radio-text-content">
            <div className="radio-title">{title}</div>
            <div className="radio-label">{label}</div>
            
            
          </div>
        </div>
      );
    };
export default CustomRadioCard;
