import React, { useState, useRef, useEffect } from 'react';

const VerificationInput = () => {
  const [inputs, setInputs] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus the first input on component mount
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (value, index) => {
    const newInputs = [...inputs];
    if (!isNaN(value) && value !== ' ') { // Check if it's a number
      newInputs[index] = value.slice(0, 1); // Get the first character only
      setInputs(newInputs);

      // Move to next input if there's a value and it's not the last input
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !inputs[index]) {
      // Focus previous input on backspace if current input is empty and it's not the first input
      inputRefs.current[index - 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      // Focus previous input on left arrow key if not the first input
      inputRefs.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < inputRefs.current.length - 1) {
      // Focus next input on right arrow key if not the last input
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <input
          key={index}
          ref={(el) => inputRefs.current[index] = el}
          value={input}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength={1}
          style={{ width: '1em', textAlign: 'center', marginRight: '0.5em' }}
          type="tel"
        />
      ))}
    </div>
  );
};

export default VerificationInput;
