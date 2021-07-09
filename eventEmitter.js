const EventEmitter = require('events');
const tooLarge1 = new EventEmitter();
const tooLarge2 = new EventEmitter();

tooLarge1.on('num_is_larger_than_100', (_sum)=>{
    console.error(`LARGE NUMBER ${_sum} OCCURED`);
});
tooLarge2.on('num_is_larger_than_100', (_sum)=>{
    console.error(`RESULT PRINTER UPDATE ${_sum} `);
});

module.exports.tooLarge1 = tooLarge1;
module.exports.tooLarge2 = tooLarge2;