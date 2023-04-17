let filename = "contact.html"

let divide = filename.split(".")
console.log(divide[1])

const methodTwo = filename.slice(filename.indexOf('.')+1);
console.log(methodTwo)

const methodThree = filename.substring(filename.indexOf(".")+1);
console.log(methodThree)