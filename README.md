# Agent de recherche d'alternance (n8n + RAG)

Un agent n8n qui, deux fois par jour (10 h et 21 h), récupère les offres d'alternance, les compare à mon profil grâce au RAG, les note sur 10 avec une justification, et prépare une lettre de motivation et un message LinkedIn pour les offres à 7/10 ou plus. Tout est rangé dans un Google Sheet, consultable depuis un tableau de bord web. Rien n'est envoyé automatiquement : je garde le contrôle.

Projet réalisé dans le cadre du MSc AI Applied to Business (Eugenia School).

## Vidéo de présentation

🎥 **Lien vidéo :** [À AJOUTER]

## Transcript

Le transcript complet de la vidéo est disponible dans [TRANSCRIPT.md](./TRANSCRIPT.md).

## Comment ça marche

| Étape | Rôle | Nœuds |
|---|---|---|
| 1. Profil | Mon profil (Google Drive) est découpé en morceaux et indexé en mémoire : c'est la base du RAG. | Télécharger le profil, Lire le profil, Vecteurs du profil, Ranger le profil |
| 2. Offres | Les offres de l'API La bonne alternance sont récupérées, séparées une par une, filtrées (titre et lien obligatoires) et dédupliquées. | Chercher les offres, Une offre par ligne, Offres complètes, Nouvelles offres |
| 3. Analyse IA | Pour chaque offre, l'agent consulte mon profil, note l'offre sur 10 et rédige la lettre et le message LinkedIn si la note est de 7 ou plus. | Analyser l'offre, IA Gemini, Mon profil, Vecteurs de la recherche, Format de la note |
| 4. Résultat | Les offres sont séparées selon leur note, puis ajoutées au Google Sheet, une ligne par offre. | Note ≥ 7 ?, Ligne à postuler, Ligne à voir, Ajouter au Google Sheet |

Deux déclencheurs lancent le workflow : « Matin et soir » (10 h et 21 h) et « Test manuel ».

## Le modèle et le prompt

- **Modèle :** Google Gemini `gemini-flash-lite-latest`, température 0,3. Rapide et peu coûteux, adapté à l'analyse d'un grand nombre d'offres.
- **Prompt système structuré en XML :** rôle, règles de notation (compétences 4 pts, domaine et missions 3 pts, lieu et rythme 2 pts, attrait de l'entreprise 1 pt), puis exemples.
- **3 exemples et 2 contre-exemples :** les exemples montrent une offre très adaptée (8/10), moyenne (5/10) et hors profil (2/10). Les contre-exemples montrent deux erreurs à éviter : rédiger une lettre pour une note inférieure à 7, et inventer une expérience absente du profil.
- **Sortie structurée :** le nœud « Format de la note » impose un JSON (note, justification, points forts, compétences manquantes, poste du manager, lettre, message LinkedIn).

## Choix techniques

- **Aucun nœud de code :** toute la logique passe par des nœuds natifs (Split Out, Filter, Remove Duplicates, If, Edit Fields).
- **Un seul nœud HTTP Request :** « Chercher les offres », car l'API La bonne alternance n'a pas de nœud natif dans n8n.
- **Déduplication entre les exécutions :** une offre déjà vue n'est jamais réanalysée.
- **Gestion des erreurs :** si Gemini ne répond pas (quota atteint par exemple), l'offre est quand même enregistrée avec le statut « Erreur IA ».

## Tableau de bord

Un petit site web, créé avec Google Apps Script, lit le Google Sheet et l'affiche de façon lisible : liste des offres triées par note, filtres, recherche, et détail de chaque offre (justification, lettre, message LinkedIn, boutons pour copier). Le statut de chaque offre (À postuler, Postulé, Entretien…) se met à jour depuis la page.

## Contenu du dépôt

- `workflow/agent-alternance.workflow.ts` : le workflow n8n au format TypeScript, généré avec la CLI n8n.
- `workflow/agent-alternance.json` : le même workflow au format JSON, à importer directement dans n8n.
- `apps-script/Code.gs` et `apps-script/Index.html` : le tableau de bord web.
- `TRANSCRIPT.md` : le transcript de la vidéo.
- `skills/` : les 3 skills OpenChamber utilisés pour le projet.

## Installation

1. Importer `workflow/agent-alternance.json` dans n8n.
2. Créer les credentials et les relier aux nœuds :
   - **Google Gemini - Alternance** : clé Google AI Studio (nœuds IA Gemini, Vecteurs du profil, Vecteurs de la recherche).
   - **La bonne alternance - Clé API** : Header Auth, nom `Authorization`, valeur `Bearer TA_CLÉ` (nœud Chercher les offres).
   - **Google Drive - Profil alternance** : accès au fichier de profil (nœud Télécharger le profil).
   - **Google Sheets - Suivi alternance** : accès au Sheet de suivi (nœud Ajouter au Google Sheet).
3. Choisir son fichier de profil dans « Télécharger le profil » et son Google Sheet dans « Ajouter au Google Sheet ».
4. Lancer « Test manuel » pour vérifier, puis activer le workflow.
5. Pour le tableau de bord : dans le Google Sheet, ouvrir Extensions > Apps Script, coller `Code.gs` et `Index.html` (fichier HTML nommé `Index`), déployer en application web, puis coller l'URL obtenue dans la constante `URL_TABLEAU` de `Code.gs`.

## Limites connues

- L'analyse est lente : une pause de 12 secondes sépare chaque offre, pour respecter les limites de l'API Gemini.
- Seule La bonne alternance est branchée. Google Jobs (via SerpApi) est prévu pour une version suivante.
- L'IA peut encore surestimer certaines compétences : chaque lettre doit être relue avant l'envoi.

## Skills OpenChamber

Trois skills créés dans OpenChamber pour construire et fiabiliser ce projet. Chacun se trouve dans le dossier `skills/`.

| Skill | Rôle |
|---|---|
| `Doubt-Driven Dev` | Écrire ou modifier du code en assumant systématiquement ses doutes — identifier les hypothèses, vérifier les plus risquées avant d'agir, trancher sur des faits |
| `Hostile Review` | Revue de code agressive — attaquer le code comme un adversaire ou un critique maximum pour dénicher bugs, failles et cas limites avant production |
| `Interview` | Préparer et conduire un entretien de recrutement technique — grille de questions, animation, évaluation objective et rapport structuré |
