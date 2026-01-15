function Student({ count, name, batch, stack }) {
  return (
    <>
      <h2>Student No. {count}</h2>
      <ul>
        <li>Name: { name }</li>
        <li>Batch: { batch }</li>
        <li>Stack: { stack }</li>
      </ul>
    </>
  )
}

export default Student