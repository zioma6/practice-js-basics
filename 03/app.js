const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

// Dodawanie dwóch najwyzszych liczb
const getSum = (a,b,c) => {
    
    const array = [];
    
    a = parseInt(a);
    array.push(a);
    b = parseInt(b);
    array.push(b);
    c = parseInt(c);
    array.push(c);
 
    const sortArray = array.sort( (a,b) => {
        return b-a
    });

    console.log(a,b,c);
    console.log(sortArray);

    const sum = sortArray[0] + sortArray[1];

    return sum;
}

sum = getSum(a,b,c);

console.log(sum);

// isEven

let evenF = function isEven(number) {
    if(typeof(number) !== "number"){
        return null
    }else if(number % 2 === 0){
        return true
    }else{
        return false
    }
}

const even = evenF(sum)

console.log(even)

// showInfo

const showInfo = ( first, secend) => {
    switch((secend)){
        case null:
            console.log(`Podany argument ${first} nie jest liczbą`)
            break;
        case true:
            console.log(`Podany argument ${first} jest parzysty`)
            break;
        case false:
            console.log(`Podany argument ${first} jest nieparzysty`)
             break;
    }
}

showInfo(sum, even);


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}