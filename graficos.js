document.addEventListener("DOMContentLoaded", () => {
    const chartsList = document.getElementById("chartsList");
    const imagePopup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    // Dados dos gráficos
    const charts = [
        {
            filename: "Tabela 1.1 (Pessoas_Geo)_grafico.png",
            title: "Distribuição de Pessoas por Região Geográfica",
            description: "Este gráfico apresenta a distribuição populacional por regiões geográficas do Brasil."
        },
        {
            filename: "Tabela 1.2 (Pessoas_pct_Geo)_grafico.png",
            title: "Percentual de Pessoas por Região Geográfica",
            description: "Percentual relativo de pessoas em cada região geográfica, destacando proporções populacionais."
        },
        {
            filename: "Tabela 1.3 (Instruc_Geo)_grafico.png",
            title: "Nível de Instrução por Região Geográfica",
            description: "Informações sobre o nível de instrução em diferentes regiões do Brasil."
        },
        {
            filename: "Tabela 1.4 (Instruc_pct_Geo)_grafico.png",
            title: "Percentual de Nível de Instrução por Região Geográfica",
            description: "Percentuais detalhados sobre o nível de instrução por região."
        },
        {
            filename: "Tabela 1.5 (dificult_BR)_grafico.png",
            title: "Dificuldades Relatadas no Brasil",
            description: "Dados sobre dificuldades enfrentadas pela população brasileira em diversas áreas."
        },
        {
            filename: "Tabela 1.7 (DomDefic_BR)_grafico.png",
            title: "Domicílios com Pessoas com Deficiência no Brasil",
            description: "Estatísticas sobre domicílios habitados por pessoas com deficiência no Brasil."
        },
        {
            filename: "Tabela 1.10 (PaiFilho_Geo)_grafico.png",
            title: "Relação de Pais e Filhos por Região",
            description: "Gráfico mostrando a relação entre pais e filhos por região geográfica."
        },
        {
            filename: "Tabela 1.11 (Nupc_BR)_grafico.png",
            title: "Número de Pessoas por Domicílio",
            description: "Informações sobre a quantidade de pessoas por domicílio em todo o Brasil."
        },
        {
            filename: "Tabela 1.12 (Nupc_pct_BR)_grafico.png",
            title: "Percentual de Pessoas por Domicílio",
            description: "Percentuais que detalham a composição dos domicílios no Brasil."
        }
    ];

    // Renderiza os gráficos na página
    charts.forEach(chart => {
        const chartItem = document.createElement("div");
        chartItem.className = "chart-item";

        const img = document.createElement("img");
        img.src = `tabelas/${chart.filename}`;
        img.alt = `Gráfico: ${chart.title}`;
        img.addEventListener("click", () => openPopup(img.src, img.alt)); // Adiciona evento para abrir o popup

        const details = document.createElement("div");
        details.className = "chart-details";
        details.innerHTML = `
            <h2>${chart.title}</h2>
            <p>${chart.description}</p>
        `;

        chartItem.appendChild(img);
        chartItem.appendChild(details);
        chartsList.appendChild(chartItem);
    });

    // Função para abrir o popup
    function openPopup(src, alt) {
        popupImage.src = src;
        popupImage.alt = alt;
        imagePopup.style.display = "flex";
    }

    // Fecha o popup ao clicar no botão "X" ou fora da imagem
    closePopup.addEventListener("click", () => {
        imagePopup.style.display = "none";
    });
    imagePopup.addEventListener("click", (e) => {
        if (e.target === imagePopup) {
            imagePopup.style.display = "none";
        }
    });
});
