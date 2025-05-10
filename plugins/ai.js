const axios = require('axios');

// Function to get AI response from OpenAI API
const getAIResponse = async (prompt, apiKey) => {
  const url = 'https://api.openai.com/v1/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const data = {
    model: 'gpt-3.5-turbo', // You can use a different model depending on your requirements.
    prompt: prompt,
    max_tokens: 150,
    temperature: 0.7, // Control the randomness of the responses.
    top_p: 1.0,  // Controls the diversity of the response.
    frequency_penalty: 0.0, // Controls how much to penalize new content vs. old content.
    presence_penalty: 0.0, // Controls how much to penalize repetitions of previous content.
  };

  try {
    const response = await axios.post(url, data, { headers });
    const responseData = response.data;
    return responseData.choices[0].text.trim(); // Extract AI's response from the API result
  } catch (error) {
    console.error('Error fetching AI response:', error.response ? error.response.data : error.message);
    return 'Sorry, there was an issue processing your request. Please try again later.';
  }
};

// Function to handle conversation with the user
const handleConversation = async (userMessage, apiKey) => {
  const prompt = `User asked: ${userMessage}\n\nProvide a friendly, informative, and helpful response in Sinhala.`;
  const aiResponse = await getAIResponse(prompt, apiKey);
  return aiResponse;
};

module.exports = {
  getAIResponse,
  handleConversation
};
