module.exports = function handler(req, res) {
  const date = (req.query.date || "").toString();
  const digits = date.replace(/\D/g, "").split("").map(Number);
  const total = digits.reduce((a, b) => a + b, 0);
  const number = total ? ((total - 1) % 9) + 1 : 7;
  res.status(200).json({ number, text: `Votre vibration du jour est ${number}.` });
};
