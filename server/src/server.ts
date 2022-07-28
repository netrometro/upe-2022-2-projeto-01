import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.end('Bem vindo!');
})

app.use((req, res) => {
  res.status(404).end('Pagina nao encontrada!')
})

app.listen(3333, () => {
  console.log('HTTP server running!');
});