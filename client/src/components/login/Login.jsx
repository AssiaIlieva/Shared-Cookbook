import { Link, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuth';
import { useModal } from '../../contexts/ModalContext';

const initialValues = { email: '', password: '' };

export default function Login() {
  const login = useLogin();
  const navigate = useNavigate();
  const { openModal } = useModal();

  const loginHandler = async ({ email, password }) => {
    if (!email || !password) {
      openModal(<div>All fields are required!</div>);
      return;
    }

    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      openModal(<div>{error.message}</div>);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

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
              <form onSubmit={submitHandler}>
                <div className="contact-form margin-top">
                  <label>
                    <span>Email</span>
                    <input className="input_text" id="email" name="email" value={values.email} onChange={changeHandler} type="text" />
                  </label>
                  <label>
                    <span>Password</span>
                    <input className="input_text" id="password" name="password" value={values.password} onChange={changeHandler} type="password" />
                  </label>
                  <input type="submit" className="button" value="login" />
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
