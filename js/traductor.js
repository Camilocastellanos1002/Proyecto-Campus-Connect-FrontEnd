const apiKey = 'AIzaSyC_wgVe7zfcHHywW5QDzGhFVCncusGbO9E';

function translateContent(targetLanguage) {
    const contentToTranslate = document.getElementById('content');
    const elementsToTranslate = contentToTranslate.querySelectorAll('*');

    elementsToTranslate.forEach((element) => {
        const originalText = element.textContent;
        translateText(originalText, targetLanguage)
            .then((translatedText) => {
                element.textContent = `${originalText} / ${translatedText}`;
            })
            .catch((error) => {
                console.error('Error al traducir:', error);
            });
    });
}

function translateText(text, targetLanguage) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const data = {
        q: text,
        target: targetLanguage,
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then((result) => {
        return result.data.translations[0].translatedText;
    });
}

function changeLanguage() {
    const languageSelector = document.getElementById('language');
    const selectedLanguage = languageSelector.value;

    translateContent(selectedLanguage);
}