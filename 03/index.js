#! /usr/bin/env node

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .filter(Boolean)
  .map(line => line.split(","));

console.log(JSON.stringify(input, null, 2));
