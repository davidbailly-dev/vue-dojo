# Programme d'apprentissage Vue.js 3

**Profil** : bases HTML/CSS/JS solides, découverte de Vue.js · rythme intensif (quasi quotidien) · suivi via ce document, mis à jour au fil des sessions.

**Environnement** : projet Vite + Vue 3, Composition API avec `<script setup>`, VS Code + extension Volar. Chaque jour = un défi concret avec des critères de réussite vérifiables (rendu dans le navigateur, code source montré, console sans warning).

**Comment ça marche** : tu fais le défi du jour en local, Claude Code corrige, commente ce qui aurait pu être fait autrement, et coche l'étape ici. Rien n'est chronométré à la seconde près — l'idée est d'enchaîner les jours sans trop de blancs pour que ça reste engageant.

---

## Phase 0 — Mise en place (Jour 1)

Objectif : un projet Vue 3 qui tourne, structure comprise, dépôt Git en Gitflow dès le départ.

- [x] Installer Node.js (LTS) et vérifier `node -v` / `npm -v`.
- [x] Créer le projet avec `npm create vite@latest vue-dojo -- --template vue`.
- [x] Installer les dépendances (`npm install`) et lancer `npm run dev`.
- [x] Initialiser le dépôt Git, créer le repo GitHub `vue-dojo`, relier, premier commit "Initial commit" sur `main`.
- [x] Créer `develop` à partir de `main`, la pousser, la définir comme branche par défaut pour les PR.
- [x] Explorer la structure générée : `main.js`, `App.vue`, `components/`, comprendre le rôle de chaque fichier.
- [x] Nettoyer le contenu par défaut de `App.vue` pour repartir sur une base vide (sur une branche `feature/setup-projet`, mergée dans `develop` en `--no-ff`).

**Défi du jour** : me montrer `App.vue` nettoyé et une capture (ou description) du rendu dans le navigateur, plus `git log --graph --all --decorate` montrant `main` et `develop`.

---

## Phase 1 — Réactivité et template (Jours 2 à 4)

### Jour 2 — Interpolation et directives de base
- Interpolation `{{ }}`, `v-bind` (et son raccourci `:`), `v-on` (et son raccourci `@`).
- `ref()` : créer une donnée réactive, comprendre pourquoi `.value` en JS mais pas dans le template.
- Défi : un compteur avec un bouton qui incrémente une valeur affichée à l'écran, plus un champ input dont la couleur de fond change selon sa longueur (via `:style` ou `:class`).
- Branche : `feature/compteur-interactif`.
- Livrable : code du composant + description du comportement observé.

### Jour 3 — Conditions et listes
- `v-if` / `v-else-if` / `v-else` vs `v-show` (différence de fonctionnement, quand utiliser l'un ou l'autre).
- `v-for` avec `:key`, pourquoi la clé est obligatoire.
- Défi : une liste de tâches (tableau statique en `ref`) affichée avec `v-for`, un bouton pour basculer l'affichage d'un message "aucune tâche" via `v-if` quand la liste est vide.
- Branche : `feature/liste-taches`.
- Livrable : capture avec liste pleine, puis vidée à la main dans le code pour montrer le message conditionnel.

### Jour 4 — Données dérivées et formulaires
- `computed()` vs une simple fonction / vs `watch()` : quand utiliser quoi.
- `watch()` et `watchEffect()` : différence de déclenchement.
- `v-model` sur un input texte, une checkbox, un select.
- Défi : un champ de recherche (`v-model`) qui filtre en direct la liste de tâches du jour 3 via une `computed`.
- Branche : `feature/recherche-taches` (part de `develop`, donc après le merge de `feature/liste-taches`).
- Livrable : démonstration du filtrage + explication de pourquoi c'est une `computed` et pas un `watch` ici.

**Fin de Phase 1** : créer `release/0.1.0` depuis `develop`, relire l'ensemble du code des jours 2-4, merger dans `main` et `develop`, taguer `v0.1.0`.

---

## Phase 2 — Comprendre les composants (Jour 5)

Objectif : théorie avant pratique, pour ne pas empiler des composants sans comprendre le modèle.

