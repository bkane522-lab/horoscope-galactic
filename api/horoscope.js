module.exports = async (req, res) => {
  const sign = (req.query && req.query.sign) || 'Lion';
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({
    sign,
    message: `Cher ${sign}, aujourd’hui l’univers vous invite à ralentir pour mieux entendre votre véritable voix intérieure.`,
    advice: 'Faites confiance à votre intuition, elle connaît le chemin.'
  });
};
