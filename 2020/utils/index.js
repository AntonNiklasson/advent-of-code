import fs from 'fs'
import path from 'path'

export function readFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8')
  return data
}
