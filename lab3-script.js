let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"];

// console.log("<<<<<<<< أطبع جميع الأسماء التي تبدأ بحرف A أو a >>>>>>>>");

// let allStudentsBeginWithA = students.filter(function(char){
//     return char[0] === "A" || char[0] === "a"
// })

// console.log(allStudentsBeginWithA)

// console.log("<<<<<<<< أطبع عدد الأسماء التي تحتوي على أكثر من 4 حروف. >>>>>>>>");

// let allStudentsMoreThan4Char= students.filter(function(name){
//     return name.length > 4
// })

// console.log(allStudentsMoreThan4Char)

// console.log("<<<<<<<< أنشئ مصفوفة جديدة فيها كل الأسماء لكن بالحروف الكبيرة (uppercase). >>>>>>>>");

// let allStudentNameUppercase = students.map(function(name){
//     return name.toUpperCase()
// })

// console.log(allStudentNameUppercase);

// let firstNameHasletterR = students.find(function(name){
//     return name.startsWith("r") || name.startsWith("R")

// })

// console.log(firstNameHasletterR);

// console.log("<<<<<<<< أطبع قائمة مرتبة من الأسماء بالترتيب الأبجدي. >>>>>>>>");

// let ascOrderStudent = students.sort();

// console.log(ascOrderStudent);

// console.log(
//   "<<<<<<<< تحقق إذا كان اسم معين (مثل 'Omar') موجود في القائمة. >>>>>>>>"
// );

// let checkSpecificName = students.some(function(name){
//     return name == "Omar"
// })

// console.log(checkSpecificName)

// console.log("<<<<<<<< أطبع عدد الأحرف الكلي لجميع الأسماء الموجودة في المصفوفة. >>>>>>>>");

// let countsLetters = students.reduce(function (sum, name) {
//     return sum + name.length
//   },0);

//   console.log(countsLetters)

// console.log("<<<<<<<< أنشئ مصفوفة جديدة تحتوي فقط على الأسماء التي عدد حروفها زوجي. >>>>>>>>");

// let studentsHasEvenChar = students.filter(function(name){
//     return name.length % 2 == 0
// })

// console.log(studentsHasEvenChar)

// console.log("<<<<<<<< أنشئ مصفوفة جديدة تحتوي على جميع الأسماء ولكن بالعكس >>>>>>>>");
// let descName = students.map(function(name){
//     return name.split('').reverse().join('');
// })

// console.log(descName);

// console.log(
//   "<<<<<<<< احذف من المصفوفة جميع الأسماء التي تحتوي على الحرف 'o' أو 'O'. >>>>>>>>"
// );

// for (let i = 0; i < students.length; i++) {
//   if (students[i][0] == "O" || students[i][0] == "o") {
//     students.splice(i, 1);
//   }
// }

// console.log(students);

for (let i = 0; i < students.length; i++) {
  if (students[i] == "Ali") {
    students.splice(i + 1, 0, [22, 33, 44]);
  }

  if (students[i] == "Ahmed") {
    students.splice(i + 1, 0, [33, 50, 100]);
  }

  if (students[i] == "Ali") {
    students.splice(i + 1, 0, [100, 100, 100]);
  }

  if (students[i] == "Sara") {
    students.splice(i + 1, 0, [22, 44, 80]);
  }

  if (students[i] == "Noor") {
    students.splice(i + 1, 0, [22, 44, 80]);
  }

  if (students[i] == "Lana") {
    students.splice(i + 1, 0, [22, 44, 80]);
  }

  if (students[i] == "Omar") {
    students.splice(i + 1, 0, [22, 44, 80]);
  }
}


console.log(students);

let countGPA = students.filter(function(arr){
    return Array.isArray(arr)
}).map(function(arr){
    return arr.reduce(function(sum,num){
        return (sum + num) / 3
    },0)
})

console.log(countGPA);
 
let GPAmoreThan80 = countGPA.filter(function(gpa){
    return gpa > 80
})


console.log(GPAmoreThan80)

