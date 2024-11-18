// Dados fictícios para pesquisa
const database = [
    { type: "artigo", title: "eMAG_CONTEUDISTA_MOD_1", link: "artigos.html#artigo1" },
    { type: "artigo", title: "eMAG_CONTEUDISTA_MOD_2", link: "artigos.html#artigo2" },
    { type: "video", title: "Vídeo sobre Tecnologia Assistiva", link: "videos-podcasts.html#video1" },
    { type: "podcast", title: "Podcast: Barreiras Digitais", link: "videos-podcasts.html#podcast1" }
];

// Função para pesquisar
function search() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const results = database.filter(item =>
        item.title.toLowerCase().includes(query)
    );

    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // Limpa resultados anteriores

    if (results.length > 0) {
        results.forEach(item => {
            const resultItem = document.createElement("p");
            resultItem.innerHTML = `
                <strong>${item.type.toUpperCase()}:</strong> 
                <a href="${item.link}">${item.title}</a>
            `;
            resultsContainer.appendChild(resultItem);
        });
        resultsContainer.style.display = "block";
    } else {
        resultsContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        resultsContainer.style.display = "block";
    }
}

// Vincula o evento ao botão de pesquisa
document.getElementById("searchButton").addEventListener("click", search);
