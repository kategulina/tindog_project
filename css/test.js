/* random number in range 0 - 99 programm */
var n = Math.random();
n *= 100;  /* we multiply n by the range of our random number */
n = Math.floor(n);  /* if we want range of 1-100 we need to add +1 here */
console.log(n);


/* checking if somethinhg is inside the aaray with array.includes(something) */
var person = prompt("What's your name?");
var guestList = ["Kate", "Jack", "Joe"];

if (guestList.includes(person)) {
    alert("Welcome!");
} else {
    alert("Next time!");
}


/* FizzBuzz game with JS */
var output = [];
var n = 0;

function fizzBuzz() {
    for (var i = 0; i < 30; i++) {
        n++;

        if (n % 3 === 0 && n % 5 === 0) {
            output.push("fizzBuzz")
        } else if (n % 3 === 0) {
            output.push("fizz")
        } else if (n % 5 === 0) {
            output.push("buzz")
        } else {
            output.push(n);
        }
    }
    console.log(output);
}