- Comprendre le découpage en composants : pourquoi et quand extraire un morceau d'UI dans son propre fichier `.vue`.
- Flux de données à sens unique : **props descendent, events remontent** (`props` / `emit`). Pourquoi un enfant ne modifie jamais directement une prop.
- Composition API vs Options API : ce que `<script setup>` automatise, pourquoi ce choix pour ce dojo.
- Notion de composant "présentational" (affiche) vs "container" (gère l'état) — pas obligatoire mais utile pour organiser la suite.

**Défi du jour** : m'expliquer avec tes mots (2-3 phrases) pourquoi Vue interdit de modifier une prop depuis l'enfant, et un exemple concret où tu utiliserais un `emit` plutôt qu'une prop.

---

## Phase 3 — Composants en pratique, à la main (Jours 6 à 9)

On construit une vraie arborescence de composants sans state manager externe, pour sentir où ça devient douloureux.

### Jour 6 — Props et emits
- Extraire une `TaskItem.vue` depuis la liste du Jour 3/4 : reçoit une tâche en prop, émet un event `toggle` ou `delete` vers le parent.
- Défi : la liste de tâches est maintenant composée de `TaskItem`, le parent gère l'état, les enfants ne font qu'afficher et émettre.
- Branche : `feature/task-item-component`.
- Livrable : code des deux composants + `git log` si versionné.

### Jour 7 — Slots
- Slot par défaut, slot nommé, slot scoped (accéder à une donnée de l'enfant depuis le parent).
- Défi : créer un composant générique `CardWrapper.vue` avec un slot `header` et un slot par défaut, l'utiliser pour habiller `TaskItem`.
- Branche : `feature/card-wrapper-slots`.
- Livrable : capture montrant deux usages différents du même `CardWrapper` avec un contenu différent.

### Jour 8 — Composables
- Extraire une logique réutilisable (ex. la logique de filtre du Jour 4, ou un compteur) dans une fonction `useXxx()` dans un fichier séparé.
- Comprendre pourquoi un composable n'est pas juste "une fonction utilitaire" mais peut renvoyer de la réactivité.
- Défi : créer `useTaskFilter.js`, l'utiliser dans le composant parent à la place du code de filtrage en dur.
- Branche : `feature/composable-filtre-taches`.
- Livrable : diff avant/après montrant le composant allégé.

### Jour 9 — Cycle de vie et provide/inject
- `onMounted`, `onUnmounted` : cas d'usage typiques (fetch au montage, cleanup d'un listener).
- `provide` / `inject` : partager une donnée à travers plusieurs niveaux sans "prop drilling".
- Défi : un thème clair/sombre `provide`-d depuis `App.vue`, `inject`-é et utilisé dans `TaskItem.vue` sans passer par les composants intermédiaires.
- Branche : `feature/theme-clair-sombre`.
- Livrable : démonstration du changement de thème appliqué à un composant profondément imbriqué.

**Fin de Phase 3** : créer `release/0.2.0` depuis `develop`, relire l'ensemble des composants produits, merger dans `main` et `develop`, taguer `v0.2.0`.

---

## Phase 4 — Écosystème et outillage (Jours 10 à 12)

### Jour 10 — Vue Router
- Installer `vue-router`, définir des routes, `<RouterView>` / `<RouterLink>`, params dynamiques (`/task/:id`).
- Défi : une page "Liste" et une page "Détail d'une tâche" (via un param d'URL), navigation entre les deux.
- Branche : `feature/routing-pages`.
- Bonus : un garde de navigation simple (ex. rediriger si un id n'existe pas).

### Jour 11 — Pinia
- Installer Pinia, créer un store pour l'état des tâches (remplace l'état géré à la main depuis la Phase 3).
- Comparer explicitement avec le `provide/inject` du Jour 9 : pourquoi Pinia devient pertinent à cette échelle.
- Défi : migrer l'état des tâches vers un store Pinia, accessible depuis n'importe quel composant sans prop drilling.
- Branche : `feature/store-pinia-taches`.
- Livrable : avant/après du composant parent, nettement simplifié.

### Jour 12 — Appels API et états asynchrones
- `fetch`/`axios` dans un composable, gestion de `loading` / `error` / `data`.
- Défi : charger une liste de tâches depuis une fausse API (ex. JSONPlaceholder ou un `json-server` local), afficher un état de chargement puis les données, gérer une erreur réseau simulée.
- Branche : `feature/chargement-api-taches`.
- Livrable : démonstration des trois états (chargement, succès, erreur).

**Fin de Phase 4** : créer `release/0.3.0` depuis `develop`, relire l'intégration Router/Pinia/API, merger dans `main` et `develop`, taguer `v0.3.0`.

---

## Phase 5 — Défi final (Jours 13-14)

Un scénario complet, enchaîné sans étapes détaillées cette fois — à toi de dérouler la bonne architecture :

> Construis une mini-app "gestionnaire de tâches" complète : liste filtrable, page de détail par tâche (route dynamique), état partagé via Pinia, chargement initial depuis une API (réelle ou simulée), thème clair/sombre persistant, et au moins un composant réutilisable avec slot.

- Livrable : le projet complet (dossier ou repo GitHub), une démonstration du rendu, un court résumé de tes choix d'architecture (pourquoi tel état dans le store et pas ailleurs, pourquoi tel composant est découpé ainsi).
- Découpage libre en plusieurs `feature/*` nommées selon les fonctionnalités livrées (ex. `feature/persistance-theme`), c'est aussi ça l'exercice : savoir décider soi-même où couper.
- Revue complète comme si c'était une review de code réelle.
- Clôture : `release/1.0.0` depuis `develop`, merge dans `main` et `develop`, tag `v1.0.0` — le dojo Vue se termine comme le dojo Gitflow, avec un historique `--graph --all --decorate` propre et lisible de bout en bout.

---

## Journal de progression

*(mis à jour au fil des sessions Claude Code)*

- **2026-08-17** — Phase 0 terminée : projet Vite/Vue créé, dépôt Git initialisé avec Gitflow (`main`/`develop`), repo GitHub `davidbailly-dev/vue-dojo` relié et `develop` en branche par défaut, `App.vue` nettoyé sur `feature/setup-projet` (PR mergée et branche supprimée). *Remarque : point sur le rôle de `-A` dans `git add` (prise en compte des suppressions) et sur `:root`/variables CSS (CSS natif, pas spécifique à Vue).*
