(function(){

    //outputs string to the body of the document
    // document.write("hello from coin-flip.js");

    //outputs the string to the browsers console
    console.log("hello from coin-flip.js");
        let whatDoYouThink = prompt("heads or tails?");
        let coinFlipper= document.querySelector("#coinFlipper");

        coinFlipper.addEventListener("click", function(){
            if(Math.random()>.5){
                console.log("heads");
            }else {
                console.log("tails");
            }
        })

    


})();