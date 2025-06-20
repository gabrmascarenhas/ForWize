import express from 'express';
import { listarClientes, buscarClientePorId, cadastrarCliente } from '../controllers/clienteController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Todas as rotas protegidas por login (middleware)
router.use(authMiddleware);

// Listar todos os clientes
router.get('/', listarClientes);

// Buscar cliente por ID
router.get('/:id', buscarClientePorId);

// Cadastrar novo cliente
router.post('/', cadastrarCliente);

export default router;
