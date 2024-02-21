// var createHelloWorld = function() {
    
//     return function(...args) {
//         return 'Hello World'
//     }
// };

// /**
//  * const f = createHelloWorld();
//  * f(); // "Hello World"
//  */


const createHelloWorld = () => {
    return (...args) => {
        return args.length > 0 ? args.join(' ') : 'Hello World';
    }; // Check for command-line arguments or use default value
};

const runHelloWorld = () => {
    const f = createHelloWorld();
    const args = process.argv.slice(2); 
    console.log(f(...args));
};

runHelloWorld();