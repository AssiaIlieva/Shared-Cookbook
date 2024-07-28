import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div className="top-content">
      <div className="page-wrapper">
        <div className="primary-content marRight30">
          <div className="mid-panel">
            <div className="mid-panel-content">
              <div className="title">
                <h1>register</h1>
              </div>
              <div className="border" />
              <h2>Please, fill in all the fields</h2>
              <form>
                <div className="contact-form margin-top">
                  <label>
                    <span>Full name</span>
                    <input className="input_text" id="name" name="name" type="text" />
                  </label>
                  <label>
                    <span>Email</span>
                    <input className="input_text" id="email" name="email" type="text" />
                  </label>
                  <label>
                    <span>Password</span>
                    <input className="input_text" id="password" name="password" type="password" placeholder="At least 6 characters" />
                  </label>
                  <label>
                    <span>Repeat Password</span>
                    <input className="input_text" id="rePassword" name="rePassword" type="password" />
                  </label>
                  <input type="submit" className="button" value="register" />
                </div>
              </form>
              <div className="clearing" />
              <div className="address">
                <div className="panel">
                  <div className="content">
                    <span>If you already have a profile click:</span> <Link to="/login">Here</Link>
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
