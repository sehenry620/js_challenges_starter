(function(){

    // document.write("hello from hangman-lite.js");


    var word = "Stephanie";
    var letter = "t";

    let result = word.indexOf(letter);
    
    // console.log(result);

    if(result == -1){
        console.log("No, that letter does not exist");
    }else {
        let answer = (word.split(letter).length -1);
        console.log("Yes, the letter" +" " + letter + " exists" + " " + answer + " time(s) in my word");
    }

    

})();