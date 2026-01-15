import { useState } from 'react'

function Controlled() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleFormData() {
    console.log('Form submitted')
    console.log(email, password)
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <div style={{ margin: '0.5em 0'}}>
          <input 
            type='email' 
            placeholder="Enter your email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ margin: '0.5em 0'}}>
          <input 
            type='password' 
            placeholder="Enter your password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
        <button 
          type="button"
          onClick={handleFormData}
        >Submit</button>
      </form>
    </div>
  );
}

export default Controlled;