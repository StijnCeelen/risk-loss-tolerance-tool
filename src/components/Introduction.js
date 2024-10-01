import React from 'react';
import HeroAnimation from '../assets/HeroAnimationIntroduction.webm'; // Correct relative path to assets

const Introduction = ({ onStart }) => {
  return (
    <div style={styles.container}>
      {/* 3D Pie Visual as a video */}
      <video
        src={HeroAnimation}
        style={styles.pieVisual}
        autoPlay
        loop
        muted
      />

      {/* Main content */}
      <div style={styles.content}>
        {/* Header with Playfair Display */}
        <h1 style={styles.heading}>Welcome to Your Risk Personality Journey</h1>
        {/* All other text in Raleway */}
        <p style={styles.subheading}>
          Get ready to explore your risk and loss tolerance and discover your unique investment style. 
          You’ll answer a few fun scenarios to see how bold or cautious you are when it comes to investing.
        </p>
        <button style={styles.startButton} onClick={onStart}>
          Start Your Journey
        </button>

        {/* Progress Teaser */}
        <p style={styles.progressTeaser}>You’re 6 steps away from discovering your investment personality.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)', // Light gradient background
    height: '100vh',
    justifyContent: 'center',
    fontFamily: "'Raleway', sans-serif", // Set default font to Raleway
    position: 'relative',
    overflow: 'hidden',
  },
  pieVisual: {
    position: 'absolute',
    top: '20%',
    right: '5%',
    width: '30%', // Adjust size as necessary
    maxWidth: '400px',
    zIndex: 1,
    opacity: 0.9,
  },
  content: {
    backgroundColor: '#fff', // White background for content card
    padding: '40px 20px',
    borderRadius: '15px',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
    zIndex: 2,
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#333',
    fontFamily: "'Oswald', sans-serif", // Use Oswald for heading
  },
  subheading: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  startButton: {
    fontSize: '20px',
    padding: '12px 30px',
    background: '#000', // Black background
    color: '#fff',
    border: 'none', // No border
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)', // Light shadow for depth
    fontFamily: "'Raleway', sans-serif",
  },
  progressTeaser: {
    fontSize: '16px',
    color: '#888',
    marginTop: '20px',
  },
};

export default Introduction;
