import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail, updateBatch } from "../store/actions/user";

function User() {
  const [text, setText] = useState('')
  const {
    name,
    email,
    batch
  } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'left' }}>
      <ul>
        <li>Name: { name }</li>
        <li>Email: { email }</li>
        <li>Batch: { batch }</li>
      </ul>
      <input 
        type="text" 
        value={text}
        onInput={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => dispatch(updateName(text))}
      >Update name</button>
      <button
        onClick={() => dispatch(updateEmail(text))}
      >Update email</button>
      <button
        onClick={() => dispatch(updateBatch(text))}
      >Update batch</button>
    </div>
  );
}

export default User;