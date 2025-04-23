/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const student = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

for (let i = student.length - 1; i >= 0; i--) {
  console.log(student[i]);
}
// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
  for (let i = grades.length - 1; i >= 0; i--) {
    console.log(grades[i]);
}



// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
for (let i = 0; i < positiveNumbers.length; i++) {
  if (positiveNumbers[i] % 2 === 0) {
    console.log(positiveNumbers[i]);
  }
}


// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.

const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
  for (let num of mixedSignNumbers) {
     if (num % 2 === 0) {
      console.log(num); 
    }
}



// Challenge 5
// Remove two values from the end of the following array (review your Array Methods). Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
symmetricalCapitals.pop();
symmetricalCapitals.pop();
  for (let num of symmetricalCapitals) {
     console.log(num);
}

// Challenge 6
// Add two values (of your choice) to the end and then console.log out each value individually.
const symmetricalCapitals1 = [1, 1, 2, 3, 5, 8, 13];

symmetricalCapitals1.push(21, 34); // Add two values to the end of the array
  for (let i = 0; i < symmetricalCapitals1.length; i++) {
      console.log(symmetricalCapitals1[i]);
}


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
const numbers = [64, 2, -4, 5, 13];

for (let item of numbers) {
  console.log(item);
}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const customArray = [];
customArray.push(20);
customArray.push(30);
customArray.push(40);
customArray.unshift(10);
customArray.unshift(5);
  for (let item of customArray) {
    console.log(item);
}

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
 const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];
for (let i = 3; i <= 10; i++) {
  console.log(students[i]);
}


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudall
const students1 = [];
for (let i = 3; i <= 10; i++) {
  students1.push(students1[i]);
}
for (let val of students1) {
  console.log(val);
}
// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
const slicedStudents = students.slice(3, 11);
for (let val of slicedStudents) {
  console.log(val);
}
for (let val of students2) {
  console.log(val);
}

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.

const dinosaurs = ['Velociraptor', 'T-Rex', 'Triceratops', 'Stegosaurus', 'Brachiosaurus', 'Pterodactyl', 'Ankylosaurus', 'Allosaurus'];
const splicedDinos = dinosaurs.splice(4, 3);
for (let dino of dinosaurs) {
  console.log(dino);
}

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
const dinoStr = dinosaurs.join(' - EXTINCT - ');
console.log(dinoStr);

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
const reversedDino = ['Velociraptor', 'T-Rex', 'Triceratops', 'Stegosaurus', 'Brachiosaurus', 'Pterodactyl', 'Ankylosaurus', 'Allosaurus'].reverse();
console.log(reversedDino);

console.log(dinosaurs);