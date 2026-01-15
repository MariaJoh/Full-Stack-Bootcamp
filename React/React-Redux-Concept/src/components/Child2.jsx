import { useSelector, useDispatch } from 'react-redux'
import { decrement } from '../store/actions/counter'

const containerStyle= {
  border: '1px solid black',
  textAlign: 'center',
  padding: '1em',
  margin: '1em',
  width: '100%'
}

function Child2() {
  const count = useSelector((store) => store.counter.count)
  const dispatch = useDispatch()

  return (
    <div style={containerStyle}>
      <p style={{ fontSize: '4em' }}>{count}</p>
      <button
        onClick={() => dispatch(decrement())}
      >DECREMENT</button>
    </div>
  );
}

export default Child2;