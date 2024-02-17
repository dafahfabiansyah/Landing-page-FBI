import React, { useState } from 'react';
import './ToggleButton.css'; // Import stylesheet for animation

const ToggleButton = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleMode = () => {
    setIsNightMode(prevMode => !prevMode);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleMode}
        className={`toggle-button ${
          isNightMode ? 'night-mode' : 'light-mode'
        }`}
      >
        <div className="sun-moon">
          <div className="sun"></div>
          <div className="moon"></div>
        </div>
        {isNightMode ? 'Night Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default ToggleButton;
