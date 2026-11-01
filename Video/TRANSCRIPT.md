# Transcript de la vidéo

VideoN8N

Durée : 8:41

Format : mp4 

[00:00] Mohamed :

Salut Lucas, j'espère que tu vas bien. Alors là, je vais rapidement te présenter mon projet, donc mon workflow une week-end d'agent d'alternance. Donc en l'occurrence, je suis parti d'une problématique assez simple, c'est que chercher une alternance, en fait, ça me prend beaucoup de temps.

Il faut parcourir vraiment des centaines d'offres, il faut analyser les offres, il faut selon les compétences, voir lesquelles correspondent à mon profil, etc. Donc en soi, en fait, c'est vraiment très long et très complexe. Moi, ce que j'ai voulu faire, c'est un workflow qui puisse m'aider à aller chercher tout simplement sur Internet des offres, me proposer une analyse par rapport à mon profil, me proposer une lettre de motivation, un message LinkedIn et qui je dois aborder sur LinkedIn.

Pour te présenter mon workflow très rapidement, parce que là, j'ai fait une vidéo juste avant qui était un peu longue. Donc ici, j'ai deux nœuds, dont le trigger, un nœud manuel et un nœud matin et soir. Ce nœud-là, c'est pour avoir un workflow automatique qui va permettre de lancer le workflow à 10h et à 21h tous les jours.

Donc par la suite, ça part directement dans télécharger le profil. Pour télécharger le profil, j'ai mis sur Google Drive mon CV en format texte découpé en plusieurs parties. Donc voilà ce que je suis, ce que je cherche, l'expérience, etc.

Donc par la suite, ça va aller dans ranger le profil. Ce nœud-là, il va tout simplement permettre de ranger le profil pour le garder en mémoire pour pouvoir faire une analyse par la suite pour les offres. Parce que si ça relance à chaque fois une analyse de tout mon CV, ça va être trop compliqué et trop long.

Donc ici, on va avoir un nœud lire le profil. Donc ce nœud de lire le profil, il va permettre de lire le contenu du fichier et le découper en petits morceaux de texte. Ces petits morceaux de texte, par la suite, ils vont aller dans vecteur du profil.

Et ici, vecteur du profil, ça va permettre de synthétiser les textes en différents vecteurs, comme une sorte de code pour pouvoir les passer par la suite à l'IA pour les analyser plus rapidement. Ici, on va avoir le nœud chercher les offres. Bien sûr, comme je t'ai dit, tout se range ensuite dans ranger le profil.

Ici, dans le nœud chercher les offres, j'ai branché une API de la bonne alternance. Donc c'est un site de recherche d'alternance tout simplement qui répartit des alternances sur un site. Par la suite, j'ai mis quelques critères.

Donc voilà, à Paris, en bas de puce 5, dans des métiers bien précis. Ici, ça va être une offre par ligne. En fait, ça va servir à quoi ? Le problème, c'est de la payer.

Elle envoie les offres en un bloc entier. Et si elle les reçoit, elle ne va pas comprendre l'IA. Donc ici, ça va vraiment être pour découper les offres en différents groupes.

Ici, on va avoir offre complète. Donc voilà, ça va garder toutes les offres qui sont complètes. Donc qui ont un titre, qui ont un lien.

Un lien, je parle pour TCAB, pour pouvoir aller sur l'offre. Toutes les offres inutilisables vont s'arrêter là. Et ici, on va avoir un nœud, donc nouvelle offre.

Donc ce nœud-là, nouvelle offre, c'est comme une sorte de barrière pour ne pas analyser deux fois la même offre. Donc dès qu'une offre aura été analysée, elle ne passera plus sur cette barrière-là pour aller analyser l'offre. Sinon, ça pourrait être très coûteux pour analyser l'offre.

Donc ici, on va avoir tout ce qu'il y a à analyser. Ici, on allait analyser l'offre. Donc avec ici un prompt user, donc vraiment comment les offres vont arriver.

Donc le titre, l'entreprise, le lieu, les compétences demandées, la description. Et ici, je lui ai fait un système message. Donc vraiment le rôle qu'il a. Donc il aide un étudiant, un master en séance.

Ici, je lui ai donné des règles. Donc il consulte toujours le profil, il note l'offre sur 10. Donc moi, oui, c'est ce que je lui ai demandé, c'est qu'il fasse une notation sur l'offre, de me donner le poste du manager, parce que mon intérêt, c'est également qu'il me fasse un message pour aller aborder la personne sur LinkedIn.

Et si la note est de 7 ou plus, de me donner une aide de motivation ou un message LinkedIn. Si c'est inférieur, il garde l'offre, mais il ne me donne ni de l'aide de motivation, ni de message LinkedIn. Ici, je lui ai donné différents exemples, exemple 1, exemple 2, exemple 3, avec des contre-exemples et des mauvaises réponses.

