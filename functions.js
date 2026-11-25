// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.
function multiply(a,b,c){
  return a * b * c;
}
console.log(multiply(4,6,7));

// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
function convertToSeconds(minutes) {
  return minutes * 60
}
console.log(convertToSeconds(56));

// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius(fahrenheit){
  return (fahrenheit - 32) * 5/9
}
console.log(fahrenheitToCelsius(100));

// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverse(str){
  return str.split("").reverse().join("");
}
console.log(reverse("funny"));

// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
function countVowel(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(countVowel("Mikyle Petersen"));


// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; 
    }
  }

  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));  
console.log(isPrime(15)); 
console.log(isPrime(29)); 