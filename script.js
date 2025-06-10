//"use strict";

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

/*
function hasClass(element, className) {
    return element.classList.contains(className);
  }

const element = document.querySelector('.example');
console.log(hasClass(element, 'example')); // true or false
*/

const frukt = ["Banana", "Orange", "Apple", "Mango"];
let text = frukt.constructor;
console.log(text);

let numbers = new Array(1, 2, 3, 4, 5, 76, 7, 8);
console.log(numbers);
console.log(numbers.length);

frukt.forEach(function (thefrukt) {
    console.log(thefrukt + "testing the non-arrow inline function");
});

for (const number of numbers) {
    console.log(number);
};

for (const frukten of frukt) {
    console.log(frukten);
};

frukt.forEach((bla, blabla, blablabla) => {
    console.log(`Index: ${blabla}, Value: ${bla}, Array: ${blablabla} tester foreach med tre argumenter`);
});

let total = 0;
numbers.forEach((tall) => {
    console.log(total);
    total += tall;
    console.log(total);
});

for (let i = 0; i < frukt.length; i++) {
    console.log(frukt[i] + " fra ekte for-loop!!!");
};

for (let yo = 0; yo < numbers.length; yo++) {
    console.log(numbers[yo] + " fra ekte loop!");
};

function logElement (element) {
    console.log("logging element " + element)
};

frukt.forEach(logElement);
numbers.forEach(logElement);

for (let test = 0; test < frukt.length; test++) {
    console.log(`Frukten er ${frukt[test]}`)
}

function addNumbers(a, b) {
    console.log("adderingsfunksjonen blir brukt")
    return a + b;
}

const result = addNumbers(34, 44);
console.log(`adderingfen er ${result}`)

const persona = {
    firstName : "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() {
        return this.lastName + this.firstName;
    }
 };

 const bala = persona.fullName();

 console.log(bala);

 const animal = {
    type: "dog"
 };

 animal.speak = function() {
    return "Woof!"
 }

 console.log(animal);

 console.log(animal.speak());

 console.log(this);

 let x = this;
 console.log(x);

 const teststring = "esihjtresiutwoi43t43wkj5";
 const testlength = teststring.length;
console.log(testlength + "er lengden");