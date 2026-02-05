const express = require('express')

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))

let USERS = [
  {
    id: 1,
    name: 'Madeline',
    email: 'm@gmail.com',
    phone: '+19898989898',
  }
]
let userIdCounter = 2

app.get('/', (req, res) => {
  res.json({
    status: 'UP',
    now: new Date()
  })
})

/* ---------------------------- */
// # REST APIs
// READ: GET /users
app.get('/users', (req, res) => {
  res.json({
    status: 'SUCCESS',
    data: USERS
  })
})

// CREATE: POST /users
app.post('/users', (req, res) => {
  const { name, email, phone } = req.body

  const newUser = {
    id: userIdCounter++,
    name,
    email,
    phone
  }

  USERS.push(newUser)

  res.json({
    status: 'SUCCESS',
    message: 'User created successfully!'
  })
})

// UPDATE: PATCH /users/:id
app.patch('/users/:id', (req, res) => {
  const { id } = req.params
  const { name, email, phone } = req.body

  let user = USERS.find(u => u.id == Number(id))
  if(!user) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'User not found'
    })
  }

  if(name) {
    user.name = name
  }
  if(email) {
    user.email = email
  }
  if(phone) {
    user.phone = phone
  }
  
  res.json({
    status: 'SUCCESS',
    message: 'User updated successfully!'
  })
})

// UPDATE: PUT /users/:id
app.put('/users/:id', (req, res) => {
  const { id } = req.params
  const { name, email, phone } = req.body

  let userIndex = USERS.findIndex(u => u.id == Number(id))
  if(!userIndex && userIndex != 0) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'User not found'
    })
  }

  USERS[userIndex] = {
    id,
    name,
    email,
    phone
  }
  
  res.json({
    status: 'SUCCESS',
    message: 'User updated successfully!'
  })
})

// DELETE: DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const { id } = req.params

  let user = USERS.find(u => u.id == Number(id))
  if(!user) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'User not found'
    })
  }

  USERS = USERS.filter(u => u.id != Number(id))
  
  res.json({
    status: 'SUCCESS',
    message: 'User deleted successfully!'
  })
})

/* ---------------------------- */
// # ROUTE PARAMS
// app.get('/students/:name', (req, res) => {
//   const { name } = req.params

//   res.json({
//     status: 'SUCCESS',
//     message: `Hi ${name}!`
//   })
// })

/* ---------------------------- */
// # QUERY PARAMS
// app.get('/students', (req, res) => {
//   console.log(req.query)

//   res.json({
//     status: 'SUCCESS'
//   })
// })

/* ---------------------------- */

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

/* 
  # REST API:
    - REpresentational State Transfer
    - Convention (That is understood by all)
      - Resource based (Eg.: customer, seller, product, cart, order)
      - Uses HTTP semantics (CRUD operations)
      - Predictable URLs
      - Scales better

    - HTTP Methods:
      - GET: Read (R)
      - POST: Create (C)
      - PUT/PATCH: Update (U)
      - DELETE: Delete (D)

    - Examples
      - Before REST
        - GET /getUsers 
        - POST /createUser
        - POST /updateUser
        - POST /deleteUser
      - After REST
        - 'user' resource
          - Read: GET /users
          - Create: POST /users
          - Update: PUT/PATCH /users/id
          - Delete: DELETE /users/id
        - 'product' resource
          - Read: GET /products
          - Create: POST /products
          - Update: PUT/PATCH /products/id
          - Delete: DELETE /products/id

      - URL Patterns in REST APIs
        - GET /resource    :Read resource list
          - Eg.: GET /users
        - GET /resource/id :Read a specific record in the resource 
         - Eg.: GET /users/1
        - GET /resource/id/sub-resource :Read sub-resource list
          - Eg.: GET /users/1/posts
        - GET /resource/rid/sub-resource/srid : Read a specific record in the sub-resource
          - Eg.: GET /users/1/posts/5
  
  # PUT vs PATCH
    - PUT: Complete replacement of the record (Developer need to be careful)
    - PATCH: Update only specific field in the record

  # Route parameters:
    - Used to create dynamic routes
    - Syntax: /students/:id
    - To access route params: req.params

  # Query parameters:
    - Used for search/filter functionalites
    - Syntax: /students
    - To access query params: req.query
    - Example: /students?age=30&country=US
      - req.query: { age: 30, country: 'US' }
*/