import app from './src/app.js';

const PORT = 3300;

app.get('/api/test', (req, res) => {
  console.log('Requisição de teste recebida no backend!'); // Verá isso no terminal do backend
  res.status(200).json({ message: 'Conexão com o backend funcionando!' });
});
app.get('/api/pinga', (req, res) => {
  console.log('Requisição de teste recebida no backend!'); // Verá isso no terminal do backend
  res.status(200).json({ message: 'Pinguço!' });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
