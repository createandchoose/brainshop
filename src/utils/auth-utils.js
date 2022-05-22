import axios from 'axios';
import { loginService } from 'services/login-service';
import { signupService } from 'services/signup-service';
const logInHandler = async (email, password, setAuth, navigate) => {
  try {
    console.log(email, password);
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
  firstName,
  lastName,
  email,
  password,
  setAuth,
  navigate
) => {
  try {
    console.log(firstName, lastName, email, password);
    const token = await signupService(email, password, firstName, lastName);

    console.log(token, 'token');

    localStorage.setItem('token', token);
    localStorage.setItem('isAuth', true);
    setAuth({ token, isAuth: true });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export { logInHandler, signUpHandler };
