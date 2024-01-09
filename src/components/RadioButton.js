import React, { useState } from 'react';
import './RadioButton.css';

const RadioButton = () => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleRadioChange = (event) => {
    setSelectedClass(event.target.value);
  };


  

  
  return (
    <div className='radio-groups'>
       
    <fieldset>
        <h3>Class</h3>
        <label className='radio-btn' key='coach'>
          <input type='radio' value='Coach' name='a' checked={selectedClass === 'Coach'} onChange={handleRadioChange}/>
          Coach
          <span></span>
        </label>

        <label className='radio-btn' key='economy'>
          <input type='radio' value='Economy' name='a' checked={selectedClass === 'Economy'} onChange={handleRadioChange}/>
          Economy
          <span></span>
        </label>

        <label className='radio-btn' key='premium-economy'>
          <input type='radio' value='Premium-Economy' name='a' checked={selectedClass ==='Premium-Economy'}  onChange={handleRadioChange}/>
          Premium Economy
          <span></span>
        </label>

        <label className='radio-btn' key='business'>
          <input type='radio'value='Business' name='a' checked={selectedClass === 'Business'} onChange={handleRadioChange}/>
          Business
          <span></span>
        </label>
      </fieldset>

      <p>Selected Class: {selectedClass}</p>
    </div>
  );
}

export default RadioButton;