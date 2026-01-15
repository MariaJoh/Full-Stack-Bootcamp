import { useRef } from 'react'

function Uncontrolled() {
  const emailRef = useRef()
  const passwordRef = useRef()

  function handleFormData() {
    console.log('Form submitted')
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <div style={{ margin: '0.5em 0'}}>
          <input 
            type='email' 
            placeholder="Enter your email"
            ref={emailRef}
          />
        </div>
        <div style={{ margin: '0.5em 0'}}>
          <input 
            type='password' 
            placeholder="Enter your password"
            ref={passwordRef}
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

export default Uncontrolled;