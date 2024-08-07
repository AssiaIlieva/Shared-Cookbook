import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import { useModal } from '../../contexts/ModalContext';

const initialValues = { username: '', email: '', password: '', rePassword: '' };

export default function Register() {
  const register = useRegister();
  const navigate = useNavigate();
  const { openModal } = useModal();

  const registerHandler = async (values) => {
    if (!values.username.trim()) {
      openModal(<div>Username is required</div>);
      return;
    }
    if (!values.email.trim()) {
      openModal(<div>Email is required</div>);
      return;
    }
    if (values.password.trim().length < 6) {
      openModal(<div>Password must be at least 6 characters</div>);
      return;
    }
    if (values.password !== values.rePassword) {
      openModal(<div>Password Missmatch!</div>);
      return;
    }
    try {
      await register(values.username, values.email, values.password);
      navigate('/');
    } catch (error) {
      openModal(<div>{error.message}</div>);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

  return (
    <div className="top-content">
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
  );
}
