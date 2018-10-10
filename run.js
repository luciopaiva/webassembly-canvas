
const fs = require("fs");

const run = async () => {
    const buffer = fs.readFileSync("./main.wasm");
    const module = await WebAssembly.compile(buffer);
    const instance = await WebAssembly.instantiate(module);
    console.log(instance.exports.helloWorld());
};

run();
