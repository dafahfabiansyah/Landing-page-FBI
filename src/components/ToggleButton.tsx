import React, { useState } from 'react';
import './ToggleButton.css'; // Import stylesheet for animation

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggle-switch transition-all">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        checked={isChecked}
        onChange={handleToggleChange}
      />
      <label
        className={`toggle-switch-label ${isChecked ? 'toggle-switch-label-on' : ''}`}
        htmlFor="toggleSwitch"
      >
        <span className="toggle-switch-inner" />
        <span className={`toggle-switch-switch ${isChecked ? 'toggle-switch-switch-on' : ''}`} />
      </label>
    </div>
  );
};

export default ToggleButton;
