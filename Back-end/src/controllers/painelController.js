// Dados simulados por enquanto (você pode conectar ao banco depois)
const paineis = [
  {
    id: 1,
    cliente: 'Letícia Vale',
    link: 'https://app.powerbi.com/view?r=CLIENTE1_LINK',
  },
  {
    id: 2,
    cliente: 'Laís Ramos',
    link: 'https://app.powerbi.com/view?r=CLIENTE2_LINK',
  }
];

export const getPainel = (req, res) => {
  const { id } = req.params;
  const painel = paineis.find(p => p.id == id);

  if (!painel) {
    return res.status(404).json({ mensagem: 'Painel não encontrado' });
  }

  res.json(painel);
};
