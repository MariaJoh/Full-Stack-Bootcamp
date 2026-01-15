import Section1 from './components/Section1'
import Student from './components/Student'

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <p>Today we will learn about JSX, Components and props</p>

      <Section1 />

      <Student 
        count={1} 
        name="Sylvia" 
        batch={8} 
        stack="MERN" 
      />
      <Student 
        count={2} 
        name="Rebecca" 
        batch={5}
        stack="MEVN" 
      />
      <Student 
        count={3} 
        name="Anne" 
        batch={9} 
        stack="MEAN" 
      />
    </>
  )
}

export default App