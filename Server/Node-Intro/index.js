import { createServer } from 'http'

const server = createServer((req, res) => {
  res.end('Hello World!')
})

server.listen(3000, () => {
  console.log('Server is running :)')
});



/* ---------------------------------- */
// const {
//   add,
//   subtract,
//   multiply,
//   divide
// } = require('./modules/calculation')
// const getFullName = require('./modules/user')

// import {
//   add,
//   subtract,
//   multiply,
//   divide
// } from './modules/calculation.js'
// import getFullName from './modules/user.js'

// const num1 = 5, num2 = 10
// console.log(add(num1, num2))
// console.log(subtract(num1, num2))
// console.log(multiply(num1, num2))
// console.log(divide(num1, num2))

// const firstName = 'Jeff'
// const lastName = 'Vega'
// console.log(getFullName(firstName, lastName))

/* ---------------------------------- */
/*
  # Setup a nodejs server folder structure
    - Create an index.js (main file)
    - Run command: 
      - npm init (Create package.json file)
        - package name
        - version
        - description
        - main (index.js)
        - keywords (tags)
        - author
      - npm init -y (Create package.json file with default options)

  # Module systems
    - Common JS (default)
      - Export: module.exports = xyz
      - Import: const xyz = require('path')
    - ES Module ("type":"module" in package.json)
      - Export: export default xyz 
      - import: import xyz from 'path'
*/