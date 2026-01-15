import { Link } from 'react-router'

function NotFound(props) {
  return (
    <div>
      <p className="lead fs-4">Sorry, we were not able to find the page that you were looking for</p>
      <Link to='/'>Take me back to landing page</Link>
    </div>
  );
}

export default NotFound;