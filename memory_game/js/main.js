var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}
];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay.length < 2) {
		return;
	} else if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};
var flipCard = function (cardID) {
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log("Player flipped " + cards[cardID].suit + " at " + cards[cardID].cardImage );
	checkForMatch();
};

flipCard(0);
flipCard(1);



