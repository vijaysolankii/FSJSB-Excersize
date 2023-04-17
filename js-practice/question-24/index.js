let evenNumbers = new Array()
let oddNumbers = new Array()


for(let i = 0; i < 101;i++){
    if(i % 2 === 0){
        evenNumbers.push(i);
    } else {
        oddNumbers.push(i)
    }
}

console.log(evenNumbers)
console.log(oddNumbers)