import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import MainContent from './MainContent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <NavigationBar onToggle={handleToggle} />
      <MainContent />
    </div>
  );
}

export default App;
