module.exports = async (req, res) => {
  const sign = (req.query && req.query.sign) || 'Lion';
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({ sign, soleil: sign, lune: 'Intuition', ascendant: 'Royal', element: 'Or solaire' });
};
