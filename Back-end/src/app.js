// forwize-backend/src/app.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js';
import painelRoutes from './routes/painelRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import planoRoutes from './routes/planoRoutes.js';
import contatoRoutes from './routes/contatoRoutes.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/contato', contatoRoutes);
app.use('/login', authRoutes);
app.use('/upload', uploadRoutes); // Deixar os arquivos acessíveis
app.use('/planos', planoRoutes);
app.use('/auth', authRoutes);
app.use('/clientes', clienteRoutes);
app.use('/painel', painelRoutes);

app.get('/', (req, res) => {
  res.send('ForWize API rodando!');
});

export default app;



