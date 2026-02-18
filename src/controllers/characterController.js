const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/jackson.json");

exports.getCharacter = (req, res) => {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        const personagem = JSON.parse(data);
        res.json(personagem);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar personagem." });
    }
};

exports.updateCharacter = (req, res) => {
    try {
        const { historia, personalidade, ficha } = req.body;

        const novoPersonagem = {
            historia,
            personalidade,
            ficha
        };

        fs.writeFileSync(
            filePath,
            JSON.stringify(novoPersonagem, null, 2)
        );

        res.json({ message: "Personagem atualizado com sucesso!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar personagem." });
    }
};
