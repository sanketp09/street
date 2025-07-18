
import { useState } from 'react';
import CountdownIntro from './components/CountdownIntro';
import LandingPage from './components/LandingPage';
import LoveStreet from './components/LoveStreet';
import './App.css';

function App() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [showLanding, setShowLanding] = useState(false);
  const [showLoveStreet, setShowLoveStreet] = useState(false);

  const handleCountdownComplete = () => {
    setShowCountdown(false);
    setShowLanding(true);
  };

  const handleReady = () => {
    setShowLanding(false);
    setTimeout(() => {
      setShowLoveStreet(true);
    }, 800); // Wait for zoom animation
  };

  return (
    <div className="App">
      {showCountdown && (
        <CountdownIntro onComplete={handleCountdownComplete} />
      )}
      {showLanding && !showLoveStreet && (
        <LandingPage onReady={handleReady} />
      )}
      {showLoveStreet && <LoveStreet />}
    </div>
  );
}

export default App;
