var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // source of random image

var image1 = document.querySelectorAll("img")[0]; // selects the first image

image1.setAttribute("src", randomImageSource);

 var randomNumber2 = Math.floor(Math.random() * 6) + 1;

 var randomDiceImage2 = "dice" + randomNumber2 + ".png";

 var randomImageSource2 = "images/" + randomDiceImage2;

 var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src", randomImageSource2);

 if(randomNumber1 > randomNumber2)
 {
    document.querySelector("h1").innerHTML = "Player 1 Win's!";
 }
 else if(randomNumber2 > randomNumber1)
 {
    document.querySelector("h1").innerHTML = "Player 2 Win's!";
 }
 else
 {
   document.querySelector("h1").innerHTML = "Draw!";
 }
