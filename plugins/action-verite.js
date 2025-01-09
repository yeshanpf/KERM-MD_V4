const { cmd } = require("../command");

// Liste des questions pour la commande vérité
let questionsVerite = [
  "As-tu déjà menti à tes amis ? Si oui, pourquoi ?",
  "Quel est le plus gros secret que tu gardes pour toi ?",
  "Si tu pouvais sortir avec une célébrité, qui choisirais-tu ?",
  "As-tu déjà eu un coup de foudre ?",
  "Quel est ton plus grand regret dans la vie ?",
  "As-tu déjà trahi la confiance de quelqu’un ?",
  "Quel est ton fantasme secret ?",
  "Si tu pouvais changer une chose dans ton passé, ce serait quoi ?",
  "Quel est ton pire souvenir d’enfance ?",
  "As-tu déjà embrassé quelqu’un du même sexe ?",
  "Quel est le mensonge le plus étrange que tu aies dit ?",
  "Quel est ton plus grand rêve ?",
  "As-tu déjà eu des sentiments pour une personne qui n’était pas célibataire ?",
  "Que ferais-tu si tu gagnais à la loterie ?",
  "Quel est ton plus grand complexe physique ?",
  "As-tu déjà eu une aventure d’un soir ?",
  "Si tu devais choisir entre la célébrité et l’anonymat, quel serait ton choix ?",
  "Qui est la personne que tu aimerais le plus impressionner ?",
  "Si tu pouvais avoir n’importe quel pouvoir, lequel choisirais-tu ?",
  "Quel est ton plus grand fantasme ?",
  "Si tu pouvais retourner dans le passé, quelle époque voudrais-tu vivre ?",
  "Tu as déjà eu un crush sur un(e) ami(e) ?",
  "As-tu déjà menti pour ne pas aller à un événement ?",
  "Si tu devais écrire un livre sur ta vie, quel en serait le titre ?",
  "Qu’est-ce qui te met mal à l’aise lors d’un rendez-vous amoureux ?",
  "Si tu pouvais changer une chose dans ton corps, que choisirais-tu ?",
  "Quel est ton plus grand rêve que tu n’as pas encore réalisé ?",
  "As-tu déjà eu un coup de cœur pour quelqu’un qui était en couple ?",
  "As-tu déjà menti sur ton âge ?",
  "Si tu pouvais choisir un talent magique, lequel voudrais-tu ?",
  "Quel est le plus gros mensonge que tu aies dit à tes parents ?",
  "Es-tu déjà tombé amoureux en ligne ?",
  "Si tu pouvais rencontrer une personne du passé, qui serait-ce ?",
  "Si on te donnait une chance de revivre une journée de ta vie, laquelle choisirais-tu ?",
  "Quel est ton plus grand fantasme inavoué ?",
  "As-tu déjà été jaloux(se) de la réussite d’un ami(e) ?",
  "Si tu pouvais vivre dans un autre pays, lequel choisirais-tu ?",
  "Quel est le moment le plus embarrassant que tu aies vécu ?",
  "As-tu déjà trompé ton partenaire ?",
  "Si tu pouvais parler à ton futur toi, que lui dirais-tu ?",
  "Si tu pouvais vivre sans aucune conséquence pendant 24 heures, que ferais-tu ?",
  "Si tu pouvais avoir n’importe quelle célébrité comme ami(e), qui choisirais-tu ?",
  "As-tu déjà eu une expérience gênante en public ?",
  "Que ferais-tu si tu avais une journée entière à toi, sans aucune responsabilité ?",
  "Quel est ton plus grand rêve que tu as honte de partager ?",
  "Si tu pouvais rencontrer une célébrité, qui serait-ce et pourquoi ?",
  "As-tu déjà eu des pensées inappropriées envers un(e) ami(e) ?",
  "Si tu pouvais passer une journée avec n’importe qui, vivant ou mort, qui choisirais-tu ?",
  "As-tu déjà regretté de ne pas avoir dit quelque chose à quelqu’un ?",
  "Si tu devais vivre une semaine sans ton téléphone, comment réagirais-tu ?",
  "Si tu pouvais changer une décision que tu as prise dans ta vie, laquelle serait-ce ?",
  "Quel est ton plus grand tabou ?",
  "As-tu déjà eu un coup de foudre pour quelqu’un d’interdit ?",
  "Quel est le pire secret que tu as gardé ?",
  "Si tu pouvais effacer un souvenir de ta mémoire, lequel choisirais-tu ?",
  "As-tu déjà eu un amour platonique qui t’a brisé le cœur ?",
  "Si tu devais rencontrer un fantôme, qui aimerais-tu qu’il soit ?",
  "Quel est le plus gros risque que tu aies pris dans ta vie ?",
  "As-tu déjà flirté avec quelqu’un alors que tu étais déjà en couple ?",
  "Si tu pouvais être invisible pendant une journée, que ferais-tu ?",
  "Quel est ton plus grand complexe ?",
  "As-tu déjà eu un crush sur un(e) prof ?",
  "Si tu pouvais supprimer une personne de ta vie, qui serait-ce ?",
  "Quel est ton plus grand fantasme qui te fait honte ?",
  "Si tu devais vivre avec un seul objet pour le reste de ta vie, lequel choisirais-tu ?",
  "Quel est ton secret le mieux gardé ?",
  "As-tu déjà eu une aventure avec un(e) inconnu(e) ?",
  "Quel est ton plus grand complexe en amour ?",
  "As-tu déjà eu des sentiments pour un(e) ami(e) du sexe opposé ?",
  "As-tu déjà dit des choses que tu ne pensais pas pour impressionner quelqu’un ?",
  "Si tu pouvais tout changer dans ton passé, quel aspect changerais-tu ?",
  "Quel est le plus grand fantasme que tu voudrais réaliser un jour ?",
  "As-tu déjà menti pour obtenir quelque chose ?",
  "Si tu pouvais rencontrer ton futur toi, que lui demanderais-tu ?",
  "As-tu déjà été amoureux(se) de quelqu’un que tu ne pouvais pas avoir ?",
  "Quel est ton plus grand regret en amour ?",
  "Si tu pouvais annuler un événement dans ton passé, lequel serait-ce ?",
  "As-tu déjà eu un rêve étrange qui t’a marqué ?",
  "Si tu pouvais être n’importe qui pendant une journée, qui serais-tu ?",
  "Quel est ton plus grand fantasme inavoué ?",
  "Si tu pouvais changer de vie avec quelqu’un pour un jour, qui choisirais-tu ?",
  "As-tu déjà eu une aventure amoureuse sur Internet ?",
  "Si tu pouvais tout recommencer, qu’est-ce que tu changerais dans ta vie ?",
  "Quel est le secret le plus étrange que tu gardes ?",
  "As-tu déjà eu des sentiments pour quelqu’un que tu ne devais pas ?",
  "Quel est le plus gros secret que tu as avoué à quelqu’un ?",
  "As-tu déjà eu des pensées interdites ?",
  "Si tu pouvais faire n’importe quoi sans conséquence, que ferais-tu ?",
  "Quel est ton plus grand fantasme secret ?",
  "Si tu pouvais revivre un moment de ta vie, lequel serait-ce ?",
  "Quel est le plus gros mensonge que tu as dit pour protéger quelqu’un ?",
  "Si tu pouvais voyager dans le temps, quel moment de l’histoire voudrais-tu visiter ?"
];

