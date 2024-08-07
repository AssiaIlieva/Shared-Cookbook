import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <img src="../../../images/404.jpg" alt="404 Not Found" />
      <h1>Sorry, the page you are looking for does not exist.</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
