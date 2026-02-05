const express = require('express')
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

const app = express()

// Custom middlewares
// const isUserLoggedIn = (req, res, next) => {
//   console.log('Middleware 1 called')
//   let isLoggedIn = true // test

//   if(isLoggedIn) {
//     next()
//     return
//   }

//   res.send('You are not logged in. Please login first!')
// }
// const middleware2 = (req, res, next) => {
//   console.log('Middleware 2 called')
//   next()
// }

app.use(express.urlencoded({ extended: true }))
// app.use(isUserLoggedIn)
// app.use(middleware2)

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    now: new Date()
  })
})

app.get('/registration-form', (req, res) => {
  res.sendFile(__dirname + '/html/registration-form.html')
})

app.post('/process-registration', upload.single('resume'), (req, res) => {
  console.log(req.body)
  console.log(req.file)
  const { firstName, lastName } = req.body
  res.send(`Thank you for registering, ${firstName} ${lastName}!`)
})

app.listen(3000, () => {
  console.log('Server is up :)')
})

/*
  # Middlewares:
    - An application that sits between client and server
    - It can block/let proceed the incoming request to the server
      - Request is allowed to proceed to the server: 
        CLIENT -> [MIDDLEWARE] ---> SERVER
      - Request is not allowed to proceed: 
          CLIENT -> [MIDDLEWARE] 
          CLIENT <- [MIDDLEWARE]
    - Functions which have access to req, res, next
      - req: Request object
      - res: Response object
      - next: Method to go to next process (next middleware/route controller)

    - app.use(): To connect middleware to express application

    - Inbuilt:
      - express:
        - urlencoded(): Converts urlencoded data to JSON and adds it to 'body' field in the request object
          - { extended: false }: Simple form data
          - { extended: true }: Complex form data like objects and arrays
*/