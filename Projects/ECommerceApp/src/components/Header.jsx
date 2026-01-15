const brandStyle= {
  backgroundColor: '#e8f9fd',
  borderRadius: '10px',
  padding: '5px'
}

function Header() {
  return (
    <div>
      <h1 className="display-2">
        Welcome to{' '}
        <span style={brandStyle}>EasyBuy</span>
      </h1>
      <p className="lead fs-4">Get the best deals on online products</p>
    </div>
  );
}

export default Header;