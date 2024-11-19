document.addEventListener("DOMContentLoaded", () => {
    const formTipo = document.getElementById("formTipo");
    const formExtra = document.getElementById("formExtra");

    formTipo.addEventListener("change", () => {
        const selected = formTipo.value;
        formExtra.innerHTML = "";

        if (selected === "duvida") {
            formExtra.innerHTML = `
                <div class="form-group">
                    <label for="duvida">Como usar o site?</label>
                    <textarea id="duvida" name="duvida" rows="4" required></textarea>
                </div>
            `;
        } else if (selected === "avaliacao") {
            formExtra.innerHTML = `
                <div class="form-group">
                    <label for="avaliacao">Qual a sua avaliação do site?</label>
                    <textarea id="avaliacao" name="avaliacao" rows="4" required></textarea>
                </div>
                <div class="form-group">
                    <label>Classificação:</label>
                    <div class="stars">
                        <input type="radio" id="star5" name="estrelas" value="5" required>
                        <label for="star5">5 estrelas</label>
                        <input type="radio" id="star4" name="estrelas" value="4">
                        <label for="star4">4 estrelas</label>
                        <input type="radio" id="star3" name="estrelas" value="3">
                        <label for="star3">3 estrelas</label>
                        <input type="radio" id="star2" name="estrelas" value="2">
                        <label for="star2">2 estrelas</label>
                        <input type="radio" id="star1" name="estrelas" value="1">
                        <label for="star1">1 estrela</label>
                    </div>
                </div>
            `;
        } else if (selected === "sugestao") {
            formExtra.innerHTML = `
                <div class="form-group">
                    <label for="sugestao">Sugestão para o site:</label>
                    <textarea id="sugestao" name="sugestao" rows="4" required></textarea>
                </div>
            `;
        } else if (selected === "questionario") {
            formExtra.innerHTML = `
                <div class="form-group">
                    <label for="pergunta1">Por que a acessibilidade em sites é importante?</label>
                    <textarea id="pergunta1" name="pergunta1" rows="4" required></textarea>
                </div>
                <div class="form-group">
                    <label for="pergunta2">Qual benefício mais chamou sua atenção nos gráficos?</label>
                    <textarea id="pergunta2" name="pergunta2" rows="4" required></textarea>
                </div>
            `;
        }
    });
});
