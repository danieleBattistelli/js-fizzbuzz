
let i =0;
//Ciclo i numeri da 1 a 100
for (i=1; i<=100; i++)
    //console.log(i)
    {
        //Controllo se divisibile per 3
    if(i %3 ===0){
        console.log("Fizz", i, "è divisibile per 3");
        //Controllo se divisibile per 3 e 5
        if((i %3 ===0 && i %5 === 0)) {
            console.log("FizzBuzz", i, "è divisibile per 3 e 5"); 
        } 
        //Controllo se divisibile per 5      
    } else if(i %5 === 0) {
        console.log("Buzz", i, "è divisibile per 5");     
    }   else{
        console.log(i)
    }
}

