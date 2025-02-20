
const inputText = document.getElementById("inputText");
const detectButton = document.getElementById("detectButton");
const languageSelect = document.getElementById("languageSelect");
const translateButton = document.getElementById("translateButton");
const output = document.getElementById("output");

// API base URL for Lingva Translate
const API_BASE = "https://lingva.ml/api/v1";

// Detect Language
detectButton.addEventListener("click", async () => {
    const text = inputText.value.trim();
    if (!text) {
        alert("Please enter some text to detect the language.");
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/detect`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ q: text }),
        });

        if (!response.ok) throw new Error("Failed to detect language");

        const data = await response.json();
        output.innerHTML = `<strong>Detected Language:</strong> ${data.language}`;
    } catch (err) {
        output.innerHTML = `<strong>Error:</strong> ${err.message}`;
    }
});

// Translate Text
translateButton.addEventListener("click", async () => {
    const text = inputText.value.trim();
    const targetLang = languageSelect.value;

    if (!text) {
        alert("Please enter some text to translate.");
        return;
    }

    try {
        const response = await fetch(
            `${API_BASE}/auto/${targetLang}/${encodeURIComponent(text)}`
        );

        if (!response.ok) throw new Error("Failed to translate text");

        const data = await response.json();
        output.innerHTML = `<strong>Translated Text:</strong> ${data.translation}`;
    } catch (err) {
        output.innerHTML = `<strong>Error:</strong> ${err.message}`;
    }
});
