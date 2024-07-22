import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="header-left-panel">
        <div className="logo-wrap">
          <div className="logo">
            <h2>Cook Together, Share Forever</h2>
            <h1>SHARED COOKBOOK</h1>
          </div>
        </div>
      </div>
      <div className="header-right-panel">
        <div className="header-right-panel-top">
          <p>Call Us : 000 888 8888</p>
          <p>
            {' '}
            <Link to="#">Mail Us : info@websitename.com</Link>
          </p>
        </div>
        <div className="menu">
          <ul>
            <li className="marRight20">
              <Link className="active" to="/">
                home
              </Link>
            </li>
            <li className="marRight20">
              <Link to="about.html">about</Link>
            </li>
            <li>
              <Link to="services.html">services</Link>
            </li>
            <li className="marRight20">
              <Link to="features.html">features</Link>
            </li>
            <li className="marRight20">
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
