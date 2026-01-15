import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

function Cart({ cart, removeFromCart }) {
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [subTotal, setSubTotal] = useState(0)

  const deliveryCharge = 10

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    setCartProducts(products.filter(p => cart.includes(p.id)))
  }, [products, cart])

  useEffect(() => {
    let sum = 0
    cartProducts.forEach(cp => {
      sum += cp.price
    })
    setSubTotal(sum)
  }, [cartProducts])

  async function fetchProducts() {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      setProducts(data.products)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2 className='display-5'>Cart items</h2>
      <Row className='mt-5'>
        {cartProducts.length ? cartProducts.map(product => (
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
                  onClick={() => removeFromCart(product.id)}
                >
                  { cart.includes(product.id) ? 
                    'Remove from cart' :
                    'Add to cart'
                  }
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )) : (
          <p className='lead'>No products in the cart</p>
        )}
      </Row>

      {Boolean(cart.length) && (
        <>
          <p className='lead'>Summary</p>
          <Card style={{ width: '18rem', margin: 'auto', textAlign: 'left' }}>
            <Card.Body>
              <Card.Title>Summary</Card.Title>
              <Card.Text>
                Total number of items: {cart.length}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className='d-flex justify-content-between'>
                <span>Subtotal:</span> 
                <span>${subTotal}</span>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex justify-content-between'>
                <span>Delivery charges:</span> 
                <span>${deliveryCharge.toFixed(2)}</span>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex justify-content-between'>
                <span>Total:</span> 
                <span>${(subTotal + deliveryCharge).toFixed(2)}</span>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body style={{ textAlign: 'right' }}>
              <Card.Link className='btn btn-success'>Proceed to buy</Card.Link>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
}

export default Cart;