const brandStyle= {
  backgroundColor: '#e8f9fd',
  borderRadius: '10px',
  padding: '5px'
}

function Header() {
  return (
    <div>
      <h1 className="display-2">
        Amazon Best Sellers
      </h1>
      <p className="lead fs-4">Our most popular products based on sales. Updated frequently.</p>
    </div>
  );
}

export default Header;