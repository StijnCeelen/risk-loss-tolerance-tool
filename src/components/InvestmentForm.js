import React, { useState } from 'react';
import HeroAnimation from '../assets/HeroAnimationInvestmentForm.webm'; // Correct path to the new animation

const InvestmentForm = ({ setInvestment }) => {
  const [amount, setAmount] = useState('');

  // Function to add commas to the input value
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleChange = (e) => {
    // Remove any commas and only keep numbers
    const value = e.target.value.replace(/,/g, '');

    // Format the value and set it as the new amount
    if (!isNaN(value) && value >= 0) {
      setAmount(formatNumber(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure that amount is valid before setting investment
    const unformattedAmount = amount.replace(/,/g, ''); // Remove commas for numeric value
    if (unformattedAmount >= 10000) {
      setInvestment(unformattedAmount);
    } else {
      alert("Please enter an amount of at least $10,000.");
    }
  };

  return (
    <div style={styles.container}>
      {/* 3D Animation as a video */}
      <video
        src={HeroAnimation}
        style={styles.pieVisual}
        autoPlay
        loop
        muted
      />

      <div style={styles.content}>
        {/* Header with Playfair Display */}
        <h1 style={styles.heading}>Let's Get Started Simple!</h1>
        <p style={styles.subheading}>
          Tell us how much you're ready to invest, and we'll guide you through an exciting journey to understand your risk and loss preferences.
        </p>
        
        {/* Form for Investment Amount */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={amount}
            onChange={handleChange}
            placeholder="Enter amount (min $10,000)"
            style={styles.input}
          />
          <button type="submit" style={styles.submitButton}>
            Proceed
          </button>
        </form>

        {/* Progress Teaser */}
        <p style={styles.progressTeaser}>You’re 5 steps away from discovering your investment personality.</p>
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
  form: {
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    alignItems: 'center', // Center elements
    gap: '15px', // Spacing between input and button
  },
  input: {
    fontSize: '18px',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '2px solid #ccc',
    width: '80%',
    maxWidth: '300px',
    outline: 'none',
    fontFamily: "'Raleway', sans-serif",
  },
  submitButton: {
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
    marginTop: '15px',
  },
  progressTeaser: {
    fontSize: '16px',
    color: '#888',
    marginTop: '20px',
  },
};

export default InvestmentForm;
