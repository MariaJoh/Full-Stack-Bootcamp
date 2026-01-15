import { useState, useEffect } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [color, setColor] = useState('red')

  useEffect(() => {
    if(name.length < 3) {
      setColor('red')
    } else {
      setColor('green')
    }
  }, [name])

  return (
    <form>
      <div>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name}
          onInput={(e) => setName(e.target.value)}
          style={{ backgroundColor: color }}
        />
      </div>
      <div>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input 
          type="number" 
          placeholder="Enter your phone number" 
          value={phone}
          onInput={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="button">Submit form data</button>

      <div>
        <h1>Preview</h1>
        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Phone Number: {phone}</li>
          <li>Password: {password}</li>
        </ul>
      </div>
    </form>
  );
}

export default RegistrationForm;