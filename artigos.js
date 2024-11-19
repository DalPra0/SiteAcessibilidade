document.addEventListener("DOMContentLoaded", async () => {
    const articlesList = document.getElementById("articlesList");

    try {
        const response = await fetch("/artigos");
        const files = await response.json();

        if (files.length > 0) {
            files.forEach(file => {
                if (file.endsWith(".pdf")) {
                    const articleDiv = document.createElement("div");
                    articleDiv.className = "article-item";

                    const articleTitle = document.createElement("h2");
                    articleTitle.textContent = file.replace(".pdf", "");

                    const viewLink = document.createElement("a");
                    viewLink.href = `/artigos/${file}`;
                    viewLink.target = "_blank";
                    viewLink.textContent = "Abrir";

                    const downloadLink = document.createElement("a");
                    downloadLink.href = `/artigos/${file}`;
                    downloadLink.download = file;
                    downloadLink.textContent = "Baixar";

                    articleDiv.appendChild(articleTitle);
                    articleDiv.appendChild(viewLink);
                    articleDiv.appendChild(document.createTextNode(" | "));
                    articleDiv.appendChild(downloadLink);

                    articlesList.appendChild(articleDiv);
                }
            });
        } else {
            articlesList.innerHTML = "<p>Nenhum artigo disponível no momento.</p>";
        }
    } catch (error) {
        console.error("Erro ao carregar artigos:", error);
        articlesList.innerHTML = "<p>Não foi possível carregar os artigos. Tente novamente mais tarde.</p>";
    }
});
