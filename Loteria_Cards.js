let shufflerUrl = "https://www.random.org/sequences/?min=1&max=54&format=plain&rnd=new&col=1";
let cards, cardIndex;
let currentCard = ""



// Shuffles cards and makes sure the game can start
function shuffleCards() {
    console.log("Button press successful");
    cards = httpGet(shufflerUrl).split("\n");
    cardIndex = -1;
    console.log(cards);
    document.getElementById("drawButton").style.visibility = "visible";
    document.getElementById("previousButton").style.visibility = "visible";
    document.getElementById("cardImg").style.visibility = "visible";
    drawCard();
}

function drawCard() {
    if (cardIndex<53)
        cardIndex++;
    console.log(cards[cardIndex]);
    currentCard = "Cards/Card_"+cards[cardIndex]+".jpg"
    document.getElementById("cardImg").src=currentCard
}
function goBack() {
    if(cardIndex>0)
        cardIndex--;
    console.log(cards[cardIndex]);
    currentCard = "Cards/Card_"+cards[cardIndex]+".jpg"
    document.getElementById("cardImg").src=currentCard
}


//Function for any times I will use an HTTP GET Request
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}