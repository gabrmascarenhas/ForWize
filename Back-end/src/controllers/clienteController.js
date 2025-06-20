import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// 🔹 Listar todos os clientes
export const listarClientes = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany({
      include: {
        plano: true,
        painel: true,
        contrato: true
      }
    });
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar clientes' });
  }
};

// 🔹 Buscar cliente por ID
export const buscarClientePorId = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await prisma.cliente.findUnique({
      where: { id: parseInt(id) },
      include: {
        plano: true,
        painel: true,
        contrato: true
      }
    });

    if (!cliente) {
      return res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }

    res.json(cliente);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar cliente' });
  }
};

// 🔹 Cadastrar novo cliente
export const cadastrarCliente = async (req, res) => {
  const { nome, empresa, email, planoId } = req.body;

  try {
    const cliente = await prisma.cliente.create({
      data: {
        nome,
        empresa,
        email,
        planoId: parseInt(planoId)
      }
    });

    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar cliente' });
  }
};