Alors, par la suite, ce que ça fait, c'est que... Pardon. Je disais, ce que ça fait par la suite, en fait, c'est que ça va aller analyser ces offres-là et me donner un ordre de compétences. Enfin, une notation entre 7 et 10.

Ça va aller sur Gmini. Donc ici, ça va être l'IA qui va tout simplement réfléchir et qui va écrire. J'ai utilisé le Flashlight Litest, comme tu nous as indiqué.

Et donc, également, la liste de l'offre, ça va aller dans mon profil. C'est ici que ça va faire le lien pour aller fouiller dans la mémoire dont il était juste avant. Ça va aller fouiller dans la mémoire de l'étape 1 et ça va renvoyer selon mon profil.

Ça va découper en 6 parties, donc espérance, projet, compétences, envie, l'aide de motivation. Ça va couper mon profil. Et ici, on va avoir encore le vecteur de la recherche.

Donc, le côté embedding, tu vas pouvoir faire en sorte que ça communique de manière linéaire, de la même manière en tout cas. Justement, comme je t'expliquais au début, avec un code. Ici, on va avoir le format de la note.

Donc là, c'est la réponse que l'IA va me donner. Donc, avec la note, la justification, les points forts, poste du manager, compétences manquantes, la lettre et le message LinkedIn. Une fois que tout ça est fait, ça va partir sur un noeud IF.

Le noeud IF, en fait, c'est si la note est au cheat set, ça va me marquer dans la ligne à postuler, donc dans mon cheat. Et ici, si c'est en dessous de 7, ça va me donner dans la ligne avoir. Dans la ligne postuler, je vais avoir la ligne de motivation, le message LinkedIn.

Et ensuite, ça va aller sur Google Sheet. Le Google Sheet, il se présente comment ? Il se présente de cette manière. Alors ici, tu vas avoir la date, l'entreprise, le poste, le lieu.

Ici, tu vas avoir la notation. Donc, le pourquoi, les points forts, les compétences manquantes. Comme tu le vois ici, pour les notes en dessous de 7, on va avoir ici la lettre de motivation qui n'est pas inclue et également la recherche LinkedIn qui n'est pas inclue.

Moi, ce que j'ai fait pour que ça soit plus lisible, c'est qu'ici, comme tu le verras, j'ai ouvert le tableau de bord et tout. Et ça mène sur un lien. Le lien, en fait, il permet d'avoir quelque chose de plus esthétique, de pouvoir mieux se retrouver.

On va voir par exemple ici l'alternance marketing produit chez Compagnie Saint-Gobain, la note, le pourquoi cette note, les points forts, les compétences manquantes, le manager à chercher, la lettre de motivation et le message LinkedIn. Ici, tu vas voir les différents liens avec voir l'offre. Tu vas voir chercher sur LinkedIn avec directement une recherche qui va se faire sur la personne qui doit être recherchable et copier les lettres et copier le message avec le différent statut.

Donc, voilà en l'occurrence pour mon projet LinkedIn et mon workflow. Alors, par la suite, ce que je vais faire, c'est que je vais me mettre là. Ici, tu as les différentes commandes que j'ai retenues.

Tout d'abord, la help qui permet tout simplement d'avoir les différentes commandes du N8 Entry. Donc ici, on a les options avec la version, etc. Ici, on a les différentes commandes, soit pour initialiser le N8 Entry, soit pour regarder les projets, par exemple, voire pour lister tous les projets N8 Accessible.

Ici, tu vas voir les dossiers. Tu vas voir la fonction Pool, par exemple, qui permet, comme ce qu'on a fait pour un TypeScript, de convertir le workflow en TypeScript. Donc, voilà.

Ici, tu vas voir vraiment toutes les différentes commandes qui sont possibles. Par la suite, il y a également le N8 Entry Project, par exemple, que j'ai retenu. Donc là, tu vas lister les projets qu'on a dans notre N8 Entry avec l'ID du projet, le nom du projet et le type de projet, donc le personnel, etc.

Donc, voilà. En tout cas, sinon, en termes de feedback, ce que je peux t'apporter, c'est que franchement, le cours a été super intéressant. J'ai appris beaucoup de choses.

N8 Entry, c'est déjà un petit peu… J'avais déjà tâté, mais déjà, c'est déjà plus pertinent le fait de comprendre les nœuds, leur fonctionnement, à quoi ils servent. C'était vraiment super intéressant. Donc, voilà.

Les masterclass également, vraiment, c'était intéressant. Je suis resté à toutes les masterclass. Donc, j'ai noté beaucoup de choses.

Ça m'a permis vraiment de comprendre un peu plus déjà comment on peut se lancer businessment parlant dans ce domaine-là. Enfin, voilà. En tout cas, je te remercie beaucoup et je te jette une bonne continuation.
