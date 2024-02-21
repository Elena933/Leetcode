var createCounter = function(n) {
    return function() {
        // anonymous function returns incrementing n
        return n++; 
    };
};
// parse command-line arguments to get the starting value
const startValue = parseInt(process.argv[2]); // parse the first command-line argument

// create a counter starting from the specified value or default to 0 if no argument is provided
const counter = createCounter(isNaN(startValue) ? 0 : startValue);

console.log(counter()); // Output: Counter value
console.log(counter()); // Output: Counter value
console.log(counter()); // Output: Counter value