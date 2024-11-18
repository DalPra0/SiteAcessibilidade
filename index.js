const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const artigosPath = path.join(__dirname, "artigos");

// Servir arquivos estáticos da pasta 'artigos'
app.use("/artigos", express.static(artigosPath));

// Rota para listar os arquivos da pasta
app.get("/artigos", (req, res) => {
    fs.readdir(artigosPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao listar arquivos." });
        }
        res.json(files);
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
