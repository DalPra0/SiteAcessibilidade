document.addEventListener("DOMContentLoaded", () => {
    const contentList = document.getElementById("contentList");
    const filterVideosButton = document.getElementById("filterVideos");
    const filterPodcastsButton = document.getElementById("filterPodcasts");
    const filterAllButton = document.getElementById("filterAll");

    // Conteúdo simulado para vídeos e podcasts
    const content = [
        {
            type: "video",
            title: "Acessibilidade em páginas web",
            description: "Um vídeo explicando como a tecnologia pode ajudar na acessibilidade.",
            thumbnail: "videos/Acessibilidade em páginas web.png",
            link: "videos/Acessibilidade em páginas web.mp4",
        },
        {
            type: "podcast",
            title: "Como usar acessibilidade web no seu projeto front end na prática!",
            description: "Discussão sobre a importância da acessibilidade digital.",
            audio: "podcasts/Como usar acessibilidade web no seu projeto front end na prática.mp3",
        },
        {
            type: "video",
            title: "Acessibilidade Web_ Como Construir um Site Acessível",
            description: "Saiba mais sobre como criar sites acessíveis.",
            thumbnail: "videos/Acessibilidade Web_ Como Construir um Site Acessível (2024) - Hostinger Brasil.png",
            link: "videos/Acessibilidade Web_ Como Construir um Site Acessível (2024) - Hostinger Brasil.mp4",
        },
        {
            type: "podcast",
            title: "WCAG_ Guia de acessibilidade Web _ Mergo Descomplica",
            description: "WCAG_ Guia de acessibilidade Web _ Mergo Descomplica.",
            audio: "podcasts/WCAG_ Guia de acessibilidade Web _ Mergo Descomplica.mp3",
        },
    ];

    // Função para exibir conteúdo filtrado
    function displayContent(filterType) {
        contentList.innerHTML = ""; // Limpa a lista
        const filteredContent = filterType === "all"
            ? content
            : content.filter(item => item.type === filterType);

        filteredContent.forEach(item => {
            const contentItem = document.createElement("div");
            contentItem.className = "content-item";

            if (item.type === "video") {
                contentItem.innerHTML = `
                    <img src="${item.thumbnail}" alt="Miniatura do vídeo: ${item.title}">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <a href="${item.link}" target="_blank">Assistir</a>
                `;
            } else if (item.type === "podcast") {
                contentItem.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <audio class="audio-player" controls>
                        <source src="${item.audio}" type="audio/mpeg">
                        Seu navegador não suporta o elemento de áudio.
                    </audio>
                `;
            }

            contentList.appendChild(contentItem);
        });
    }

    // Event listeners para filtros
    filterVideosButton.addEventListener("click", () => displayContent("video"));
    filterPodcastsButton.addEventListener("click", () => displayContent("podcast"));
    filterAllButton.addEventListener("click", () => displayContent("all"));

    // Exibe todos os itens inicialmente
    displayContent("all");
});
