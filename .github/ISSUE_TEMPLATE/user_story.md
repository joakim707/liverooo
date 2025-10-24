## US01  
Contexte : En tant qu’utilisateur, je veux voir la liste des restaurants autour du bureau  

AC :  
- Affichage d’une liste statique de restaurants avec nom, type, délai.  
- Données simulées en JSON.  

Json  
[  
    { "nom": "Sushi Zen", "type": "Japonais", "delai": "20 min" },  
    { "nom": "Pizza Mia", "type": "Italien", "delai": "30 min" }  
]  
  
Tests attendus : UI + unitaire (affichage)  
  
## US02  
Contexte : En tant qu’utilisateur, je veux que les restaurants soient triés par proximité.  
  
AC :  
- Tri basé sur une distance simulée.  
- Affichage mis à jour dynamiquement.  
  
Json  
[  
    { "nom": "Burger Spot", "distance": 0.3 },  
    { "nom": "Wrap House", "distance": 0.8 }  
]  
  
Tests attendus : unitaire (tri), intégration  
  
## US03  
En tant qu’utilisateur, je veux filtrer les restaurants par type de cuisine.  
  
AC :  
- Menu déroulant avec les types disponibles.  
- Filtrage appliqué à la liste.  
  
Json  
{ "filtre": { "type": "Indien" } }  
  
Tests attendus : UI + unitaire (filtrage)  
  
## US04  
Contexte : En tant qu’utilisateur, je veux filtrer les restaurants par délai de livraison  
  
AC :  
- Champ de sélection du délai max.  
- Mise à jour de la liste en temps réel.  
  
Json  
{ "filtre": { "delaiMax": 25 } }  
  
Tests attendus : intégration + UI  
  
## US05  
Contexte : En tant que chef d’équipe, je veux créer une commande avec budget/pers et deadline  
  
AC :  
- Formulaire avec validation des champs.  
- Enregistrement local ou mock API.  
  
Json  
{  
    "participants": 4,  
    "budgetParPersonne": 12,  
    "deadline": "2025-10-03T18:00:00"  
}  
  
Tests attendus : unitaire + intégration  
  
## US06  
Context : En tant que chef d’équipe, je veux recevoir une alerte si le budget est dépassé.  
  
AC :  
- Calcul du total en temps réel.  
- Alerte visuelle + blocage du bouton.  
  
Json :  
{  
    "budgetTotal": 48,  
    "commande": [  
        { "nom": "Burger", "prix": 13 },  
        { "nom": "Wrap", "prix": 12 },  
        { "nom": "Salade", "prix": 14 },  
        { "nom": "Boisson", "prix": 10 }  
    ]  
}  
  
Tests : UI + unitaire (calcul)  