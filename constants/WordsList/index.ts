const wordsData = [
  {
    frenchWord: "Faire un pari sportif",
    englishWord: "Place a sports bet 🎲",
  },
  {
    frenchWord: "Déborder",
    englishWord: "Overflow",
  },
  {
    frenchWord: "Casserole",
    englishWord: "Saucepan / Pot 🍳",
  },
  {
    frenchWord: "Passoire",
    englishWord: "Strainer / Colander 🍝",
  },
  {
    frenchWord: "Souffler",
    englishWord: "Blow 💨",
  },
  {
    frenchWord: "C'est du vol ",
    englishWord: "It's a rip-off / It's theft 💰",
  },
  {
    frenchWord: "Voisin",
    englishWord: "Neighbor 👋",
  },
  {
    frenchWord: "Je suis en train de me préparer",
    englishWord: "I am getting ready 💅",
  },
  {
    frenchWord: "Prêter",
    englishWord: "Lend 🤲🏼",
  },
  {
    frenchWord: "Débiter de l’argent",
    englishWord: "Withdraw money 💸",
  },
  {
    frenchWord: "Savon pour les mains",
    englishWord: "Hand soap 🧼",
  },
  {
    frenchWord: "Alterner",
    englishWord: "Alternate ↔️",
  },
  {
    frenchWord: "Une série (à la salle de sport)",
    englishWord: "A set 💪🏼",
  },
  {
    frenchWord: "Échauffement",
    englishWord: "Warm-up",
  },
  {
    frenchWord: "Barre de traction",
    englishWord: "Pull-up bar 🏋🏻",
  },
  {
    frenchWord: "Haltères",
    englishWord: "Dumbbells",
  },
  {
    frenchWord: "Étirement",
    englishWord: "Stretching 💆🏻‍♂️",
  },
  {
    frenchWord: "Temps de repos",
    englishWord: "Rest period ⏱️",
  },
  {
    frenchWord: "Combien de serie il te reste",
    englishWord: "How many sets do you have left 🏋️",
  },
  {
    frenchWord: "Ça ne me dérange pas",
    englishWord: "I don't mind 😌",
  },
  {
    frenchWord: "Submerger",
    englishWord: "Overwhelm 🌊",
  },
  {
    frenchWord: "Débardeur",
    englishWord: "Tank top 👕",
  },
  {
    frenchWord: "Cours",
    englishWord: "Lecture 📚",
  },
  {
    frenchWord: "Faire des bêtises",
    englishWord: "To mess up 😬",
  },
  {
    frenchWord: "J'attends cela avec impatience",
    englishWord: "Looking forward to it 🤩",
  },
  {
    frenchWord: "J’aurais pu aller",
    englishWord: "I could have gone 🤷🏼‍♂️",
  },
  {
    frenchWord: "J’aurais pu manger",
    englishWord: "I could have eaten 🍽️",
  },
  {
    frenchWord: "Retourner en arrière / retour à la case départ",
    englishWord: "Head back 🔄",
  },
  {
    frenchWord: "Laisser",
    englishWord: "Let ✋",
  },
  {
    frenchWord: "Architecture",
    englishWord: "Architecture 🏛️ (Arkitecture 🔈)",
  },
  {
    frenchWord: "Pièce",
    englishWord: "Coin 💰",
  },
  {
    frenchWord: "Facture",
    englishWord: "Bill 📄",
  },
  {
    frenchWord: "Billet",
    englishWord: "Bill 💵",
  },
  {
    frenchWord: "Feuilles",
    englishWord: "Leaves 🍃",
  },
  {
    frenchWord: "Bien que",
    englishWord: "Even though 🌟",
  },
  {
    frenchWord: "Malgré",
    englishWord: "Despite 🌧️",
  },
  {
    frenchWord: "Inattendu",
    englishWord: "Unexpected ❓",
  },
  {
    frenchWord: "Couvert",
    englishWord: "Covered 📌",
  },
  {
    frenchWord: "Étoiles filantes",
    englishWord: "Shooting stars 🌠",
  },
  {
    frenchWord: "Observer",
    englishWord: "To observe 🔍",
  },
  {
    frenchWord: "La ville est animée",
    englishWord: "City is lively 🌆",
  },
  {
    frenchWord: "Rempli",
    englishWord: "Filled 🥛",
  },
  {
    frenchWord: "Faire une promenade",
    englishWord: "Take a walk 🚶",
  },
  {
    frenchWord: "Fruits en conserve",
    englishWord: "Canned fruits 🥫",
  },
  {
    frenchWord: "Bénévole",
    englishWord: "Volunteer ❤️",
  },
  {
    frenchWord: "Apporter",
    englishWord: "To bring 🎁",
  },
  {
    frenchWord: "Joie",
    englishWord: "Joy 😃",
  },
  {
    frenchWord: "Enrichit",
    englishWord: "Enriches 🎖️",
  },
  {
    frenchWord: "Élargir",
    englishWord: "To Broaden 📏",
  },
  {
    frenchWord: "Horizon",
    englishWord: "Horizon 🌅",
  },
  {
    frenchWord: "Voyager",
    englishWord: "Traveling ✈️",
  },
  {
    frenchWord: "Vertu ( une qualité )",
    englishWord: "Virtue 💎",
  },
  {
    frenchWord: "Plutôt que",
    englishWord: "Rather than ⚖️",
  },
  {
    frenchWord: "Que (pour comparer)",
    englishWord: "Than",
  },
  {
    frenchWord: "Voyager à l'étranger",
    englishWord: "To travel abroad 🌍",
  },
  {
    frenchWord: "Montgolfière",
    englishWord: "Hot-air balloon 🎈",
  },
  {
    frenchWord: "Lumineux",
    englishWord: "Bright 💡",
  },
  {
    frenchWord: "Je suis convaincu",
    englishWord: "I’m convinced 💪",
  },
  {
    frenchWord: "Au-dessus",
    englishWord: "On top of 👆🏼🍎",
  },
  {
    frenchWord: "Au-dessus",
    englishWord: "Over 👆🏼☁️",
  },
  {
    frenchWord: "Quitter / Laisser / (Partir)",
    englishWord: "Leave 🚪💨",
  },
  {
    frenchWord: "Laisser / (Authorization)",
    englishWord: "Let 👍🏼 (Let's = Let us)",
  },
  {
    frenchWord: "Serré",
    englishWord: "Tight 👌🏼",
  },
  {
    frenchWord: "Sorcière / Mégère",
    englishWord: "Shrew 🧙‍♀️",
  },
  {
    frenchWord: "Comportement",
    englishWord: "Behaviour 📘",
  },
  {
    frenchWord: "Je Vais Remplir Ma Bouteille",
    englishWord: "I Fill Up My Bottle 🍶",
  },
  {
    frenchWord: "Fois (Multiplication)",
    englishWord: "Times ✖️",
  },
  {
    frenchWord: "Aller À La Salle De Sport",
    englishWord: "Hit The Gym 🏋️‍♂️",
  },
  {
    frenchWord: "Agaçant",
    englishWord: "Annoying 😤",
  },
  {
    frenchWord: "Sièges",
    englishWord: "Seats 🪑",
  },
  {
    frenchWord: "Obtenir L'essentiel",
    englishWord: "Get The Gist 💡",
  },
  {
    frenchWord: "Toujours À La Mode",
    englishWord: "Still Trendy 🌟",
  },
  {
    frenchWord: "Tu N'auras Pas Besoin",
    englishWord: "You Won't Need 🚫",
  },
  {
    frenchWord: "Manteau",
    englishWord: "Coat 🧥",
  },
  {
    frenchWord: "Un Signal / Un Indice / Une Indication",
    englishWord: "Cue 🚦",
  },
  {
    frenchWord: "L’envie / Désir / Besoin",
    englishWord: "Craving 🍔",
  },
  {
    frenchWord: "Gênant",
    englishWord: "Awkward/Embarrassing 🤭",
  },
  {
    frenchWord: "Devine",
    englishWord: "Guess 💭",
  },
  {
    frenchWord: "J'avais L'habitude De",
    englishWord: "I Used To 🔙",
  },
  {
    frenchWord: "Je Suis Déçu",
    englishWord: "I Am Disappointed 😞",
  },
  {
    frenchWord: "Domaine / Terrain",
    englishWord: "Field 🌾",
  },
  {
    frenchWord: "Déduire",
    englishWord: "To Deduct",
  },
  {
    frenchWord: "Un Résumé (ex: Résumé D'un Livre)",
    englishWord: "Summary 📋",
  },
  {
    frenchWord: "Bruit",
    englishWord: "Noise 🔊",
  },
  {
    frenchWord: "Cauchemar",
    englishWord: "Nightmare 😱",
  },
  {
    frenchWord: "Je Peux T’assister",
    englishWord: "I Can Spot You 🤝",
  },
  {
    frenchWord: "Est-ce Que Nous Pouvons Alternée",
    englishWord: "Can We Take Turns 🔄",
  },
];

export default wordsData;
