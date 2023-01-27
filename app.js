const randomNumbers = [];
const oddIndex = [];
const evenIndex = [];

let sumOdd = 0;
let sumEven = 0;
let minOdd = 2, maxOdd = 0;
let minEven = 2, maxEven = 0;
for(let i = 0; i < 100; i++) {
    randomNumbers.push(Math.floor(Math.random() * 50)+1)
}

for (let i=0;i<randomNumbers.length;i++){
    if (i%2==0) {
        evenIndex.push(randomNumbers[i]);
    }
    else {
        oddIndex.push(randomNumbers[i]);
    }
}

for (let i=0; i<oddIndex.length; i++){
    if (oddIndex[i] > maxOdd){
        maxOdd = oddIndex[i]
    }
    if (oddIndex[i] < minOdd){
        minOdd = oddIndex[i]
    }

}
for (let i=0; i<evenIndex.length; i++){
    if (evenIndex[i] > maxEven){
        maxEven = evenIndex[i]
    }
    if (evenIndex[i] < minEven){
        minEven = evenIndex[i]
    }

}
for (let valueOddIndex of oddIndex) {
    sumOdd += valueOddIndex;
    
}
for (let valueEvenIndex of evenIndex) {
    sumEven += valueEvenIndex;
    
}

averageOddIndex = sumOdd / oddIndex.length;
averageEvenIndex = sumEven / evenIndex.length;

console.log("Ini Random Number",randomNumbers);
console.log(oddIndex);
// console.log(sumOdd)
// console.log(averageOddIndex)

console.log("EvenIndex", evenIndex);
// console.log(sumOdd)
// console.log(averageEvenIndex)
// console.log(maxOdd)
// console.log(minOdd)
// console.log(maxEven)
// console.log(minEven)

let summary = `untuk nilai rata-rata bagian odd adalah ${averageOddIndex} dan bagian even adalah ${averageEvenIndex}
nilai minimum untuk bagian odd adalah ${minOdd} sedangakan bagian even adalah ${minEven}
untuk nilai maximum bagian odd adalah ${maxOdd} sedangkan bagian even adalah ${maxEven}`
console.log(summary)
