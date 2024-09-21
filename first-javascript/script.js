// console.log("Hello again");

// var book = "Dracula";
// var movie;
// console.log(book);
// console.log(movie);
// movie = "Interview with a Vampire";
// console.log(movie);

// var count = "3";
// var num = "2";
// console.log(count + num);
// console.log(5 + 8);
// console.log("5" + "8");
// console.log("5" + 8);
// console.log(5 + "8");

// var firstName = "Dan";
// var lastName = "Taylor";
// console.log(firstName + " " + lastName);
// var cars = ["Subaru", "Audi", "Volkswagen"];
// console.log("The third car in the list is " + cars[2]);
// cars.push("Chevy");
// cars.push("Ford");
// cars.push("Honda");
// cars.push("Toyota");
// cars.push("Fiat");
// cars.push("Buick");
// cars.push("Jeep");
// console.log(cars.length);
// ["Subaru", "Audi", "Volkswagen", "Chevy", "Ford", "Honda",
// "Toyota", "Fiat", "Buick", "Jeep"]
// 
// var student = {
//     firstName: "Henry",
//     lastName: "Jackson",
//     id: 12345,
//     courses: [
//         {
//             class: "Full-Stack Java",
//             instructor: {
//                 firstName: "Steve",
//                 lastName: "Wozniak"
//             },
//             gradePercentage: 97
//         },
//         {
//             class: "Calculus",
//             instructor: {
//                 firstName: "Bill",
//                 lastName: "Gates"
//             },
//             gradePercentage: 86
//         }
//     ]
// }

// console.log('My name is ' + student.firstName + ' ' + student.lastName + ', and I am taking ' + student.courses.length + ' courses.');
// console.log('My first course is ' + student.courses[0].class + ', taught by ' + student.courses[0].instructor.firstName + ' ' + student.courses[0].instructor.lastName + '.');
// console.log('I am getting a ' + student.courses[0].gradePercentage + ' in ' + student.courses[0].class + '.');

// var zombies = 2;
// if (zombies > 10) {
//     console.log('AAAARRRGGGHHH! ZOMBIES!!!');
// } else if (zombies > 5) {
//     console.log('Gotta stay away from those zombies!');
// } else {
//     console.log('Not a lot of zombies today.');
// }

// var apples = 15;
// if (apples > 3) {
//     console.log("Let's make tarts!");
// } else if (apples > 10) {
//     console.log('Let us make a pie! We can use the "Betty Crocker" cookbook!');
// }

// var numOfStudents = 13;
// if (numOfStudents > 20) {
//     console.log("Too many students");
// } else if (numOfStudents > 15) {
//     console.log("Good number of students");
// }
// var userName;
// userName = "Mark";
// var firstNumber;
// firstNumber = 14;
// firstNumber = "Bob";
// var car = "Nissan";
// var movie;
// movie = "Matrix";
// const company = {
//     name: "Fisherman's Delight",
//     address: {
//         streetAddress: "123 South St",
//         city: "Omaha",
//         state: "NE",
//         zip: 681371234
//     },
//     phoneNumber: 5551234567,
//     employeeCount: 25
// }
// console.log("The name of the company is " + company.name + ". It is located at " + 
//     company.address.streetAddress + " " + company.address.city + ", " + company.address.state + 
//     " " + company.address.zip + " and its phone number is " + company.phoneNumber + 
//     ". The company has " + company.employeeCount + " employees.");
// console.log(`The name of the company is ${company.name}. It has ${company.employeeCount} employees`);

// const food = ["pizza", "wings", "fries", "salad", "soup"];
// food.pop();
// console.log(food);
// food.push("cake", "ice cream", "chips");
// console.log(food);
// food.splice(2, 4);
// console.log(food);
// food.splice(1);
// console.log(food);
// var testScore = 70;
// if (testScore > 99) {
//     console.log("You aced it!");
// } else if (testScore >= 70) {
//     console.log("You passed.");
// } else {
//     console.log("I'm sorry, you didn't pass.");
// }

// for (var i = 1; i <= 10; i++) {
//     console.log("i is now " + i);
// }
// console.log('The loop has ended');

