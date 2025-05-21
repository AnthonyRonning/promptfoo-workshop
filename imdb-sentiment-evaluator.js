/**
 * Custom evaluator for IMDB sentiment analysis that works with the original CSV format.
 * The original format has a 'label' column with values:
 * - 0 = negative sentiment
 * - 1 = positive sentiment
 * 
 * This evaluator checks if the model's output (positive/negative) matches the expected sentiment.
 */
function evaluateImdbSentiment(output, context) {
  // Normalize model output (convert to lowercase and trim whitespace)
  const modelOutput = output.toLowerCase().trim();
  
  // Get the expected sentiment from the test variables
  // In imdb_sample.csv, label is either "0" (negative) or "1" (positive)
  const label = context.vars.label;
  
  // Map the numerical label to expected sentiment
  const expectedSentiment = label === "1" ? "positive" : "negative";
  
  // Check if the model output contains the expected sentiment
  const isCorrect = modelOutput === expectedSentiment;
  
  // Return a grading result with score and explanation
  return {
    pass: isCorrect,
    score: isCorrect ? 1 : 0,
    reason: isCorrect 
      ? `Model correctly classified the sentiment as '${expectedSentiment}'` 
      : `Model incorrectly classified the sentiment as '${modelOutput}' instead of '${expectedSentiment}'`
  };
}

// Export the evaluator function
module.exports = evaluateImdbSentiment;