const fs = require('fs')
const fsPromises = require('fs/promises')
const path = require('path')

// READ OPERATION
// fs.readFile('notes.txt', 'utf-8', (error, data) => {
//   if(error) {
//     console.log("Read file error:", error)
//     return
//   }
//   console.log("Read file success:", data)
// })

// WRITE OPERATION
// const content = `
//   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
// `
// fs.writeFile('sample.txt', content, (error) => {
//   if(error) {
//     console.log("Write file error", error)
//     return
//   }
//   console.log("Write file success")
// })

// APPEND OPERATION
// const content = `
// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested`
// fs.appendFile('sample.txt', content, (error) => {
//   if(error) {
//     console.log("Append file error", error)
//     return
//   }
//   console.log("Append file success")
// })

// DELETE OPERATION
// fs.unlink('notes.txt', (error) => {
//   if(error) {
//     console.log("Delete file error", error)
//     return
//   }
//   console.log("Delete file success")
// })

/* ------------------------- */
// # Additional concept: How to handle read operation using async await ('fs/promises' module istead of 'fs' module)
// READ OPERATION (Using 'fs/promises' module)
// async function readNotesFile() {
//   try {
//     const data = await fsPromises.readFile('sample.txt', 'utf-8')
//     console.log("Read file success:", data)
//   } catch (error) {
//     console.log('Read file error:', error)
//   }
// }
// readNotesFile()

/* ------------------------- */
// Q1: You are given with an array of students. Add each student in individual lines in a new doc file

// const students = ['Walid', 'Tarra', 'Sonal', 'Rebecca', 'Mark']

// async function addStudentsToDoc() {
//   try {
//     for(let student of students) {
//       const content = student + '\n'
//       await fsPromises.appendFile('students.doc', content)
//     }
//   } catch (error) {
//     console.log('Something went wrong', error)
//   }
// }
// addStudentsToDoc()

// Q2: You are given a txt file. Copy the content of input txt file to output txt file
// fs.readFile('input.txt', 'utf-8', (error, data) => {
//   if(error){
//     console.log(error)
//     return
//   }
//   fs.writeFile('output.txt', data, (error) => {
//     if(error){
//       console.log(error)
//       return
//     }
//   })
// })

/* ------------------------- */
// # Path module
// console.log(__dirname)
// console.log(__filename)

// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.extname("file:///C:/Users/ankit/Downloads/Class/Codecademy-FullStack-Curriculum.pdf"))
// console.log(path.resolve('index.js'))
// console.log(path.resolve('sample.txt'))
// console.log(path.join(__dirname + 'src', 'index.js'))

// # Example: Using fs and path module together
// const filePath = path.join(__dirname, 'files', 'file1.txt')
// fs.writeFile(filePath, 'This is dummy content', (error) => {
//   if(error){
//     console.log(error)
//     return
//   }
//   console.log('Write successful')
// })

// # Additional concept: Create folder using fs and path module
// fs.mkdir(path.join(__dirname, 'subfolder'), (error) => {
//   if(error) {
//     console.log(error)
//   }
//   console.log('Folder created successfully')
// })

/* ------------------------- */
// # Debugging
/*
  1. Continue: Take to next breakpoint
  2. Step over: Execute the current line and go to the next
  3. Step into: Go inside a function
  4. Step out: Return back from a function
  5. Restart the debugger
  6. Stop: Stop the debugger
*/

function result(num1, num2) {
  let sum = num1 + num2
  let product = num1 * num2
  console.log(sum, product)
}

function abc() {
  console.log('abc')
  def()
}

function def() {
  console.log('def')
}

console.log('START')
result(10, 20)
abc()
console.log('END')

/* ------------------------- */
/*
  # File system (fs)
    - In-built module: 'fs' module
    - Let's Node.js interact with files and folders on the server
    - Asynchronous Methods:
      1. readFile (Read a specific file)
        - Syntax: 
          fs.readFile(filename, 'utf-8', (error, data) => {
            if(error) {
              console.log("Read file error", error)
              return
            }
            console.log("Read file success", data)
          })
      2. writeFile (Create a file + write content)
        - Syntax:
          fs.writeFile(filename, contentToAdd, (error) => {
            if(error) {
              console.log("Write file error", error)
              return
            }
            console.log("Write file success")
          })
      3. appendFile (Add content to the end of the file content)
        - Syntax:
          fs.appendFile(filename, contentToAppend, (error) => {
            if(error) {
              console.log("Append file error", error)
              return
            }
            console.log("Append file success")
          })
      4. unlink (Delete the file)
        - Syntax:
          fs.unlink(fileName, (error) => {
            if(error) {
              console.log("Delete file error", error)
              return
            }
            console.log("Delete file success")
          })

  # Path (path) [Does not work in ES Module system]
    - In-built module: 'path' module
    - Let's Node.js handle file paths
    - 2 reserved keywords:
      - __dirname: Absolute directory (folder) path
      - __filename: Absolute file path
    - Methods:
      1. basename(): Returns the file name from the path string
      2. extname(): Returns the file extension
      3. resolve(): Returns the absolute path 
      4. join(): Returns the file path, and automatically handles /, \ based on OS
*/