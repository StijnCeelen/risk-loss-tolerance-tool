import React, { useState } from 'react';
import Introduction from './components/Introduction';
import InvestmentForm from './components/InvestmentForm';
import ScenarioSlider from './components/ScenarioSlider';
import ResultSummary from './components/ResultSummary';

function App() {
  const [started, setStarted] = useState(false);
  const [investment, setInvestment] = useState(null);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [sliderValues, setSliderValues] = useState([]);
  const [results, setResults] = useState(null); // State to store results

  // Define scenarios with multipliers and potential loss details
  const scenarios = [
    { multiplier: 1.25, potentialLoss: 1 },
    { multiplier: 3.75, potentialLoss: 1 },
    { multiplier: 5.0, potentialLoss: 1 },
    { multiplier: 2.5, potentialLoss: 1 },
    { multiplier: 6.25, potentialLoss: 1 },
  ];

  // Function to calculate risk and loss aversion based on slider values
  const calculateRiskAndLossAversion = (values) => {
    let riskToleranceScores = [];
    let adjustedLossAversionScores = [];

    values.forEach((investedAmount, index) => {
      const { multiplier } = scenarios[index];
      const potentialGain = investedAmount * multiplier;
      const potentialLoss = investedAmount;
      const maxGain = investment * multiplier;
      const maxLoss = investment;

      // Calculate risk tolerance and adjusted loss aversion
      const riskTolerance = potentialGain / maxGain;
      const relativeLossRatio = potentialLoss / maxLoss;
      const gainToLossRatio = potentialGain / potentialLoss || 1;
      const adjustedLossAversion = (1 / gainToLossRatio) + (1 - relativeLossRatio);

      riskToleranceScores.push(riskTolerance);
      adjustedLossAversionScores.push(adjustedLossAversion);
    });

    // Calculate averages and save results
    const avgRiskTolerance = riskToleranceScores.reduce((a, b) => a + b, 0) / riskToleranceScores.length;
    const avgAdjustedLossAversion = adjustedLossAversionScores.reduce((a, b) => a + b, 0) / adjustedLossAversionScores.length;

    setResults({ avgRiskTolerance, avgAdjustedLossAversion });
  };

  // Save slider value and move to the next scenario
  const handleNextScenario = (currentSliderValue) => {
    const updatedSliderValues = [...sliderValues];
    updatedSliderValues[currentScenarioIndex] = currentSliderValue;

    setSliderValues(updatedSliderValues);

    // If it's the last scenario, calculate the results and show the result page
    if (currentScenarioIndex === scenarios.length - 1) {
      calculateRiskAndLossAversion(updatedSliderValues);
    } else {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
    }
  };

  // Save slider value and go back to the previous scenario
  const handlePreviousScenario = (currentSliderValue) => {
    const updatedSliderValues = [...sliderValues];
    updatedSliderValues[currentScenarioIndex] = currentSliderValue;
    setSliderValues(updatedSliderValues);

    if (currentScenarioIndex > 0) {
      setCurrentScenarioIndex(currentScenarioIndex - 1);
    }
  };

  return (
    <div className="App">
      {!started && <Introduction onStart={() => setStarted(true)} />}
      
      {started && !investment && (
        <InvestmentForm setInvestment={(value) => setInvestment(value)} />
      )}
      
      {started && investment && currentScenarioIndex < scenarios.length && !results && (
        <ScenarioSlider
          multiplier={scenarios[currentScenarioIndex].multiplier}
          investment={investment}
          currentScenarioIndex={currentScenarioIndex}
          totalScenarios={scenarios.length}
          initialValue={
            sliderValues[currentScenarioIndex] !== undefined
              ? sliderValues[currentScenarioIndex]
              : 0 // Start at 0 if not previously visited
          }
          onNext={(currentSliderValue) => handleNextScenario(currentSliderValue)}
          onBack={(currentSliderValue) => handlePreviousScenario(currentSliderValue)}
        />
      )}
      
      {results && (
        <ResultSummary
          avgRiskTolerance={results.avgRiskTolerance}
          avgAdjustedLossAversion={results.avgAdjustedLossAversion}
        />
      )}
    </div>
  );
}

export default App;
