import express from 'express';
import EventoController from './controller/EventoController';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.end('Bem vindo!');
})

app.use('/api', EventoController)

app.use((req, res) => {
  res.status(404).end('Pagina nao encontrada!')
})

app.listen(3333, () => {
  console.log('HTTP server running!');
});