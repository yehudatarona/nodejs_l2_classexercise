// input 2 numbers from user
// display sum of numbers 
// create event emitter for large numbers (let's assume above 100)
// event listener for result above 100, 
//    will print: 'LARGE NUMBER OCCURED' and print the number
// another event listener for result above 100, 
//    will print: 'RESULT PRINTER UPDATE' and print the number
// choose both emitters 
// **ETGAR: place the emitter code in a different file and use export
const emitter = require('./eventEmitter');
// const tooLarge1 = new EventEmitter();
// const tooLarge2 = new EventEmitter();

// tooLarge1.on('num_is_larger_than_100', (_sum)=>{
//     console.error(`LARGE NUMBER ${_sum} OCCURED`);
// });
// tooLarge2.on('num_is_larger_than_100', (_sum)=>{
//     console.error(`RESULT PRINTER UPDATE ${_sum} `);
// });

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1, num2, sum= 0;

readline.question('enter 1st number ?: ', _num1 => {
    num1= Number(_num1);
    readline.question('enter 2nd number ?: ', _num2 => {
        num2 = Number(_num2);
        sum= num1 + num2;
        
        if (sum >100) {
            emitter.tooLarge1.emit('num_is_larger_than_100', sum);
            // tooLarge1.emit('num_is_larger_than_100', sum);
            // tooLarge2.emit('num_is_larger_than_100', sum);
        }
        else {
        
            console.log('the of sum the numbers you input is: ', sum);
        }
        readline.close();
    });
});
