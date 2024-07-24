import { Link, NavLink } from 'react-router-dom';

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
              <NavLink to="/" activeClassName="active">
                home
              </NavLink>
            </li>
            <li className="marRight20">
              <NavLink to="/recipes" activeClassName="active">
                recipes
              </NavLink>
            </li>
            <li className="marRight20">
              <NavLink to="/recipes/create" activeClassName="active">
                create recipe
              </NavLink>
            </li>
            <li className="marRight20">
              <NavLink to="/tips" activeClassName="active">
                tips
              </NavLink>
            </li>
            <li className="marRight20">
              <NavLink to="/tips/create" activeClassName="active">
                create tip
              </NavLink>
            </li>
            <li className="marRight20">
              <NavLink to="/login" activeClassName="active">
                login
              </NavLink>
            </li>
            <li className="marRight20">
              <NavLink to="/register" activeClassName="active">
                register
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" activeClassName="active">
                logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
