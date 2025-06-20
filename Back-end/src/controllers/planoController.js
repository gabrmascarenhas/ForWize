import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// 🔹 Listar todos os planos
export const listarPlanos = async (req, res) => {
  try {
    const planos = await prisma.plano.findMany();
    res.json(planos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar planos' });
  }
};

// 🔹 Criar novo plano
export const criarPlano = async (req, res) => {
  const { nome, preco, descricao } = req.body;

  try {
    const novoPlano = await prisma.plano.create({
      data: {
        nome,
        preco: parseFloat(preco),
        descricao
      }
    });

    res.status(201).json(novoPlano);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar plano' });
  }
};

// 🔹 Atualizar plano
export const atualizarPlano = async (req, res) => {
  const { id } = req.params;
  const { nome, preco, descricao } = req.body;

  try {
    const planoAtualizado = await prisma.plano.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        preco: parseFloat(preco),
        descricao
      }
    });

    res.json(planoAtualizado);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar plano' });
  }
};

// 🔹 Deletar plano
export const deletarPlano = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.plano.delete({
      where: { id: parseInt(id) }
    });

    res.json({ mensagem: 'Plano excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao excluir plano' });
  }
};
