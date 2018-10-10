
const
    fs = require("fs"),
    wabt = require("wabt")();

debugger;

const inputWat = "main.wat";
const outputWasm = "main.wasm";

function compile() {
    const wasmModule = wabt.parseWat(inputWat, fs.readFileSync(inputWat, "utf8"));
    const { buffer } = wasmModule.toBinary({});
    return buffer;
}

function save(buffer) {
    fs.writeFileSync(outputWasm, Buffer.from(buffer));
}

/** @returns {void} */
async function run(buffer) {
    const module = await WebAssembly.compile(buffer);
    const instance = await WebAssembly.instantiate(module);
    console.log(instance.exports.helloWorld());
}

const buffer = compile();
save(buffer);
run(buffer);
