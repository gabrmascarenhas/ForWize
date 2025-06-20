// scripts/criarUsuarioAdmin.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt.js';

const prisma = new PrismaClient();

async function criarUsuarioAdmin() {
  const senhaCriptografada = await bcrypt.hash('123456', 10); // 🔒 Troque a senha se quiser

  const admin = await prisma.user.create({
    data: {
      nome: 'Letícia Vale',
      email: 'leticia@forwize.com',
      senha: senhaCriptografada,
      tipo: 'admin',
      clienteId: null
    }
  });

  console.log('✅ Admin criado com sucesso:', admin);
}

criarUsuarioAdmin()
  .catch((e) => {
    console.error('❌ Erro ao criar admin:', e);
  })
  .finally(() => {
    prisma.$disconnect();
  });
