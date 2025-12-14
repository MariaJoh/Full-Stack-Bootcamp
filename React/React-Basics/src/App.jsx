import Section1 from './components/Section1'
import Student from './components/Student'

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <p>Today we will learn about JSX, Components and props</p>

      <Section1 />
  
      <Student name="Anne" batch="2" />
      <Student name="Yaritza" batch="5" />
    </>
  )
}

export default App