# Liverooo!

**Liverooo!** est une application qui permet aux équipes de bureau de consulter des restaurants, créer des commandes collectives et respecter un budget.

---

## 🎯 Objectif

- Consulter la liste des restaurants autour du bureau.  
- Trier et filtrer les restaurants par proximité, type de cuisine et délai de livraison.  
- Créer des commandes collectives avec un budget par personne et une deadline.  
- Recevoir des alertes si le budget est dépassé.

---

## ✨ Fonctionnalités

| Fonctionnalité                       | Description                                                      | Statut        |
|-------------------------------------|------------------------------------------------------------------|---------------|
| Liste des restaurants                | Visualiser tous les restaurants autour du bureau                | Terminé       |
| Tri par proximité                     | Les restaurants les plus proches apparaissent en premier        | Terminé       |
| Filtrage par type de cuisine          | Affiner la recherche selon les préférences culinaires           | En cours      |
| Filtrage par délai de livraison       | Choisir les restaurants selon le temps de livraison             | À venir       |
| Création de commandes collectives     | Définir un budget par personne et une date limite               | En cours      |
| Alertes de dépassement de budget      | Notifications si le budget de la commande est dépassé           | À venir       |

---

## 📂 Structure du projet

Liverooo/  
├── api/ # Backend  
│ ├── package.json # Dépendances Node.js  
│ ├── server.js # Point d'entrée du serveur  
│ ├── .env # Variables d'environnement  
│ ├── routes/ # Endpoints REST  
│ │ ├── restaurants.js  
│ │ └── commandes.js  
│ ├── controllers/ # Logique métier  
│ │ ├── restaurantController.js  
│ │ └── commandeController.js  
│ ├── models/ # Modèles de données  
│ │ ├── restaurant.js  
│ │ └── commande.js  
│ └── tests/ # Tests backend  
│ └── api.test.js  
│  
├── web/ # Frontend  
│ ├── package.json  
│ ├── public/  
│ │ └── index.html  
│ ├── src/  
│ │ ├── App.js  
│ │ ├── index.js  
│ │ ├── components/ # Composants React  
│ │ │ ├── RestaurantList.js  
│ │ │ └── CommandeForm.js  
│ │ ├── pages/ # Pages de l'application  
│ │ │ ├── Home.js  
│ │ │ └── Commandes.js  
│ │ ├── services/ # Appels API  
│ │ │ └── api.js  
│ │ └── styles/ # Fichiers CSS ou SCSS  
│ │ └── main.css  
│ └── tests/ # Tests frontend  
│ └── App.test.js  
│  
├── docs/ # Documentation  
│ ├── architecture.md  
│ └── README.md  
│  
├── .gitignore  
└── README.md # Documentation principale  

---

✅ **Points clés de cette structure :**  

- `api/` contient tout le backend (Node.js/Express), organisé en **routes**, **controllers**, **models** et **tests**.  
- `web/` contient le frontend React avec **components**, **pages**, **services** et **styles**.  
- `docs/` pour toute la documentation supplémentaire (architecture, user stories, notes de dev).  
- Fichiers principaux comme `README.md`, `.gitignore`, et `package.json` à la racine et dans chaque dossier de projet pour gérer les dépendances.  

---

---

## Tests
npm

---

## 🚀 Lancer le projet localement

1. Cloner le repository :  
```bash
git clone <URL_DU_REPO>
```

---

## Equipe

• Joakim WILONDJA - Backend  
• Isaac LEVY – Frontend  
• Anatole BREL - Backend  
