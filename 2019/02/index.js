#! /usr/bin/env node

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split(",")
  .map(n => parseInt(n, 10));

function execute(memory, noun, verb) {
  memory = [...memory];

  memory[1] = noun;
  memory[2] = verb;

  let instruction = 0;

  while (true) {
    const command = memory[instruction];
    const a = memory[memory[instruction + 1]];
    const b = memory[memory[instruction + 2]];
    const output = memory[instruction + 3];

    if (command > 2) {
      break;
    }

    memory[output] = command == 1 ? a + b : a * b;
    instruction += 4;
  }

  return memory;
}

console.log("Part 1 =", execute(input, 12, 2)[0]);

let noun = 0;
let verb = 0;
const max = 1000;
let needle = 19690720;
let found = false;

outer: for (noun = 0; noun < max && !found; noun++) {
  for (verb = 0; verb < max && !found; verb++) {
    answer = execute(input, noun, verb)[0];

    if (answer == needle) {
      break outer;
    }
  }
}

console.log("Part 2 =", {
  noun,
  verb,
  "100 * noun + verb": 100 * noun + verb
});
