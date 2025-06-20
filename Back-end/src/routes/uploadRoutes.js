import express from 'express';
import { uploadContrato } from '../controllers/uploadController.js';

const router = express.Router();

router.post('/', uploadContrato);

export default router;
