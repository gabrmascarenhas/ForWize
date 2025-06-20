import express from 'express';
import { enviarMensagem } from '../controllers/contatoController.js';

const router = express.Router();
router.post('/', enviarMensagem);
export default router;
