import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Exemplo de usuário fake (vamos substituir por dados reais do banco depois)
const usuarioFake = {
  id: 1,
  email: 'cliente@forwize.com',
  senha: await bcrypt.hash('senha123', 10), // senha criptografada
  nome: 'Cliente ForWize',
};

// Login do usuário
export const login = async (req, res) => {
  const { email, senha } = req.body;

  if (email !== usuarioFake.email) {
    return res.status(401).json({ mensagem: 'E-mail inválido' });
  }

  const senhaValida = await bcrypt.compare(senha, usuarioFake.senha);

  if (!senhaValida) {
    return res.status(401).json({ mensagem: 'Senha incorreta' });
  }

  const token = jwt.sign({ id: usuarioFake.id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return res.json({ token, nome: usuarioFake.nome });
};
