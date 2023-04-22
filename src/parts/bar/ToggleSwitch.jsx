import React, { useState } from 'react';

function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      <span className="toggle-slider"></span>
    </label>
  );
}

export default ToggleSwitch;
