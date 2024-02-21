var createHelloWorld = function() {
    // this function shows the concept of
    // hight-order function and use rest parameter
    return function(...args) {
        if (args.length > 0) {
            return  args.join(' ');
        } else {
            return 'Hello World';
        }
    };
};

const f = createHelloWorld();


console.log(f(...process.argv.slice(2))); // this line
// takes the command-line args and pass to f