import React, { useState, useEffect } from 'react';
import HeroAnimation from '../assets/HeroAnimationScenarioSlider.webm'; // Adjust the path as necessary

const ScenarioSlider = ({ multiplier, investment, initialValue, onNext, onBack, currentScenarioIndex, totalScenarios }) => {
  const [sliderState, setSliderState] = useState(0);

  // Initialize slider state correctly
  useEffect(() => {
    if (initialValue !== undefined) {
      setSliderState(initialValue); // Set to saved value
    } else {
      setSliderState(0); // Start at 0 for new scenarios
    }
  }, [initialValue, currentScenarioIndex]);

  const handleSliderChange = (e) => {
    setSliderState(parseInt(e.target.value, 10)); // Update state as slider moves
  };

  const handleProceed = () => {
    onNext(sliderState); // Save slider value when proceeding
  };

  const handleBack = () => {
    onBack(sliderState); // Save slider value when going back
  };

  // Calculate potential gain and loss based on the slider value
  const potentialGain = sliderState * multiplier;
  const potentialLossValue = sliderState;

  // Calculate fill percentages for box effect
  const gainFillHeight = (sliderState / investment) * 100;
  const lossFillHeight = (sliderState / investment) * 100;

  // Conditional text for CTA button
  const ctaText = currentScenarioIndex === totalScenarios - 1 ? "Uncover Your Risk Personality" : "Proceed to Next Scenario";

  return (
    <div style={styles.container}>
      {/* 3D Animation */}
      <video
        src={HeroAnimation}
        style={styles.pieVisual}
        autoPlay
        loop
        muted
      />

      <div style={styles.content}>
        {/* Headline and round info */}
        <h1 style={styles.heading}>How Much Will You Risk to Unlock Gains?</h1>
        <p style={styles.roundInfo}>{`Round ${currentScenarioIndex + 1} of ${totalScenarios}`}</p>

        <p style={styles.subheading}>
          Take a chance and see how much you can gain! Use the slider to decide how much to invest in this scenario for the next 5 years.
        </p>
        
        {/* Slider and Labels */}
        <div style={styles.sliderContainer}>
          <input
            type="range"
            min="0"
            max={investment}
            step="100" // Slider step value of 100
            value={sliderState}
            onChange={handleSliderChange}
            style={styles.slider}
          />
          <div style={styles.sliderValue}>{`$${Number(sliderState).toLocaleString()}`}</div>
        </div>

        {/* Display Potential Gain and Loss */}
        <div style={styles.boxContainer}>
          <div style={{ textAlign: 'center', position: 'relative' }}>
            {/* Gain Box */}
            <div style={styles.gainBox}>
              {/* Filled portion */}
              <div
                style={{
                  ...styles.gainFill,
                  height: `${gainFillHeight}%`,
                }}
              ></div>
              <div style={styles.centeredText}>${Math.round(potentialGain).toLocaleString()}</div>
            </div>
            <p style={styles.boxLabel}>Potential Gain</p>
          </div>

          <div style={{ textAlign: 'center', position: 'relative' }}>
            {/* Loss Box */}
            <div style={styles.lossBox}>
              {/* Filled portion */}
              <div
                style={{
                  ...styles.lossFill,
                  height: `${lossFillHeight}%`,
                }}
              ></div>
              <div style={styles.centeredText}>${Math.round(potentialLossValue).toLocaleString()}</div>
            </div>
            <p style={styles.boxLabel}>Potential Loss</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button onClick={handleProceed} style={styles.proceedButton}>
          {ctaText}
        </button>

        {/* Back button, visible only when not on the first scenario */}
        {currentScenarioIndex > 0 && (
          <button onClick={handleBack} style={styles.backButton}>
            &lt; Back
          </button>
        )}
      </div>
    </div>
  );
};

// Styling for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    height: '100vh',
    justifyContent: 'center',
    fontFamily: "'Raleway', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },
  pieVisual: {
    position: 'absolute',
    top: '20%',
    right: '5%',
    width: '30%',
    maxWidth: '400px',
    zIndex: 1,
    opacity: 0.9,
  },
  content: {
    backgroundColor: '#fff',
    padding: '40px 20px',
    borderRadius: '15px',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
    zIndex: 2,
    position: 'relative',
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#333',
    fontFamily: "'Oswald', sans-serif",
  },
  roundInfo: {
    fontSize: '18px',
    color: '#777',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  sliderContainer: {
    margin: '20px 0',
  },
  slider: {
    width: '80%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  sliderValue: {
    fontSize: '18px',
    fontWeight: '600',
    marginTop: '10px',
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    margin: '20px 0',
  },
  gainBox: {
    width: '120px',
    height: '50px',
    color: '#fff',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '18px',
    textAlign: 'center',
    border: '1px solid #000',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#DFBD69', // Light gold
    position: 'relative',
    overflow: 'hidden',
  },
  gainFill: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: '#926F34', // Dark gold
    zIndex: 1,
  },
  lossBox: {
    width: '120px',
    height: '50px',
    color: '#fff',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '18px',
    textAlign: 'center',
    border: '1px solid #000',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#CCCCCC', // Light silver
    position: 'relative',
    overflow: 'hidden',
  },
  lossFill: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: '#A8A9AD', // Dark silver
    zIndex: 1,
  },
  centeredText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: 2,
    color: '#fff',
    fontWeight: 'bold',
  },
  boxLabel: {
    marginTop: '5px',
    fontSize: '14px',
    color: '#777',
  },
  proceedButton: {
    fontSize: '20px',
    padding: '12px 30px',
    background: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    fontFamily: "'Raleway', sans-serif",
    marginTop: '20px',
  },
  backButton: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    color: '#777',
    cursor: 'pointer',
    fontFamily: "'Raleway', sans-serif",
    textDecoration: 'underline',
  },
};

export default ScenarioSlider;
