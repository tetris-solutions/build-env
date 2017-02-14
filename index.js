#!/usr/bin/env node

'use strict'

const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

function read (f) {
  return fs.readFileSync(f, {encoding: 'utf8'})
}

const vars = dotenv.parse(read(process.argv[2]))

let envContent = '#!/usr/bin/env bash\n'

for (let key in vars) {
  if (vars.hasOwnProperty(key)) {
    envContent += "export " + key + "='" + vars[key] + "'\n"
  }
}

process.stdout.write(envContent)
