


const { contries } = require('./country')
const { latestWebTechnologies } = require('./webTEch')



console.log(contries)
console.log(latestWebTechnologies)

// Case 1
if(contries.includes("Ethiopia")){
    console.log("country exists named Ethiopia")
} else {
    console.log("country not found")
}


// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(!contries.includes("Ethiopia")){
    contries.push("Ethiopia")
    console.log("country exists named Ethiopia")
} else {
    console.log("country not found")
}
