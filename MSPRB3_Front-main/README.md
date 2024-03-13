# React Template

Project front de la MSPR de 3ème année Arossa'je

## Installation et démarrage

- Clone le project
- Naviguer jusqu'au dossier du projet
- Ajouter un fichier .env.local à la racine du projet (regarder .env)
- Exécuté les commandes suivantes :

```bash
# 📦 Installer les dépendances
npm install
pnpm install
yarn install

# ▶️ Démarrez le serveur de développement
npm run dev
pnpm dev
yarn dev
```

## Architecture du Project

Ce projet suit une structure spécifique pour l'organisation et la facilité de navigation :

- 📁 `public`: Dossier contenant les fichiers static comme favicon, manifest, images, etc.
- 📁 `src`: Dossier contenant le code source du projet. Il inclue :
  - 📁 `api`: Dossier contenant toutes les requêtes API. (axios)
  - 📁 `components`: Dossier contenant toutes les composant React (logique métier). Chaque composant a sa propre architecture:
    - 📄 `{ComponentName}.jsx`: Fichier principal du composent.
    - 📄 `{ComponentName}.module.scss`: Fichier de styles du composent.
  - 📁 `pages`: Dossier contenant les pages React.
  - 📁 `routes`: Dossier contenant le paramétrages des routes (react-router).
  - 📁 `stores`: Dossier contenant les stores et clé react-query.
  - 📁 `styles`: Dossier contenant la définitions des styles globaux a l'application (variables, theme, etc.).
  - 📁 `utils`: Dossier contenant les fonctions utiles.
  - 📄 `main.jsx`: Fichier principal du projet et point d'entré du projet.
- 📄 `package.json`: Fichier de configuration du projet.

## Librairies

### Stack de Technologie utilisé:

- Library/Framework JS : [React](https://reactjs.org/)
- Language : [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- Gestionnaire de Package : [pnpm](https://pnpm.io/)
- Builder : [Vite](https://vitejs.dev/)
- Linter/Code formatter : [EsLint](https://eslint.org/) / [Prettier](https://prettier.io/)

#### Librairie Majeur :

Gestionnaire des Data :

- [React-Query](https://tanstack.com/query/v4/docs/react/overview) → Gestionnaire de données asynchrones et de mise en cache (Cache, gestion de l'état des Promesses, etc)
- [Axios](https://axios-http.com/fr/docs/intro) → Client HTTP basé sur Promise pour communiquer avec la partie Back-end

Gestionnaire de formulaire :

- [React-Hook-Form](https://react-hook-form.com/) → Librairie de gestion de formulaire

Routing :

- [React-router-dom](https://reactrouter.com/web/guides/quick-start) → Libraire utilisée pour gérer le routage et la navigation entre les pages de l'application

CSS :

- [Material UI](https://mui.com/) → Librairie de composants UI React
- [Sass](https://sass-lang.com/) → Préprocesseur CSS qui ajoute des fonctionnalités au CSS. Il permet, entre autres, de mieux structurer et simplifier le code, d'éviter les répétitions, etc

Icons :

- [Material Icons](https://mui.com/components/material-icons/) → Librairie d'icônes

Map :

- [Leaflet](https://leafletjs.com/) → Librairie de cartographie interactive
- [React-Leaflet](https://react-leaflet.js.org/) → Wrapper de Leaflet pour React