// for (var i = 10; i >= 1; i--) {
//     console.log("i is now " + i);
// }

// for (var i = 3; i < 22; i+=3) {
//     console.log("i is now " + i);
// }

// var cars = ["Toyota", "Nissan", "Honda", "Subaru"];
// for (var i = 0; i < cars.length; i++) {
//     console.log("Car " + (i+1) + " is a " + cars[i]);
// }
// console.log("That's all the cars.");

// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even.");
//     } else {
//         console.log(i + " is odd.");
//     }
// }
// console.log("That's all folks!");

// console.log(8/5);


// console.log(8 % 5);
// console.log(4 % 2);
// console.log(3 % 2);

// var numMonkeys = 8;
// while (numMonkeys > 0) {
//     console.log(numMonkeys + " little monkeys jumping on the bed.");
//     numMonkeys--;
// }
// console.log("no more monkeys jumping on the bed!");

// var numBooks = 11;
// while (numBooks < 10) {
//     console.log("Number of books is " + numBooks);
//     numBooks++;
// }
// console.log("While loop ended");

// var numBooks = 11;
// do {
//     console.log("Number of books is " + numBooks);
// } while (numBooks < 10);
// console.log("Do while loop ended.");

// print the numbers 1 to 100, but if a number is divisible by 3, print "Fizz",
// if a number is divisible by 5, print "Buzz", and if a number is divisible by 
// both 3 and 5, print "FizzBuzz"

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         if (i % 5 == 0) {
//             console.log("FizzBuzz");
//         }
//         else console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }

// }
// function printHelloWorld() {
//     console.log("Hello World!");
// }

// printHelloWorld();

// function add3Plus5() {
//     var total = 3 + 5;
//     console.log("Total is " + total);
// }

// add3Plus5();

// function addTwoNumbers(num1, num2) {
//     var total = num1 + num2;
//     console.log("Total is " + total);
//     return total;
// }
// addTwoNumbers(7,12);

// var price = addTwoNumbers(7,12);
// console.log("The price is " + price);

// var houseArea;
// var housePerimeter;

// function getAreaOfHouse(length, width) {
//     var area = length * width;
//     return area;
// }

// function getPerimeterOfHouse(length, width) {
//     var perimeter = (2 * length) + (2 * width);
//     return perimeter;
// }

// var houseLength = 30;
// var houseWidth = 15;

// houseArea = getAreaOfHouse(houseLength, houseWidth);
// housePerimeter = getPerimeterOfHouse(houseLength, houseWidth);

// console.log(`My house is ${houseLength} feet by ${houseWidth} feet.` +
// ` It has an area of ${houseArea} square feet and a perimeter of ${housePerimeter} feet.`);


// console.log("My house is " + houseLength + " feet by " + houseWidth + " feet. " +
//     "It has an area of " + houseArea + " square feet and a perimeter of " + housePerimeter + " feet.");

// var greeting = "Hello";
// function sayGreeting() {
//     console.log(greeting);
// }
// sayGreeting();
// console.log(greeting);

// function sayGoodbye() {
//     var goodBye = "So long!";
//     console.log(goodBye);
// }
// sayGoodbye();
// console.log(goodBye);

// var total = 3;
// function getTotal() {
//     var total = 5;
//     console.log("Total in function = " + total);
// }
// getTotal();
// console.log("Total outside function = " + total);

// function getMeasurements(length, width) {
//     if(length > 40 && width > 20) {
//         let perimeter = 2 * length + 2 * width;
//     } else {
//         console.log("You have too small a house to care about the perimeter.");
//     }
//     console.log("The perimeter of your house is " + perimeter + " feet.");
// }
// getMeasurements(50, 50);
// console.log(perimeter);
// let catName = "Bob";
// const dogName = "Jerry";
// dogName = "Bill";

var numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number){
//     console.log("The number was " + number);
//     number *= number;
//     console.log("But now it's " + number);
// });

numbers.forEach((number) => {
    console.log("The number was " + number);
    number *= number;
    console.log("But now it's " + number);
});