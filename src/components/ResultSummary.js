import React from 'react';
import HeroAnimation from '../assets/HeroAnimationResultSummary.webm'; // Adjust the path as necessary

const ResultSummary = ({ avgRiskTolerance, avgAdjustedLossAversion }) => {
  // Determine persona based on average risk tolerance
  let persona = '';
  let personaDescription = '';

  if (avgRiskTolerance >= 0 && avgRiskTolerance < 0.2) {
    persona = 'Steady Saver';
    personaDescription = "You value safety and stability above all. With up to 20% in equities, you're all about slow, steady growth and protecting your nest egg. Your motto? “Better safe than sorry”.";
  } else if (avgRiskTolerance >= 0.2 && avgRiskTolerance < 0.4) {
    persona = 'Calculated Investor';
    personaDescription = "You're willing to take some risks – but only calculated ones. With 40% equity, you balance growth and security, always keeping a sharp eye on the market. Strategy is your game.";
  } else if (avgRiskTolerance >= 0.4 && avgRiskTolerance < 0.6) {
    persona = 'Steady Climber';
    personaDescription = "You aim for steady progress with 60% in equities. You enjoy growth but keep an anchor in safety. Confident but cautious, you climb higher, one step at a time.";
  } else if (avgRiskTolerance >= 0.6 && avgRiskTolerance < 0.8) {
    persona = 'Bold Investor';
    personaDescription = "You’re not afraid to take on risk, and you go big with up to 80% in equities. You thrive on growth opportunities and have the courage to ride out market swings. Bold is your style.";
  } else if (avgRiskTolerance >= 0.8 && avgRiskTolerance <= 1) {
    persona = 'Fearless Maverick';
    personaDescription = "You live for the thrill of investing, putting up to 100% in equities. Fearless and adventurous, you take on risk with confidence and see market ups and downs as part of the journey. “All in” is your motto.";
  }

  // Determine persona based on average loss aversion
  let lossPersona = '';
  let lossPersonaDescription = '';

  if (avgAdjustedLossAversion > 1) {
    lossPersona = 'Loss Shield';
    lossPersonaDescription = "You hate losses, and you’re not willing to let your investments dip without a safety net. Consider downside protection strategies to keep your portfolio steady and your mind at ease.";
  } else {
    lossPersona = 'Loss Resilient';
    lossPersonaDescription = "You don’t let losses shake your confidence. You’re resilient, accepting market swings as part of the investment game. You're comfortable with the losses as long as you see long-term potential.";
  }

  return (
    <div style={styles.container}>
      {/* Background Animation */}
      <video
        src={HeroAnimation}
        style={styles.pieVisual}
        autoPlay
        loop
        muted
      />
      
      {/* Main Content */}
      <div style={styles.content}>
        <h1 style={styles.heading}>Your Risk and Loss Personality</h1>
        <p style={styles.subheading}>Here's what your investment decisions say about you:</p>

        {/* Risk Tolerance Summary */}
        <div style={styles.resultBox}>
          <h2 style={styles.personaHeading}>{persona}</h2>
          <p style={styles.resultText}>{personaDescription}</p>
        </div>

        {/* Loss Tolerance Summary */}
        <div style={styles.resultBox}>
          <h2 style={styles.personaHeading}>{lossPersona}</h2>
          <p style={styles.resultText}>{lossPersonaDescription}</p>
        </div>
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
    marginBottom: '20px',
    color: '#333',
    fontFamily: "'Oswald', sans-serif",
  },
  subheading: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '40px',
    lineHeight: '1.6',
    fontFamily: "'Raleway', sans-serif",
  },
  resultBox: {
    marginBottom: '40px',
  },
  personaHeading: {
    fontSize: '26px',
    fontWeight: 'bold',
    margin: '20px 0',
    color: '#333',
  },
  resultText: {
    fontSize: '18px',
    margin: '10px 0',
    color: '#555',
  },
};

export default ResultSummary;
