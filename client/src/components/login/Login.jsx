import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="top-content">
      <div className="page-wrapper">
        <div className="primary-content marRight30">
          <div className="mid-panel">
            <div className="mid-panel-content">
              <div className="title">
                <h1>login</h1>
              </div>
              <div className="border" />
              <h2>Please, login</h2>
              <form>
                <div className="contact-form margin-top">
                  <label>
                    <span>Email</span>
                    <input className="input_text" id="email" name="email" type="text" />
                  </label>
                  <label>
                    <span>Password</span>
                    <input className="input_text" id="password" name="password" type="password" />
                  </label>
                </div>
              </form>
              <div className="clearing" />
              <div className="address">
                <div className="panel">
                  <div className="content">
                    <span>If you don't have a profile click:</span> <Link to="/register">Here</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
