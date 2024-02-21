// var createCounter = function(n) {
    
//     return function() {
//         return n++
        
//     };
// };

// /** 
//  * const counter = createCounter(10)
//  * counter() // 10
//  * counter() // 11
//  * counter() // 12
//  */


const createCounter = (n) => {
  return () => {
    return n++;
  };
};

const args = process.argv.slice(2); // Extracts command-line arguments
const startValue = args.length > 0 ? parseInt(args[0]) : 0;  // Check for command-line arguments

const counter = createCounter(startValue);

console.log(counter()); // Output: Counter value
console.log(counter()); // Output: Counter value
console.log(counter()); // Output: Counter value