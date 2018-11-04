//Importing local modules
/*
ES6
import { add, divide, multiply, substract } from "./math";
import { greet as _greet } from "./greetings";
import { sayHello } from "./greetings/hello";
*/
const math = require("./math");
const greet = require("./greetings");
const hello = require("./greetings/hello");

console.log(math.add(5, 6));
console.log(math.divide(30, 6));
console.log(math.multiply(2, 6));
console.log(math.substract(65, 46));

console.log(greet.greet("Juan"))
console.log(hello.sayHello("Ilenia"))


//Importing remote modules
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: "Hello world!",
    e: "xx",
    T: "U"
}));


//Sync vs Async
const add = require("./src/addition");
const intensive = require("./src/intensive");

add.syncSum(5,6);
add.asyncSum(9,8);

//intensive.simulateSync();

intensive.simulateAsync();

const call = require("./src/call");

//console.log(call.sync("Juan Balceda"))

//call.withCallback("Juan Balceda", call.sync); 

call.withPromise("Juan Balceda")
    .then((name) => console.log(name));

