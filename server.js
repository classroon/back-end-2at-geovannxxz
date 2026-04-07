const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/mensagem', (req, res) => {
  res.json({ texto: "Olá! Esta mensagem veio do Back-End! 🚀" });
});

app.listen(3000, () => console.log("Servidor ligado na porta 3000"));
