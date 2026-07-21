# Horoscope Galactic

Pack propre prêt pour GitHub, Vercel et PWABuilder.

## Fichiers importants

- `index.html` : application complète.
- `manifest.json` : configuration PWA.
- `sw.js` : cache PWA.
- `icon-192.png` et `icon-512.png` : icônes principales.
- `icons/maskable-512.png` : icône Android maskable.
- `.well-known/assetlinks.json` : lien Android pour l’ouverture plein écran.
- `public/.well-known/assetlinks.json` : copie de sécurité.
- `api/` : fonctions serveur Vercel.

## PWABuilder

App name : Horoscope Galactic
Short name : Galactic
Package ID : com.bkane522lab.horoscopegalactic

## Après upload

1. Commit changes.
2. Vercel → Redeploy.
3. Tester : https://horoscope-galactic.vercel.app/?reset=1
4. Tester : https://horoscope-galactic.vercel.app/.well-known/assetlinks.json
5. Refaire le package Android dans PWABuilder.
