import express from 'express';
import EventoController from './controller/EventoController';
import UserController from './controller/UserController';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.end('Bem vindo!');
})

app.use('/api', EventoController)

app.use('/api', UserController)

app.use((req, res) => {
  res.status(404).end('Pagina nao encontrada!')
})

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});