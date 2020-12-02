#! /usr/bin/env node

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map(n => parseInt(n, 10))
  .filter(Boolean);

// Part 1
function cost(mass) {
  return mass.reduce((sum, m) => {
    return sum + Math.max(0, Math.floor(m / 3) - 2);
  }, 0);
}

// Part 2
function recursiveCost(input) {
  function fuel(m) {
    const f = Math.max(0, Math.floor(m / 3) - 2);

    return f + (f > 0 ? fuel(f) : 0);
  }

  const costs = input.map(m => {
    return fuel(m);
  });

  return costs.reduce((sum, n) => sum + n, 0);
}

console.log("part 1:", cost(input));
console.log("part 2:", recursiveCost(input));
