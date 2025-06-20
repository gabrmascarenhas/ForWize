// forwize-backend/src/app.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importar as rotas da sua pasta routes/
// Garanta que todos estes arquivos realmente exportam um router e usam '.js' na importação
import authRoutes from '../src/routes/authRoutes.js';
import clienteRoutes from '../src/routes/clienteRoutes.js';
import painelRoutes from '../src/routes/painelRoutes.js';
import uploadRoutes from '../src/routes/uploadRoutes.js';
import planoRoutes from '../src/routes/planoRoutes.js';
import contatoRoutes from '../src/routes/contatoRoutes.js';

dotenv.config();

const app = express();

// Middlewares Globais (Ordem padrão: JSON parser, depois CORS)
app.use(express.json()); // Permite que o Express leia JSON do corpo das requisições
app.use(cors());         // Habilita o CORS para permitir requisições do seu frontend

// Definição das Rotas da API
// IMPORTANTE: Adicionado o prefixo '/api' para corresponder ao proxy do frontend
// Ajustado para usar apenas um caminho para 'authRoutes'
app.use('/api/contato', contatoRoutes); // Exemplo: '/api/contato/enviar'
app.use('/api/auth', authRoutes);       // Engloba '/api/auth/login', '/api/auth/register', etc.
app.use('/api/upload', uploadRoutes);   // Exemplo: '/api/upload/arquivo'
app.use('/api/planos', planoRoutes);    // Exemplo: '/api/planos/todos'
app.use('/api/clientes', clienteRoutes); // Exemplo: '/api/clientes/listar'
app.use('/api/painel', painelRoutes);   // Exemplo: '/api/painel/dados'
app.get('/api/pinga', (req, res) => {
    console.log('Requisição de teste recebida no backend!'); // Verá isso no terminal do backend
    res.status(200).json({ message: 'Conexão com o backend funcionando!' });
  });
  
  

// Rota raiz para / - para verificar se a API está online
app.get('/', (req, res) => {
  res.send('ForWize API rodando!');
});

// Outras rotas e tratamentos de erro, se houver

export default app;