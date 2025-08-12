function speak(id) {
    const text = document.getElementById(id).value;
    if (!text.trim()) return;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

async function translateText() {
    const text = document.getElementById("inputText").value;
    const fromLang = document.getElementById("fromLang").value;
    const toLang = document.getElementById("toLang").value;

    if (!text.trim()) {
        alert("Iltimos, matn kiriting!");
        return;
    }

    try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`);
        const data = await res.json();
        document.getElementById("outputText").value = data.responseData.translatedText;
    } catch (err) {
        alert("Xatolik yuz berdi: " + err);
    }
}