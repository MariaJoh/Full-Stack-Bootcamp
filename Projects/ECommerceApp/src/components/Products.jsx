import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router'

function Products({ cart, addToCart }) {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('all')

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    if(category == 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(p => p.category == category))
    }
  }, [category])

  async function fetchProducts() {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      setProducts(data.products)
      setFilteredProducts(data.products)

      let productCategories = data.products.map(p => p.category)
      const uniqueCategories = []
      productCategories.forEach(c => {
        if(!uniqueCategories.includes(c)) {
          uniqueCategories.push(c)
        }
      })
      setCategories(uniqueCategories)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    
    <>
      <SecondaryNav setCategory={setCategory} />
      <filteredProducts category={category} />
    
  
      <Row className='mt-5'>
        {filteredProducts.length ? filteredProducts.map(product => (
          <Col key={product.id}>
            <Card style={{ width: '18rem', margin: '1em auto' }}>
              <Card.Img variant="top" src={product.images[0]} />
              <Card.Body>
                <Card.Title style={{ minHeight: '48px' }}>
                  {product.title}
                </Card.Title>
                <Card.Text>
                  ${product.price}
                </Card.Text>
                <Button 
                  variant="warning" 
                  className='me-1'
                  onClick={() => addToCart(product.id)}
                >
                  { cart.includes(product.id) ? 
                    'Added to the cart' :
                    'Add to cart'
                  }
                </Button>
                <Link 
                  to='/cart'
                  className='btn btn-primary'
                >Checkout</Link>
              </Card.Body>
            </Card>
          </Col>
        )) : (
          <p className='lead'>Sorry, no products in the inventory</p>
        )}
      </Row>
    </>
  );
}

export default Products;