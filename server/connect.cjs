const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Criando uma instância de MongoClient para ser reutilizada
const client = new MongoClient(process.env.ATLAS_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error.message);
    }
}

// Conectar ao banco de dados antes de iniciar o servidor
connectDB();

app.get('/home', async (req, res) => {
    try {
        const avisos = await client.db("ShoyoEnterprisePrototype").collection("avisos").find().toArray();
        res.json(avisos);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

process.on('SIGINT', async () => {
    await client.close();
    console.log("Conexão com MongoDB fechada");
    process.exit(0);
});
