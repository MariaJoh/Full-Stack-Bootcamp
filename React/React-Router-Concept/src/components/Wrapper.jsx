function Wrapper(props) {
  return (
    <div style={{ 
      border: '2px solid black',
      backgroundColor: 'green',
      color: 'white'
    }}>
      {props.children}
    </div>
  );
}

export default Wrapper;