// Language Translation functions - Sinhala and English

const translateToEnglish = (text) => {
  // In this example, we will mock the translation with a basic replacement.
  // You can integrate a service like Google Translate API here for actual translation.
  
  if (text === "ඔබට කෙසේද?") {
    return "How are you?";
  }
  return `Translation to English: ${text}`;
};

const translateToSinhala = (text) => {
  // In this example, we will mock the translation with a basic replacement.
  // You can integrate a service like Google Translate API here for actual translation.
  
  if (text === "How are you?") {
    return "ඔබට කෙසේද?";
  }
  return `පරිවර්තනය කළ වාක්‍ය: ${text}`;
};

// Translate text with a basic rule (e.g., "hello" to "හෙලෝ")
const basicTranslation = (text) => {
  const translations = {
    "hello": "හෙලෝ",
    "good morning": "ආයුබෝවන්",
    "good night": "සුභ රාත්රියක්"
  };

  return translations[text.toLowerCase()] || text; // Return original text if no translation found
};

// Function to detect language (simplified version, you can improve it)
const detectLanguage = (text) => {
  const sinhalaPattern = /[\u0D80-\u0DFF]/;  // Regex to detect Sinhala characters
  return sinhalaPattern.test(text) ? 'Sinhala' : 'English';
};

module.exports = {
  translateToEnglish,
  translateToSinhala,
  basicTranslation,
  detectLanguage
};
