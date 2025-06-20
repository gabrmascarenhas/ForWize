import multer from 'multer';
import path from 'path';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Configura o destino e nome do arquivo
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const nomeArquivo = `cliente_${Date.now()}${ext}`;
    cb(null, nomeArquivo);
  }
});

const upload = multer({ storage });

export const uploadContrato = [
  upload.single('arquivo'),
  async (req, res) => {
    const { clienteId } = req.body;

    if (!req.file) {
      return res.status(400).json({ mensagem: 'Arquivo não enviado' });
    }

    try {
      const contrato = await prisma.contrato.create({
        data: {
          clienteId: parseInt(clienteId),
          arquivoURL: `/uploads/${req.file.filename}`
        }
      });

      res.status(201).json(contrato);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao salvar contrato' });
    }
  }
];
