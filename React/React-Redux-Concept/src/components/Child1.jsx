import { useSelector, useDispatch } from "react-redux";
import { increment } from '../store/actions/counter'

const containerStyle= {
  border: '1px solid black',
  textAlign: 'center',
  padding: '1em',
  margin: '1em',
  width: '100%'
}

function Child1() {
  const count = useSelector((store) => store.counter.count)
  const dispatch = useDispatch()

  return (
    <div style={containerStyle}>
      <p style={{ fontSize: '4em' }}>{ count }</p>
      <button
        onClick={() => dispatch(increment())}
      >INCREMENT</button>
      <button
        onClick={() => dispatch(increment(5))}
      >INCREMENT 5</button>
    </div>
  );
}

export default Child1;