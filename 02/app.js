
/* rozwiązanie z pętlą for */
let x = prompt('Podaj liczbę!');

for(let i = 1; i < 10; i++){
    
    let result = x * i
    console.log(`${x} x ${i} = ${result}`)
}


/* rozwiązanie z pętlą while  */

let i = 1 

let a = 7

// prompt('Podaj liczbę!');

let n = 5

// prompt('Podaj potegę!'); 

let array =[]

for(let i = 1; i <= n; i++){

    array.push(a)
    
}

let seeArray = array.join(" x ")
let b = a
while ( i < n) {
    
    
    a = a * b
     
    i++
}

let result = a

console.log(`${seeArray} = ${a}`)