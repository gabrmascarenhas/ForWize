import express from 'express';
import { getPainel } from '../controllers/painelController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rota protegida – cliente precisa estar logado
router.use(authMiddleware);

// Buscar link do painel (Power BI) por cliente ID
router.get('/:id', getPainel);

export default router;
