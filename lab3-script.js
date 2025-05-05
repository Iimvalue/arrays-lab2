let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"];

console.log("<<<<<<<< أطبع جميع الأسماء التي تبدأ بحرف A أو a >>>>>>>>");

let allStudentsBeginWithA = students.filter(function(char){
    return char[0] === "A" || char[0] === "a"
})

console.log(allStudentsBeginWithA)

console.log("<<<<<<<< أطبع عدد الأسماء التي تحتوي على أكثر من 4 حروف. >>>>>>>>");

let allStudentsMoreThan4Char= students.filter(function(name){
    return name.length > 4
})

console.log(allStudentsMoreThan4Char)

console.log("<<<<<<<< أنشئ مصفوفة جديدة فيها كل الأسماء لكن بالحروف الكبيرة (uppercase). >>>>>>>>");

let allStudentNameUppercase = students.map(function(name){
    return name.toUpperCase()
})

console.log(allStudentNameUppercase);

let firstNameHasletterR = students.find(function(name){
    return name.startsWith("r") || name.startsWith("R")

})

console.log(firstNameHasletterR);

console.log("<<<<<<<< أطبع قائمة مرتبة من الأسماء بالترتيب الأبجدي. >>>>>>>>");

let ascOrderStudent = students.sort();

console.log(ascOrderStudent);

console.log(
  "<<<<<<<< تحقق إذا كان اسم معين (مثل 'Omar') موجود في القائمة. >>>>>>>>"
);

let checkSpecificName = students.some(function(name){
    return name == "Omar"
})

console.log(checkSpecificName)
