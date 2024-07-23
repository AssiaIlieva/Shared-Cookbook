import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

export default function Login() {
  const { values, onChange, onSubmit } = useForm({
    email: '',
    password: '',
  });

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
              <form onSubmit={onSubmit}>
                <div className="contact-form margin-top">
                  <label>
                    <span>Email</span>
                    <input className="input_text" id="email" name="email" type="text" onChange={onChange} value={values['email']} />
                  </label>
                  <label>
                    <span>Password</span>
                    <input className="input_text" id="password" name="password" type="password" onChange={onChange} value={values.password} />
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
