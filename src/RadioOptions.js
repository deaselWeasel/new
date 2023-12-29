import React from 'react';
import './RadioOption.css'; // Assume you have some CSS for styling

const RadioOptions = ({ title, description, iconIcon, state, style }) => {
  return (
    <div className={`radio-option ${state} ${style}`}>
      <input type="radio" id={title} name="radio-group" />
      <label htmlFor={title}>
        {iconIcon && <img src={iconIcon} alt={title} />}
        <div>
          <div className="radio-title">{title}</div>
          <div className="radio-description">{description}</div>
        </div>
      </label>
    </div>
  );
};

export default RadioOptions;
