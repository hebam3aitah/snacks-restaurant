let gender;
do {
    gender = prompt("Please enter your gender (male or female):").toLowerCase();
    if 
(gender !== "male" && gender !== "female") {
        alert("Invalid input. Please enter 'male' or 'female'.");
    }
} while (gender !== "male" && gender !== "female");
alert("Thank you for entering a valid gender: " + gender+ "💕");

/* Q1: Display numbers 0 through 5 in separate alerts */
for (let i = 0; i <= 5; i++) {
    alert(i);
}

// /* Q2: Display numbers 0 through 5 in a single alert */
// let resultQ2 = '';
// for (let i = 0; i <= 5; i++) {
//     resultQ2 += i + ' ';
// }
// alert(resultQ2.trim());

// /* Q3: Display multiples of 3 in range 0...20 */
// let resultQ3 = '';
// for (let i = 0; i <= 20; i++) {
//     if (i % 3 === 0) {
//         resultQ3 += i + ' ';
//     }
// }
// alert(resultQ3.trim());

/* Q4: Prompt user for a valid number (0...100) */
let number;
do {
    number = parseInt(prompt("Enter a number between 0 and 100:"));
    if (number < 0 || number > 100 || isNaN(number)) {
        alert("Invalid input. Try again.");
    }
} while (number < 0 || number > 100 || isNaN(number));
alert("You entered: " + number);

/* Q5: Prompt for an integer and display sum from 0 to that number */
let input = parseInt(prompt("Enter an integer:"));
let sum = 0;
for (let i = 0; i <= input; i++) {
    sum += i;
}
alert("The sum of integers from 0 to " + input + " is: " + sum);
