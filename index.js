//Importing local modules
/*
ES6
import { add, divide, multiply, substract } from "./math";
import { greet as _greet } from "./greetings";
import { sayHello } from "./greetings/hello";
*/
const math = require("./src/math");
const greet = require("./src/greetings");
const hello = require("./src/greetings/hello");

console.log(math.add(5, 6));
console.log(math.divide(30, 6));
console.log(math.multiply(2, 6));
console.log(math.substract(65, 46));

console.log(greet.greet("Juan"))
console.log(hello.sayHello("Ilenia"))
/*---------------------------------*/

//Importing remote modules
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: "Hello world!",
    e: "xx",
    T: "U"
}));
/*---------------------------------*/

//Sync vs Async
const add = require("./src/addition");
const intensive = require("./src/intensive");

add.syncSum(5, 6);
add.asyncSum(9, 8);

//intensive.simulateSync();

intensive.simulateAsync();

const call = require("./src/call");

//console.log(call.sync("Juan Balceda"))

//call.withCallback("Juan Balceda", call.sync); 
/*
call.withPromise("Juan Balceda")
    .then((name) => console.log(name));
*/

async function callingPromise() {
    const name = await call.withPromise("Juan Balceda");
    console.log(name)
}
callingPromise()
/*---------------------------------*/

// Node native modules
// FileSystem
const fs = require("fs");
const ops = require("./src/fileops")

let values;

fs.readFile("./resources/number.txt", "utf8", (err, data) => {
    if (err) throw err;

    //console.log(data);
    const numbers = data.split("\n").map(n => Number(n));
    console.log(numbers)
    values = ops.incrementValues(numbers)
    console.log(values)
    fs.writeFile("./resources/new_numbers.txt", values.join("\n"), (err, rsult) => {
        if (err) throw err;


    })
});
/*---------------------------------*/

//Readline
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const q = [
    "What's your name? ",
    "How old are you? "
]

const askQuestion = (rl, question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, answer => {
            resolve(answer);
        })
    })
}

const ask = (questions) => {
    return new Promise(async resolve => {
        let results = []
        for (let question of questions) {
            const result = await askQuestion(rl, question)
            results.push(result)
        }
        resolve(results)
    })
}

ask(q)
    .then(q => {
        console.log(`Hi, ${q[0]}, you're ${q[1]} years old.`)
    })
/*---------------------------------*/

//Child Process
const cp = require("child_process")

function execCommand(command) {
    cp.exec(command, (err, stdout, stderr) => {
        if (err) {
            console.log(`Error: ${err}`); return;
        }
        if (stdout) {
            console.log(`Standard out: \n ${stdout}`);
        }
        if (stderr) {
            console.log(`Standard err: \n ${stderr}`);
        }

    })
}

//execCommand("ls");
execCommand("node ./src/script --base=5");
/*---------------------------------*/

//Debugger
const {
    from0to,
    asyncFrom0to
} = require("./src/counter");

// Llamadas a funciones
asyncFrom0to(10,3);
from0to(10, 2);
/*---------------------------------*/

//Error Handling
const errors = require('./src/errors')

try {
    errors.standardErr.range()
} catch (e) {
    console.log('There was an error: ', e);
}

console.log('After error.')

const handle = require('./src/handling')

handle.errorFirstCallbackWrong()
console.log('After error.')
/*---------------------------------*/

//Events
const greet = require('./src/greet');

//greet.emit('clap');
//greet.emit('shout', 'What\'s up!');
greet.emit('call', 'Juan', (name) => {
    console.log(`Calling... ${name}.`)
})
/*---------------------------------*/
