let characters = [
  ["Luke Skywalker", 177, "male", 77, "brown"],
  ["Leia Organa", 160, "female", 56, "blue"],
  ["Han Solo", 180, "male", 80, "brown"],
  ["Chewie", 222, "male", 190, "black"],
  ["kevien", 106, "male", 32.2, "red"],
];

console.log("<<<<<<<< Get array of all names only >>>>>>>>");
let namesOnly = characters.map(function(value){
    return value[0]
})

console.log(namesOnly)

console.log("<<<<<<<< Get array of all heights only >>>>>>>>");

 let heightsOnly = characters.map(function(value){
     return value[1]
 })

 console.log(heightsOnly)

console.log("<<<<<<<< Get array of all heights only >>>>>>>>");

let totalHeight = characters.reduce(function (sum, height) {
  return sum + height[1]
  
},0);

console.log(totalHeight)

console.log("<<<<<<<< Get characters with height less than 200 >>>>>>>>");

let heightFilter = characters.filter(function(value){
  return value[1] < 200
}, 1)

console.log(heightFilter)

console.log("<<<<<<<< Get all male characters >>>>>>>>");

let genderFilter = characters.filter(function(value){
  return value[2] === "male"
}, 1)

console.log(genderFilter)


let massSort = characters.sort(function(a,b){
  return a[3] - b[3];
})

console.log(massSort);


console.log("<<<<<<<< Sort by mass >>>>>>>>");

let heightSort = characters.sort(function(a,b){
  return a[1] - b[1];
})

console.log(heightSort);

console.log("<<<<<<<< Does every character have mass more than 40? >>>>>>>>");

let everyMassMoreThan40 = characters.every(function(value){
  return value[3] > 40;
})

console.log(everyMassMoreThan40);


console.log("<<<<<<<< Is every character shorter than 200? >>>>>>>>");

let everyHeightLessThan200 = characters.every(function(value){
  return value[1] > 200;
})

console.log(everyHeightLessThan200);



console.log("<<<<<<<< Is there at least one character with blue eyes? >>>>>>>>");

let someBlueEyes = characters.some(function(value){
  return value[4] == "blue";
})

console.log(someBlueEyes);

console.log("<<<<<<<< Is there at least one character taller than 210? >>>>>>>>");

let tallerThan210 = characters.some(function(value){
  return value[1] > 210;
})

console.log(tallerThan210);
