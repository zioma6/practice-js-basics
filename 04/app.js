

const createArray = (min,max) => {

    let arrayNew = [];

    for(let i = 0; i < 20; i++){
        arrayNew.push(Math.floor(Math.random() * (max - min + 1) + min));
    };

    return arrayNew
};

const arr = createArray(10,200);

console.log(`Tabela z 20 liczbami: ${arr}`)

const sortFunction = (array) => {

    let sortArray = [];
    let cutArray = [];

    sortArray = array.sort((a, b) => b - a)
    cutArray = sortArray.splice(10, 10)
    return cutArray
}

const arrSortCut = sortFunction(arr);

console.log(`Tabela z wybranymi 10 największymi liczbami: ${arrSortCut}`)

const  averageFun = (array) => {

    const sum = array.reduce( (el, total) => {
        
        return (total + el)
    })

    console.log(sum)
   
    return   sum / array.length
}

console.log(averageFun(arrSortCut))
