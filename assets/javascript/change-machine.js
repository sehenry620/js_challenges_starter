(function(){

    let amount = 47

    let bills = [0, 0, 0, 0]

    

    // console.log(Math.floor(amount/20))

    bills[0] = (Math.floor(amount/20));
    
    amount = amount-(Math.floor(amount/20)* 20)
    // console.log(amount)

    bills[1] = (Math.floor(amount/10));

    amount = amount-(Math.floor(amount/10)*10)
        // console.log(Math.floor(amount/10))

    bills[2] = (Math.floor(amount/5))

    amount = amount-(Math.floor(amount/5)*5)
        // console.log(Math.floor(amount/5))

    bills[3] = amount
        // console.log(Math.floor(amount/1))

        console.log(bills)



    

})();