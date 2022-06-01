import { loginService } from 'services/login-service';
import { signupService } from 'services/signup-service';
const logInHandler = async (email, password, setAuth, navigate) => {
  try {
    const token = await loginService(email, password);
    localStorage.setItem('token', token);
    localStorage.setItem('isAuth', true);
    setAuth({ token, isAuth: true });
    navigate('/');
  } catch (e) {
    console.log(e);
  }
};

const signUpHandler = async (
  email,
  password,
  firstName,
  lastName,
  setAuth,
  navigate
) => {
  try {
    const token = await signupService(email, password, firstName, lastName);
    localStorage.setItem('token', token);
    localStorage.setItem('isAuth', true);
    setAuth({ token, isAuth: true });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export { logInHandler, signUpHandler };
