import React, { useState } from 'react';

const Question = (options,selectedValue) => {
  const [selectedOption, setSelectedOption] = useState(selectedValue);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            name="radio-group"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;