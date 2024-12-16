# 🎨 Galerie D'art en ligne

Ce projet est une plateforme de galerie d'art en ligne créée dans le cadre d'un travail en duo. Le site permet à l'artiste peintre de présenter ses œuvres, de gérer ses expositions à venir et passées. L'ensemble du projet a été développé en utilisant Next.js, Strapi, Tailwind CSS.

## 📋 Description du projet

L'objectif principal de ce projet est de créer une galerie d'art en ligne permettant à un artiste peintre de présenter ses œuvres (toiles), qu'elles soient disponibles à la vente ou déjà vendues. Le site comprend également une gestion des expositions à venir et passées, ainsi qu'une page "À propos" de l'artiste. Les visiteurs peuvent aussi prendre contact via un formulaire de contact.

Fonctionnalités principales :

- **Galerie d'Art** : Affichage des œuvres de l'artiste, avec distinction entre les œuvres disponibles et celles déjà vendues.
- **Expositions** : Gestion des expositions à venir et passées se fait de façon automatique.
- **Formulaire de contact** : Permet aux utilisateurs de contacter l'artiste, avec un envoi sécurisé via Nodemailer et une protection contre les failles XSS.
- **Admin Strapi** : Gestion complète du site via une interface admin avec Strapi. Après une formation rapide, le client peut mettre à jour les œuvres, les expositions et la page "À propos".

## 🛠️ Technologies et outils utilisés

- **TypeScript** : Utilisé pour le typage statique et la sécurité du code.
- **Tailwind CSS** : Framework CSS utilitaire pour un design rapide et réactif.
- **Next.js** : Framework React pour le rendu côté serveur et la génération de sites statiques.
- **Strapi** : Headless CMS pour gérer le contenu du site, comme les œuvres et les expositions.
- **Nodemailer** : Pour l'envoi sécurisé d'e-mails depuis le formulaire de contact.
- **Vercel & Render** : Plateformes d'hébergement pour le déploiement de l'application Next.js et Strapi.
- **SEO Optimization** : Optimisation SEO pour assurer une bonne visibilité sur les moteurs de recherche.
- **PostgreSQL** : Base de données pour gérer les données utilisateurs et les œuvres d'art.

## 🔐 Sécurité

Le projet inclut plusieurs mesures de sécurité pour assurer la protection des données utilisateurs et du contenu du site :

- **CORS** : Configuration des politiques de contrôle d'accès pour sécuriser les échanges entre le front-end et le back-end.
- **dotenv** : Gestion des variables d'environnement pour garder les informations sensibles comme les clés API en sécurité.

## 📂 Architecture du projet

L'architecture du projet est divisée de manière claire pour faciliter le développement et la gestion :

- **Frontend (Next.js)** :
  - pages/ : Contient toutes les pages (Routes) du site, y compris la page d'accueil, galerie, expositions, à propos et contact.
  - components/ : Composants réutilisables comme les cartes d'œuvres, les cartes d'expositions.

- **Backend (Strapi)** :
  - Content Types : Expositions, Œuvres, Contact, A propos, Utilisateurs.
  - Controllers : Gère la logique métier de chaque modèle.
  - Routes : Définit les points de terminaison pour récupérer ou envoyer des données vers le front-end.
  - Admin Panel : Interface utilisateur pour la gestion du contenu, accessible par l'artiste après une formation rapide.

## 🚀 Déploiement

Le site est déployé en ligne avec :

- Vercel pour le déploiement du frontend (Next.js).
- Render pour le déploiement de l'admin (Strapi) et de la base de données PostgreSQL, assurant ainsi la gestion du contenu à distance.
