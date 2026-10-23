---
name: Doubt-Driven Dev
description: Écrire ou modifier du code en assumant systématiquement ses doutes — identifier les hypothèses, vérifier les plus risquées avant d'agir, trancher sur des faits
---

# Doubt-Driven Development

Le doute n'est pas une faiblesse, c'est le point de départ de la méthode. Au lieu d'écrire du code en suivant sa première intuition, on identifie explicitement tout ce qu'on pense savoir sans l'avoir vérifié, puis on confronte le plus risqué à la réalité.

## Principes

1. **Aucune croyance ne va sans preuve.** Les bibliothèques changent, les docs se périment, les entrées sortent du cadre attendu.
2. **On vérifie l'hypothèse, pas l'imagination.** Une micro-expérience (test, REPL, lecture de source) vaut mieux qu'un code écrit « au cas où ».
3. **Le doute non résolu est un risque assumé, jamais un oubli.** Tout doute encore ouvert est dit au user.

## Workflow

1. **Douter** : lister par écrit les hypothèses sous-jacentes à la solution (comportement d'une API, forme des données, environnement, attentes utilisateur).
2. **Trier** par risque : probabilité d'être fausse × coût de l'erreur.
3. **Vérifier** le doute le plus critique en premier : petit test, prototype, ou lecture de la doc source. Pas de code permanent avant vérification.
4. **Consigner** : noter ce qui est confirmé, infirmé, ou reste ouvert.
5. **Construire** sur les faits, sans réintroduire de hypothèses non marquées.

## Règles de décision

- Un doute peut invalider toute la direction → on vérifie **avant** d'écrire.
- Le coût d'une erreur est élevé (sécurité, données, appel payant, effet de bord) → on vérifie tout de suite.
- Le doute ne porte que sur un détail → on le note, on avance, on ferme la boucle plus tard.
- Deux interprétations possibles → on teste les deux si c'est rapide, sinon on demande.

## En pratique, à chaque étape

- Nommer le doute : « je crois que X, mais je n'en suis pas sûr parce que Y ».
- Choisir le moyen de vérification le plus court.
- Rendre compte : confirmé / infirmé / toujours ouvert, avec le niveau de confiance.

## Ne pas faire

- Ne pas écrire de code pour un cas « au cas où » sans hypothèse à son sujet.
- Ne pas laisser de doute ouvert sans l'avoir signalé.
