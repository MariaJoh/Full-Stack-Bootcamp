import User from './components/User'
import './App.css'

function App() {
  // const hobbies = ['Swimming', 'Dancing', 'Singing', 'Cycling']
  // const marks = [
  //   {
  //     subject: 'JavaScript',
  //     marks: 80
  //   },
  //   {
  //     subject: 'HTML',
  //     marks: 90
  //   },
  //   {
  //     subject: 'CSS',
  //     marks: 87
  //   },
  //   {
  //     subject: 'React.js',
  //     marks: 100
  //   }
  // ]
  const users = [
    {
      id: 1,
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      name: "Jeff",
      email: "jeff@gmail.com",
      isPremium: true,
      age: 17
    },
    {
      id: 2,
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      name: "Sonal",
      email: "sonal@gmail.com",
      isPremium: false,
      age: 24
    },
    {
      id: 3,
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      name: "Rebecca",
      email: "rebecca@gmail.com",
      isPremium: true,
      age: 25
    },
    {
      id: 4,
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      name: "Jonathan",
      email: "jonathan@gmail.com",
      isPremium: true,
      age: 16
    },
  ]

  return (
    <div className='container'>
      {/* <User
        avatar="https://reqres.in/img/faces/1-image.jpg"
        name="Jeff"
        email="jeff@gmail.com"
        isPremium={true}
        age={17}
      />
      <User
        avatar="https://reqres.in/img/faces/2-image.jpg"
        name="Sonal"
        email="sonal@gmail.com"
        isPremium={false}
        age={24}
      />
      <User
        avatar="https://reqres.in/img/faces/3-image.jpg"
        name="Rebecca"
        email="rebecca@gmail.com"
        isPremium={true}
        age={25}
      /> */}

      {/* <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul> */}

      {/* {marks.map((element, index) => (
        <div key={index}>
          <span style={{ fontSize: '2em' }}>{element.subject}</span>
          <span style={{ 
            border: '1px solid black',
            marginLeft: '1em',
            padding: '5px'
          }}>
            {element.marks}
          </span>
        </div>
      ))} */}

      {users.map(user => (
        <User
          key={user.id}
          avatar={user.avatar}
          name={user.name}
          email={user.email}
          isPremium={user.isPremium}
          age={user.age}
        />
      ))}
    </div>
  )
}

export default App


/*
  # Conditional Rendering:
    - Concept
      - If condition is true: Show
      - If condition is false: Hide
    - Syntax:
      - {condition && (<h1>Test</h1>)}

  # Rendering Lists
    - Render JSX/component multiple times (as many number of elements in the array)
    - Each child should have a unique key prop
    - Syntax:
      - array.map((element, index) => (
          <h1>{element}</h1>
        ))
*/
