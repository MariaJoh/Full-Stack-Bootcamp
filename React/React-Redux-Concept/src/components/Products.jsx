import { useEffect } from 'react';
import { fetchProducts } from '../store/actions/products'
import { useSelector, useDispatch } from 'react-redux';

function Products() {
  const { 
    loading, 
    data, 
    error 
  } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    if(error) {
      alert(error)
    }
  }, [error])

  return (
    <div>
      <h1> Products</h1>
      <ul style={{ textAlign: 'left' }}>
        {!loading ? data.map(p => (
          <li key={p.id}>
            {p.title} | {p.price}
          </li>
        )) : (
          <p>Loading ...</p>
        )}
      </ul>
    </div>
  );
}

export default Products;