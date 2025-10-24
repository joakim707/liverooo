CONTRIBUTING.md – Charte de collaboration technique (Projet Liverooo!)
Bienvenue dans le projet Liverooo! Ce document définit les règles de contribution et les bonnes pratiques à suivre pour garantir un workflow clair, propre et collaboratif au sein de l’équipe DevOps.
1. Règles de branches
• main → branche protégée, uniquement via Pull/Merge Request après relecture.
• feat/... → pour les nouvelles fonctionnalités.
• fix/... → pour les corrections de bugs.
• docs/... → pour les modifications de documentation.
• test/... → pour les ajouts ou corrections de tests.
• chore/... → pour les tâches techniques ou de maintenance.
2. Conventions de commit
Chaque commit doit être clair, court et descriptif.
Format recommandé : <type>(<scope>): <description courte>

Types autorisés : feat, fix, docs, test, chore.

Exemples :
• feat(api): ajout de la route GET /restaurants
• fix(ui): correction du bouton de filtrage
• docs: mise à jour du README
3. Workflow Pull / Merge Request
1. Créer une nouvelle branche depuis main.
2. Faire ses commits localement.
3. Pousser la branche sur le dépôt distant.
4. Ouvrir une Pull Request (ou Merge Request sur GitLab).
5. Demander une relecture de code par un pair.
6. Fusionner après validation et succès des tests CI.
4. Checklist de revue de code
• Nom de branche conforme (feat/..., fix/...).
• Description claire et complète dans la PR.
• Code lisible et cohérent.
• Tests présents et verts.
• Pas de fichiers inutiles ou secrets.
• Lien vers l’issue associé (Fixes #...).
• Respect des DoR / DoD.
5. Rappels vers la DoR / DoD (Atelier A)
Definition of Ready (DoR) :
• Story claire, testable, réalisable en moins d’une demi-journée.
• Contexte et critères d’acceptation définis.
• Dépendances identifiées.

Definition of Done (DoD) :
• Code passe les tests locaux et CI/CD.
• Linting et documentation à jour.
• PR approuvée et fusionnée.
• Issue correspondante close.
6. Bonnes pratiques d’équipe
• Toujours synchroniser avant de créer une branche (git pull origin main).
• Éviter les branches trop longues.
• Relire le code d’un pair avant de merger.
• Discuter sur les PR pour garder une trace claire des échanges techniques.
