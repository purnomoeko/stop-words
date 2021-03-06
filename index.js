const englishWords = require('./english.words.json');

const availableLanguage = ['en'];

const getNoneStopWords = (sentence, language = 'en') => {
    if (availableLanguage.indexOf(language) === -1) {
        throw new Error('Language is not available');
    }
    let commonWords = [];
    if (language === 'en') {
        commonWords = englishWords;
    }
    let wordArr = sentence.toLowerCase().match(/\w+/g),
        commonObj = {},
        uncommonArr = [],
        word, i;

    for (let i = 0; i < commonWords.length; i++) {
        commonObj[commonWords[i].trim()] = true;
    }

    for (let i = 0; i < wordArr.length; i++) {
        word = wordArr[i].trim().toLowerCase();
        if (!commonObj[word]) {
            uncommonArr.push(word);
        }
    }
    return uncommonArr;
};

module.exports = getNoneStopWords;
