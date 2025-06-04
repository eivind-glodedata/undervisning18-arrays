// Basic array / Flat array
// square bracket

const fruitBowl = ["Apple", "Banana", "Orange"];
console.log(fruitBowl);
console.log(fruitBowl[0]);

const character = ["Julius", "Bard", 99, false];
console.log("Min karakter " + character[0] + " er en " + character[1] + " på level " + character[2]);

// Array of objets

const allCharacters = [
    {charName: "Julius", charClass: "Bard", charLevel: 99, isDown: false},
    {charName:"Charles", charClass: "Wizard", charLevel: 1, isDown: true}
];

console.log(allCharacters);
console.log(allCharacters[0]);
console.log(allCharacters[0].charName);
console.log(allCharacters[1].charClass);

document.addEventListener("DOMContentLoaded", function () {
   // console.log("Helloooo");
   const cardName = document.getElementById("cardName");
   const cardTitle = document.getElementById("cardTitle");
   const cardDescription = document.getElementById("cardDescription");
   const cardImage = document.getElementById("cardImage");
   console.log(cardName, cardTitle, cardDescription, cardImage);

   const cardInformation = [
    {cardName: "Julie Hauge", cardTitle: "Frontend utvikler", cardDescription: "Sjekk ut min GitHub", cardImage: "images/githubQrCode.png", cardImageDescription: "QR-kode"}
    ];

    //const cardDescriptionValue = cardInformation[0].cardDescription;

    cardName.textContent = cardInformation[0].cardName;
    cardTitle.textContent = cardInformation[0].cardTitle;
    //cardDescription.textContent = cardDescriptionValue;
    cardDescription.textContent = cardInformation[0].cardDescription;
    cardImage.src = cardInformation[0].cardImage;
    cardImage.alt = cardInformation[0].cardImageDescription;
});

// Nested arrays in objects

const shoppingCart = {
    fruits: [{"apple": ["Red apple", "Green apple", "Yellow apple"]}, "Banana", "Orange"],
    vegetable: ["Potato", "Carrot", "Brusselsprouts"]
}

//logg ut green apple
console.log(shoppingCart.fruits[0].apple[1]);


