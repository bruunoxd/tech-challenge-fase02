const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blog')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro de conexão com MongoDB:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Blog funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
