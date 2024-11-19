document.addEventListener("DOMContentLoaded", () => {
    const daltonismoMode = document.getElementById("daltonismoMode");
    const darkMode = document.getElementById("darkMode");
    const highContrast = document.getElementById("highContrast");
    const spacing = document.getElementById("spacing");
    const keyboardNavigation = document.getElementById("keyboardNavigation");
    const feedback = document.getElementById("feedback");
    const fontSize = document.getElementById("fontSize");
    const tts = document.getElementById("tts");
    const applySettings = document.getElementById("applySettings");
    const clickSound = new Audio("sounds/click.mp3");

    // Carrega configurações do localStorage
    const loadSettings = () => {
        if (localStorage.getItem("daltonismo") === "true") document.body.classList.add("daltonismo");
        if (localStorage.getItem("darkMode") === "true") document.body.classList.add("dark-mode");
        if (localStorage.getItem("highContrast") === "true") document.body.classList.add("high-contrast");
        if (localStorage.getItem("spacing") === "true") document.body.classList.add("spacing");
        if (localStorage.getItem("fontSize")) document.body.style.fontSize = `${localStorage.getItem("fontSize")}px`;
    };

    // Salva as configurações no localStorage
    const saveSettings = () => {
        localStorage.setItem("daltonismo", daltonismoMode.checked);
        localStorage.setItem("darkMode", darkMode.checked);
        localStorage.setItem("highContrast", highContrast.checked);
        localStorage.setItem("spacing", spacing.checked);
        localStorage.setItem("fontSize", fontSize.value);
    };

    // Aplica configurações
    applySettings.addEventListener("click", () => {
        document.body.classList.toggle("daltonismo", daltonismoMode.checked);
        document.body.classList.toggle("dark-mode", darkMode.checked);
        document.body.classList.toggle("high-contrast", highContrast.checked);
        document.body.classList.toggle("spacing", spacing.checked);
        document.body.style.fontSize = `${fontSize.value}px`;
        saveSettings();

        // Ativa feedback auditivo
        if (feedback.checked) {
            document.querySelectorAll("button, input, select").forEach(el => {
                el.addEventListener("click", () => clickSound.play());
            });
        }

        // TTS: Lê texto ao passar o mouse
        if (tts.checked) {
            document.body.addEventListener("mouseover", (e) => {
                if (e.target.innerText) {
                    const utterance = new SpeechSynthesisUtterance(e.target.innerText);
                    speechSynthesis.speak(utterance);
                }
            });
        }
    });

    // Exibe comandos de teclado
    if (keyboardNavigation.checked) {
        const keyboardHints = document.createElement("div");
        keyboardHints.className = "keyboard-hints";
        keyboardHints.innerHTML = `
            <p><strong>Teclas:</strong></p>
            <p>Tab: Navegar pelos elementos</p>
            <p>Enter: Selecionar elemento</p>
        `;
        document.body.appendChild(keyboardHints);
        keyboardHints.style.display = "block";
    }

    loadSettings(); // Carrega configurações ao carregar a página
});
