module.exports = function handler(req, res) {
  const a = (req.query.a || "Lion").toString();
  const b = (req.query.b || "Taureau").toString();
  const score = 65 + ((a.length * 7 + b.length * 5) % 28);
  res.status(200).json({
    score,
    text: `Compatibilité ${a} / ${b} : une connexion à travailler avec douceur, clarté et respect du rythme de chacun.`
  });
};
