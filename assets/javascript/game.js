

// var totalNumber = function () {
     
// }


   // console.log()
    
    //$("#total").innerHTML (totalNumber);

// var totalsNumber 
// var blueCrystalValue
// var whiteCrystalValue
// var greenCrystalValue
// var purpleCrystalValue
// var redCrystalValue

//press start button to get a random number
$("#start-button").on ("click", function() {
    console.log ("inside function");
    var totalsNumber = Math.floor((Math.random() * 200) + 100);
    console.log(totalsNumber);
    $("#total").text(totalsNumber);
});
 
//have the random total displayed in the card div


//generate a random number value for each gem
$("#bluecrystal").on("click", function(){
    console.log ("Inside Element");
    var blueCrystalValue = Math.floor((Math.random() * 20) + 10);
    $("#bluevalue").text(blueCrystalValue);
    $(blueCrystalValue).parseInt;
});
$("#whitecrystal").on("click", function(){
    var whiteCrystalValue = Math.floor((Math.random() * 20) + 10);
    $("#whitevalue").text(whiteCrystalValue);
});
$("#purplecrystal").on("click", function(){
    var purpleCrystalValue = Math.floor((Math.random() * 20) + 10);
    $("#purplevalue").text(purpleCrystalValue);
});
$("#greencrystal").on("click", function(){
    var greenCrystalValue = Math.floor((Math.random() * 20) + 10);
    $("#greenvalue").text(greenCrystalValue);
});
$("#redcrystal").on("click", function(){
    var redCrystalValue = Math.floor((Math.random() * 20) + 10);
    $("#redvalue").text(redCrystalValue);
});
//display gem numbers on the page

//press gems to add value to the total
$("#total").append (redCrystalValue + greenCrystalValue + whiteCrystalValue + blueCrystalValue);
//reset the total if the amount created by gems is greater 
if (totalsNumber === redCrystalValue + greenCrystalValue + whiteCrystalValue + blueCrystalValue) {
    totalsNumber.innerText = [""];
    alert ("You Win!");
    $("#redvalue").text = [""];
    $("#greenvalue").text = [""];
    $("#whitevalue").text= [""];
    $("#purplevalue").text=[""];
 }

 if (totalsNumber > redCrystalValue + greenCrystalValue + whiteCrystalValue + blueCrystalValue) {
    totalsNumber.innerText = [""];
    alert ("You Lose!");
    redCrystalValue.innerText = [""];
    greenCrystalValue.innerText = [""];
    whiteCrystalValue.innerText= [""];
    blueCrystalValue.innerText=[""];
 }

