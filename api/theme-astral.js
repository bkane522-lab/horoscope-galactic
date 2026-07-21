module.exports = function handler(req, res) {
  const sign = (req.query.sign || "Lion").toString();
  res.status(200).json({
    sign,
    title: "Thème astral",
    text: `Le profil ${sign} met en lumière votre façon d’agir, de ressentir et d’entrer en relation.`
  });
};
