module.exports = (req, res) => {
  const sign = (req.query.sign || 'Lion').toString();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ sign, message: `Cher ${sign}, votre ciel intérieur s’ouvre avec une vibration rare et lumineuse.`, conseil: 'Avancez avec calme et écoutez votre intuition.' });
};
