var randomNumber1 = Math.floor(Math.random() * 6 + 1);
//display image corresponding to dice. can they be in an array and select accordingly?
var randomImageSource1 = "images/dice"+randomNumber1+".png"
//targeting the html tag image for this one:
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
//display image corresponding to dice. can they be in an array and select accordingly?
var randomImageSource2 = "images/dice"+randomNumber2+".png"
//targeting the class .img for this one:
document.querySelector(".img2").setAttribute("src", randomImageSource2);


// image2.setAttribute("src",randomImageSource2)



if (randomNumber1 > randomNumber2) {
    //display player 1 wins at top in big letters - is there a class for this?
    document.querySelector("h1").innerHTML="Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
//     //display player 2 wins as above
    document.querySelector("h1").innerHTML="Player 2 Wins!";
} else {
//     //display that they tied, only other possibility
document.querySelector("h1").innerHTML="Draw!";

}