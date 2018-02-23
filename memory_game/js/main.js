var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[3];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay);
if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("You found a match!");
	} else {
		alert("Sorry try again.");
	}
}