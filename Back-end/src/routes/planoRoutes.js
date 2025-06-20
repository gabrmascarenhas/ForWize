import express from 'express';
import {
  listarPlanos,
  criarPlano,
  atualizarPlano,
  deletarPlano
} from '../controllers/planoController.js';

const router = express.Router();

router.get('/', listarPlanos);
router.post('/', criarPlano);
router.put('/:id', atualizarPlano);
router.delete('/:id', deletarPlano);

export default router;
