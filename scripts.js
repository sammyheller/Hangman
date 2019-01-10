var california=["rincon" , "lowers" , "oceanbeach" , "bolinas" , "pleasurepoint" , "mavericks"];
var africa=["jbay" , "skeletonbay" , "dungeons" , "longbeach"];
var hawaii=["pipeline" , "backdoor" , "jaws" , "sunset" , "gums"];
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var word = "";
var lives = 6;
var missed = "";
var picked = [];
var randomWord = "";


function giveMode() {

    clearGame();

    var mode = document.getElementById("wordMode").value;
    mode = parseInt(mode);
    if(mode == 1){
        var rand = california[Math.floor(Math.random() * california.length)];
    }
    if(mode == 2){
        var rand = africa[Math.floor(Math.random() * africa.length)];
    }
    if(mode == 3){
        var rand = hawaii[Math.floor(Math.random() * hawaii.length)];
    }

    randomWord = rand;
    printWord(rand);

}

function printWord(rand){
    var randWord = rand.split("");
    var word = "";


    for(var i=0; i<randWord.length; i++) {
        if (picked.indexOf(randWord[i]) > -1) {
            word += randWord[i];
        } else {
            word += "_ ";
        }
    document.getElementById("slots").innerHTML = word;
    }
}


function alphabetButtons() {
    var buttonTime;
    var div=document.getElementById("btn");

    for(var i=0; i<letters.length; i++){
        buttonTime = document.createElement("button");
        buttonTime.setAttribute("class" , "alphaButtons");
        buttonTime.setAttribute("value" , letters[i]);
        buttonTime.setAttribute("onclick" , "clickedButton(this)");
        buttonTime.innerHTML = letters[i];

        div.appendChild(buttonTime);
    }
}



function clickedButton(sammu){


    document.getElementById("click").innerHTML = sammu.value;
    if(lives>0){
        picked[picked.length] = sammu.value;
    }
    printWord(randomWord);
    sammu.disabled = true;



    if(randomWord.indexOf(sammu.value) == -1) {
        var missedLetter = sammu.value;
        if(lives>0){
            lives = lives-1;
        }
        if(lives <= 0){
            lives = "Sorry, mission failed";
           // return;
        }
    }else{
        missedLetter = "";
    }



    var status = document.getElementById("slots").innerHTML;
    if(status.indexOf("_") == -1) {
        document.getElementById("congrats").innerHTML = "Congratulations! You Got It!";
        return false;
    }



    document.getElementById("lives").innerHTML = lives.toString();
    missed = missed + " " + missedLetter;
    document.getElementById("missed").innerHTML = missed;


}


function clearGame(){
    word = "";
    lives = 6;
    missed = "";
    picked = [];
    randomWord = "";
    var buttons = document.getElementsByClassName("alphaButtons");
    document.getElementById("lives").innerHTML = lives.toString();
    document.getElementById("missed").innerHTML = missed.toString();
    document.getElementById("congrats").innerHTML = "";


    for(var i=0; i<buttons.length; i++){
        buttons[i].disabled = false;
    }
}
