module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ score: 86, message: 'Connexion lumineuse : équilibre, rythme et sincérité.' });
};
