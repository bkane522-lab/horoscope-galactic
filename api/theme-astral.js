module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ soleil: 'Signe choisi', lune: 'Intuition', ascendant: 'Présence', message: 'Lecture astrale prête à enrichir.' });
};
