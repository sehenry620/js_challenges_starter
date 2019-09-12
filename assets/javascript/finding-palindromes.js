(function(){
    

    let word = "kayak"; 

    // console.log(word.split(""));

    let wordSplit = word.split(""); 
    // console.log(wordSplit);

    let wordReverse = wordSplit.reverse();
    // console.log(wordReverse);

    let wordJoin = wordReverse.join("");
    // console.log(wordJoin);


    if(word == wordJoin)
    {
        console.log("That word is a palindrome")
        
    }else(word != wordJoin)
        console.log("That word is not a palindrome")
})();