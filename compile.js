
const
    fs = require("fs"),
    wabt = require("wabt")();

debugger;

const inputWat = "main.wat";
const outputWasm = "main.wasm";

const wasmModule = wabt.parseWat(inputWat, fs.readFileSync(inputWat, "utf8"));
const { buffer } = wasmModule.toBinary({});

fs.writeFileSync(outputWasm, Buffer.from(buffer));
