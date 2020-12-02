#! /usr/bin/env node -r esm

import { readFile } from '../utils'

const input = readFile('./input')

console.log({ input })
