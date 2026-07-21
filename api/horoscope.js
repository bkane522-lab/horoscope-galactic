const messages = {
  "Bélier": ["Cher Bélier, votre feu intérieur retrouve une direction claire. Posez une action simple, puis laissez le mouvement continuer.", "Aujourd’hui, Bélier, votre courage gagne à rester précis. Une décision calme aura plus de force qu’un grand discours."],
  "Taureau": ["Cher Taureau, votre stabilité devient votre avantage. Avancez sans précipitation : ce qui est solide n’a pas besoin de bruit.", "Aujourd’hui, Taureau, l’univers vous invite à protéger votre paix et à choisir ce qui nourrit vraiment."],
  "Gémeaux": ["Cher Gémeaux, une idée arrive au bon moment. Notez-la, testez-la, puis laissez votre curiosité faire le reste.", "Aujourd’hui, Gémeaux, la bonne conversation peut ouvrir une porte inattendue."],
  "Cancer": ["Cher Cancer, votre intuition voit juste. Prenez un instant pour écouter ce que votre corps savait déjà.", "Aujourd’hui, Cancer, votre douceur peut rétablir une harmonie autour de vous."],
  "Lion": ["Cher Lion, votre présence éclaire une situation. Restez généreux, mais gardez votre énergie pour ce qui vous respecte.", "Aujourd’hui, Lion, votre rayonnement gagne en puissance quand il reste calme et aligné."],
  "Vierge": ["Chère Vierge, votre clarté devient précieuse. Simplifiez une chose, et le reste suivra plus facilement.", "Aujourd’hui, Vierge, une petite amélioration bien placée peut transformer votre journée."],
  "Balance": ["Chère Balance, l’harmonie revient par une parole juste. Ne portez pas seul ce qui doit être partagé.", "Aujourd’hui, Balance, votre sens de l’équilibre attire une réponse plus douce."],
  "Scorpion": ["Cher Scorpion, une transformation discrète est déjà en cours. Faites confiance à ce qui se reconstruit en silence.", "Aujourd’hui, Scorpion, votre intensité devient une force si elle reste maîtrisée."],
  "Sagittaire": ["Cher Sagittaire, votre horizon s’ouvre. Une envie d’ailleurs peut devenir un plan concret.", "Aujourd’hui, Sagittaire, votre enthousiasme demande seulement une direction claire."],
  "Capricorne": ["Cher Capricorne, votre discipline porte ses fruits. Continuez sans chercher à prouver : les résultats parleront.", "Aujourd’hui, Capricorne, une priorité bien choisie vaut mieux que dix efforts dispersés."],
  "Verseau": ["Cher Verseau, votre vision sort du cadre. Gardez l’idée rare, mais rendez-la simple à comprendre.", "Aujourd’hui, Verseau, votre originalité peut inspirer si elle reste accessible."],
  "Poissons": ["Cher Poissons, votre sensibilité devient une boussole. Laissez l’intuition guider le premier pas.", "Aujourd’hui, Poissons, une énergie douce vous ramène vers la créativité et l’expression."]
};

module.exports = function handler(req, res) {
  const sign = (req.query.sign || "Lion").toString();
  const list = messages[sign] || messages["Lion"];
  const d = new Date();
  const index = (d.getFullYear() + d.getMonth() + d.getDate() + sign.length) % list.length;
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=86400");
  res.status(200).json({
    text: list[index],
    detail: "Guidance symbolique du jour. Avancez avec calme, lucidité et intention.",
    source: "galactic"
  });
};
