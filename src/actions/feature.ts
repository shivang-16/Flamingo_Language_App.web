import axios from 'axios';
import { generate } from 'random-words';

export const getTranslation = async (params: LanguageType) => {
  try {
    const words = generate(8).map(i => ({ Text: i }));

    const response = await axios.post(
      'https://microsoft-translator-text.p.rapidapi.com/translate',
      words,
      {
        params: {
          'to[0]': params,
          'api-version': '3.0',
          profanityAction: 'NoAction',
          textType: 'plain'
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': import.meta.env.VITE_LANGUAGE_API_KEY,
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
      }
    );

    const data: FetchedDataType[] = response.data;

    const arr: WordType[] = data.map((i, index) => {
      const currentWordMeaning = words[index].Text;
      const wordOptions = [...words.map((word) => word.Text)]; // Copy all meanings
      const correctOptionIndex = wordOptions.indexOf(currentWordMeaning);
      wordOptions.splice(correctOptionIndex, 1); // Remove current word meaning
      const randomOptions = wordOptions
        .sort(() => Math.random() - 0.5)
        .slice(0, 3); // Select 3 random meanings

      const options = [
        currentWordMeaning, // Correct meaning
        ...randomOptions, // 3 random meanings
      ];

      return {
        word: i.translations[0].text,
        meaning: currentWordMeaning,
        options: options.sort(() => Math.random() - 0.5), // Randomize options
      };
    });
 
    console.log("hitting this")
    return arr;
  } catch (error) {
    console.error('Error in translation request');
    throw new Error('Translation failed');

  }
};
