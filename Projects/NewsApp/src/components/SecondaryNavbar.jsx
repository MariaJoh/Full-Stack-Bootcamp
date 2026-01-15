import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router'

function SecondaryNavbar() {
  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      {categories.map((category, index) => (
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to={`/categories/${category}`}>
            {category[0].toUpperCase() + category.slice(1)}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default SecondaryNavbar;