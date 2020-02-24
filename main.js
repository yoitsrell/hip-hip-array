// Challenge 0
//
// Write a Challenge Banner printing function THAT'S A LITTLE DIFFERENT THAN BEFORE. This one will print out not only "Challenge n", where n is the number passed into it, but will also print n "#" characters to the left and n "#" to the right of the "Challenge n" text. You should also include a space between the "#" characters and the text.
//

banner = (num,x) => {
let hash =''
  for (let i = 0 ; x > i ; i++ ,hash+= '#'){

  }
  return console.log(hash+` Challenge ${num} ` +hash)
}
// Call this function before each of the below challenges, passing in the number of the current challenge.
//  
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];
console.log(students)

banner (1,4)

chal1 = (array) => {
  for (let i = 0 ; array.length > i ; i++){
    console.log(array[i])
  }
}
chal1(students)

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
<<<<<<< HEAD
grades.reverse()
console.log(grades)
=======

banner(2,4)

chal2 = (array) => {
  for (let i = array.length-1 ; i >= 0 ; i--){
console.log(array[i])
}
}
chal2(grades)
>>>>>>> 2692431f69527bb3811776c723d1c9cf3c54aba1

// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
banner (3,6)

for (let i = 0 ; i < positiveNumbers.length ; i++){
if (positiveNumbers[i]%2 ===0) console.log(positiveNumbers[i])
}

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

banner (4,10)

for (let i = 0 ; i < mixedSignNumbers.length ; i++){
  if (mixedSignNumbers[i]%2 ===0) console.log(mixedSignNumbers[i])
  }

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, and then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
symmetricalCapitals.shift()
symmetricalCapitals.shift()
symmetricalCapitals.pop(symmetricalCapitals)
console.log(symmetricalCapitals)

banner (5,5)
symmetricalCapitals.pop()
symmetricalCapitals.shift()
symmetricalCapitals.shift()
for (let i = 0 ; i < symmetricalCapitals.length ; i++){
  console.log(symmetricalCapitals[i])
}

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift(15)
console.log(fibonacciNumbers)
fibonacciNumbers.push(4,5)
console.log(fibonacciNumbers)

// Challenge 7
// Make a NEW array, putting 5 values of your choice, using the format for placing values in while declaring the variable (the same format as the previous 6 challenges), and then console.log out each value individually.
const newArray = [1,2,3,4,5]

console.log(newArray[0])
console.log(newArray[1])
console.log(newArray[2])
console.log(newArray[3])
console.log(newArray[4])
// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using .push and/or .unshift, and then console.log out each value individually.
const emptyArray= []

emptyArray.push(1,2,3,4,5,)
console.log(emptyArray[0])
console.log(emptyArray[1])
console.log(emptyArray[2])
console.log(emptyArray[3])
console.log(emptyArray[4])
// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
for (let i =2; i < 9; i++){
  console.log(students[i])
}

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.
const copyStudents = []

for (let i=0; i<students.length; i++){
  copyStudents.push(students[i])
  console.log(copyStudents[i])
banner (6,2)
fibonacciNumbers.push(1)
fibonacciNumbers.push(1)
fibonacciNumbers.unshift(1)
for (let i = 0 ; i < fibonacciNumbers.length ; i++){
console.log(fibonacciNumbers[i])
}


// Challenge 7
// Make a NEW array, putting 5 values of your choice, using the format for placing values in while declaring the variable (the same format as the previous 6 challenges), and then console.log out each value individually.
banner(7,5)

let newArray = [1,2,3,4,5]
for (let i = 0 ; i < newArray.length ; i++){
  console.log(newArray[i])
}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using .push and/or .unshift, and then console.log out each value individually.
 banner (8,3)
let emptyArray = []
emptyArray.push(1)
emptyArray.push(2)
emptyArray.push(3)
emptyArray.push(4)
emptyArray.push(5)
for (let i = 0 ; i < emptyArray.length ; i++){
  console.log(emptyArray[i])
}

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
banner (9,3)


  for (let i = 2 ; students.length > i ; i++){
    if (10 > i && 2 <= i)console.log(students[i])
    
  }


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.
banner (10,4)
let newStudents = []
for (let i = 0 ; students.length > i ; i++){
if  (10 > i && 2 <= i) newStudents.push(students[i])
}
for (let i = 0 ; newStudents.length > i ; i++){
console.log(newStudents[i])
}

// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally. THEN log out each value of the original array. Slice does NOT modify the original array.

banner (11,5)
let newArray2 = []
newArray2 = students.slice(2,10)

for (let i = 0 ; newArray2.length > i ; i++){
  console.log(newArray2[i])
  }


// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the original array. .splice WILL change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

dinosaurs.splice(4,3)

for (let i=0; i < dinosaurs.length; i++){
  console.log(dinosaurs[i])
}
// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
const comboDino = dinosaurs.join('*')
console.log(comboDino)

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
dinosaurs.reverse()

for (let i=0; i < dinosaurs.length; i++){
  console.log(dinosaurs[i])
}

banner (12,3)

let newArray3 = dinosaurs.splice(4,3)

for (let i = 0 ; dinosaurs.length > i ; i++){
  console.log(dinosaurs[i])
  }
// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
banner (13, 5)
let newStr = dinosaurs.join('*')

console.log(newStr)
// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
banner (14,6)

console.log(dinosaurs.reverse())
// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
const colors = primaries.concat(secondaries)

for (let i=0; i<colors.length; i++){
  console.log(colors[i])
}


banner (15,9)

let newArray4 = primaries.concat(secondaries)
console.log(newArray4)
