#! /usr/bin/env node -r esm

import { readFile } from '../utils'

const input = readFile('./01/input').split('\n').map(a => Number(a)).sort(comparator)

function comparator(a,b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

function sum() {
  return [...arguments].reduce((s, k) => s + input[k], 0)
}

function part1() {
  for(let a = 0; a < input.length - 1; a++) {
    for(let b = 0; b < input.length - 1; b++) {
      let c = sum(a, b);

      if (c === 2020) {
        return input[a] * input[b]
      }
    }
  }
}

function part2() {
  for(let a = 1; a < input.length - 1; a++) {
    for(let b = 1; b < input.length - 1; b++) {
      for(let c = 1; c < input.length - 1; c++) {
        let d = sum(a, b, c)

        if (d === 2020) {
          console.log({
            a: input[a],
            b: input[b],
            c: input[c]
          })

          return input[a] * input[b] * input[c]
        }
      }
    }
  }
}

console.log({ 'part one': part1(), 'part two': part2() })
