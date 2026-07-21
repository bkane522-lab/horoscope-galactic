module.exports = async (req, res) => {
  const a = (req.query && req.query.a) || 'Lion';
  const b = (req.query && req.query.b) || 'Taureau';
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({ a, b, score: 82, resume: 'Connexion solide et bienveillante.' });
};