// Fonction pour obtenir une question aléatoire
const getRandomQuestion = () => questionsVerite[Math.floor(Math.random() * questionsVerite.length)];

// Commande Vérité
cmd({
    pattern: "verite",
    desc: "Pose une question de vérité aléatoire.",
    category: "fun",
    react: "🕵️‍♂️",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    try {
        // Vérifie si un utilisateur est mentionné
        const mentionedUsers = m.mentionedJid || [];
        const randomQuestion = getRandomQuestion();

        if (mentionedUsers.length > 0) {
            // Si un utilisateur est mentionné, envoie la question avec un tag
            const targetUser = mentionedUsers[0];
            return await reply(`🎭 *Question de Vérité pour @${targetUser.split("@")[0]} :*\n\n${randomQuestion}`, {
                mentions: [targetUser],
            });
        } else {
            // Si aucun utilisateur n'est mentionné, envoie une question générale
            await reply(`🎭 *Question de Vérité :*\n\n${randomQuestion}`);
        }
    } catch (error) {
        console.error("Erreur avec la commande vérité :", error);
        reply("❌ *Une erreur est survenue en essayant de traiter la commande vérité.*");
    }
});

// Liste des actions pour la commande action
const actions = [
  "Saute sur place pendant 30 secondes.",
  "Fais 10 pompes.",
  "Chante une chanson de ton choix.",
  "Fais une danse ridicule pendant 1 minute.",
  "Imite un animal pendant 30 secondes.",
  "Raconte une blague.",
  "Mets un oreiller sur ta tête et parle comme si tu étais une célébrité.",
  "Fais un compliment à quelqu’un dans la conversation.",
  "Envoie un message à ton ex en lui disant bonjour.",
  "Prends un selfie avec une grimace.",
  "Fais une déclaration d’amour à la personne à ta gauche (ou dans la conversation).",
  "Poste une photo de toi sur tes réseaux sociaux avec un message drôle.",
  "Récite l’alphabet à l’envers.",
  "Mime une situation de ta vie dans les 10 dernières minutes.",
  "Essaye de faire un cri de singe pendant 20 secondes.",
  "Mets un morceau de papier sur ta tête et fais une annonce importante.",
  "Prends un objet autour de toi et montre-le à la caméra avec une présentation digne d’un infopublicité.",
  "Fais une impression de ta voix comme si tu étais un robot.",
  "Fais une vidéo en dansant pendant 30 secondes.",
  "Écris sur un papier (J'aime les bananes) et prends une photo.",
  "Donne un compliment à tout le monde dans la conversation.",
  "Écris une lettre d’amour à une personne au hasard dans la conversation.",
  "Réponds à ce message avec une citation inspirante.",
  "Fais 20 squats.",
  "Essaye de parler avec un accent étrange pendant 2 minutes.",
  "Prends un objet, ferme les yeux et devine ce que c’est.",
  "Essaye de faire la meilleure imitation de quelqu’un dans la conversation.",
  "Envoie un message à ton meilleur ami(e) en lui disant quelque chose de mignon.",
  "Fais 10 sauts sur place.",
  "Envoie un message à quelqu’un dans la conversation et dis (J’ai une surprise pour toi!)",
  "Mime une scène de film et fais deviner à la personne de quel film il s’agit.",
  "Si tu pouvais faire un vœu maintenant, que demanderais-tu ?",
  "Choisis une personne dans la conversation et fais-lui une déclaration d'amour.",
  "Imite ton animal de compagnie pendant 30 secondes.",
  "Fais une danse de ton choix et enregistre-toi.",
  "Fais 10 jumping jacks.",
  "Crée une nouvelle règle dans le chat et oblige tout le monde à la suivre pendant 10 minutes.",
  "Fais une vidéo en train de parler avec un accent d’un autre pays pendant 1 minute.",
  "Écris un poème improvisé et partage-le avec la conversation.",
  "Lance un défi à une personne dans la conversation.",
  "Joue à un jeu de mime et laisse les autres deviner ce que tu mimes.",
  "Essaye de toucher tes orteils pendant 30 secondes.",
  "Fais un discours de motivation pendant 1 minute.",
  "Raconte une histoire embarrassante que tu n’as jamais racontée à personne.",
  "Mets tes chaussettes sur tes mains et parle avec une voix de bébé.",
  "Fais un bisou à l’écran.",
  "Joue à un jeu de rôle pendant 5 minutes.",
  "Essaye de chanter une chanson sans la musique.",
  "Fais la meilleure imitation de ton professeur.",
  "Lance un défi à quelqu’un dans la conversation et vois s’il/elle le relève.",
  "Fais la danse de la victoire pendant 30 secondes.",
  "Prends une photo en utilisant un filtre étrange et envoie-la.",
  "Mets un coussin sur ta tête et raconte une blague.",
  "Mets des lunettes de soleil et fais une déclaration de mode.",
  "Essaye de dire une phrase difficile à prononcer 3 fois rapidement.",
  "Envoie un message à quelqu’un dans la conversation avec un message mystérieux.",
  "Fais une présentation comme si tu étais un professeur d'université.",
  "Crée un sketch comique et fais-le devant la caméra.",
  "Écris un message secret dans le chat et laisse les autres deviner ce que tu as écrit."
];

// Fonction pour obtenir une action aléatoire
const getRandomAction = () => actions[Math.floor(Math.random() * actions.length)];

// Commande Action
cmd({
    pattern: "action",
    desc: "Fais une action aléatoire.",
    category: "fun",
    react: "🤪",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    try {
        // Vérifie si un utilisateur est mentionné
        const mentionedUsers = m.mentionedJid || [];
        const randomAction = getRandomAction();

        if (mentionedUsers.length > 0) {
            // Si un utilisateur est mentionné, envoie l'action avec un tag
            const targetUser = mentionedUsers[0];
            return await reply(`🎭 *Action pour @${targetUser.split("@")[0]} :*\n\n${randomAction}`, {
                mentions: [targetUser],
            });
        } else {
            // Si aucun utilisateur n'est mentionné, envoie une action générale
            await reply(`🎭 *Action :*\n\n${randomAction}`);
        }
    } catch (error) {
        console.error("Erreur avec la commande action :", error);
        reply("❌ *Une erreur est survenue en essayant de traiter la commande action.*");
    }
});