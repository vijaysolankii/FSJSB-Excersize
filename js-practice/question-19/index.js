const morningDrink = ["milk","tea","coffee","honey"]


// Add meat in array if not exists 
if(!morningDrink.includes("meat")){
    morningDrink.unshift("meat") // add element in begining of array
}

// Add Suger in array if not exists 
if(!morningDrink.includes("suger")){
    morningDrink.push("suger") // add element in ending of array
}

// Rename Tea to green Tea
morningDrink[1] = "Green Tea"

// remove honey
morningDrink.splice(4,1)

console.log(morningDrink)