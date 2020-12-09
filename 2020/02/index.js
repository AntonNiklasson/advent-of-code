#! /usr/bin/env node

import fs from 'fs' 

function readFile(file) {
  return fs.readFileSync(file, 'utf-8')
}

const input = readFile('./02/input').split('\n').filter(Boolean).map(l => l.split(': '))

function part1() {
  let valid = 0

  for(const [policy, password] of input) {
    const [limits, subject] = policy.split(' ')
    const [min, max] = limits.split('-').map(Number)

    const diff = password.length - password.replace(new RegExp(subject, 'g'), '').length

    if (min <= diff && diff <= max) {
      valid++
    }
  }

  return { valid }
}

function part2() {
  let valid = 0

  for(const [policy, password] of input) {
    const [limits, subject] = policy.split(' ')
    const [a, b] = limits.split('-').map(Number)

    const first = password[a - 1] === subject
    const second = password[b - 1] === subject

    if ((first && !second) || (!first && second)) {
      valid++;
    }
  }

  return { valid }
}

console.log({ 'part one': part1(), 'part two': part2() })
