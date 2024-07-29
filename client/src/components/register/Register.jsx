import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useRegister } from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';

const initialValues = { username: '', email: '', password: '', rePassword: '' };
export default function Register() {
  const [error, setError] = useState('');
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    // if (values.password.length < 6) {
    //   setError('Password must be at least 6 characters');
    //   return;
    // }
    if (values.password !== values.rePassword) {
      setError('Password Missmatch!');
      return;
    }
    try {
      await register(values.username, values.email, values.password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

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
              <form onSubmit={submitHandler}>
                <div className="contact-form margin-top">
                  <label>
                    <span>Full name</span>
                    <input className="input_text" id="username" name="username" value={values.username} onChange={changeHandler} type="text" />
                  </label>
                  <label>
                    <span>Email</span>
                    <input className="input_text" id="email" name="email" value={values.email} onChange={changeHandler} type="text" />
                  </label>
                  <label>
                    <span>Password</span>
                    <input
                      className="input_text"
                      id="password"
                      name="password"
                      value={values.password}
                      onChange={changeHandler}
                      type="password"
                      placeholder="At least 6 characters"
                    />
                  </label>
                  <label>
                    <span>Repeat Password</span>
                    <input
                      className="input_text"
                      id="rePassword"
                      name="rePassword"
                      value={values.rePassword}
                      onChange={changeHandler}
                      type="password"
                    />
                  </label>
                  {error && (
                    <label>
                      <span>Error Message</span>
                      <p style={{ fontSize: '16px', color: 'red' }}>{error}</p>
                    </label>
                  )}
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
