#! /usr/bin/env node

import fs from 'fs' 

function readFile(file) {
  return fs.readFileSync(file, 'utf-8')
}

const input = readFile('./03/input').split('\n')

function part1() {
  let trees = 0;
  let x = 0;

  for(let y = 0; y < input.length; y++) {
    trees += input[y][x % input[0].length] === '#' ? 1 : 0
    x = (x + 3) % input[0].length
  }

  return trees
}

function part2() {
  function traversWithSlope(slope) {
    let trees = 0;
    let x = 0;

    for(let y = 0; y < input.length; y += slope[1]) {
      trees += input[y][x % input[0].length] === '#' ? 1 : 0
      x = (x + slope[0]) % input[0].length
    }

    return trees
  }

  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
  ]

  return slopes.map(traversWithSlope).reduce((sum, n) => sum *= n, 1)
}

console.log({ 'part one': part1(), 'part two': part2() })
