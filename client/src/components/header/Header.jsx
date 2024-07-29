import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export default function Header() {
  const { username, isAuthenticated } = useContext(AuthContext);
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
        <div className="header-right-panel-top">{isAuthenticated ? <p>Hello, {username}!</p> : <p>Hello, Guest!</p>}</div>
        <div className="menu">
          <ul>
            <li className="marRight20">
              <NavLink to="/" activeclassname="active">
                home
              </NavLink>
            </li>
            <li className="marRight20">
              <NavLink to="/recipes" activeclassname="active">
                recipes
              </NavLink>
            </li>
            <li className="marRight20">
              <NavLink to="/tips" activeclassname="active">
                tips
              </NavLink>
            </li>
          </ul>
          {isAuthenticated ? (
            <ul>
              <li className="marRight20">
                <NavLink to="/recipes/create" activeclassname="active">
                  create recipe
                </NavLink>
              </li>
              <li className="marRight20">
                <NavLink to="/tips/create" activeclassname="active">
                  create tip
                </NavLink>
              </li>
              <li>
                <NavLink to="/logout" activeclassname="active">
                  logout
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="marRight20">
                <NavLink to="/login" activeclassname="active">
                  login
                </NavLink>
              </li>
              <li className="marRight20">
                <NavLink to="/register" activeclassname="active">
                  register
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
