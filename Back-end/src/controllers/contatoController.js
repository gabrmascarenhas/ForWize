
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const enviarMensagem = async (req, res) => {
  const { nome, email, mensagem } = req.body;

  try {
    const contato = await prisma.contato.create({
      data: { nome, email, mensagem }
    });

    res.status(201).json({ mensagem: 'Mensagem recebida!', contato });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao enviar contato' });
  }
};
