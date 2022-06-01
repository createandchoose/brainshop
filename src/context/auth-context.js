import { createContext, useContext, useReducer, useState } from 'react';
const authContext = createContext();
const useAuth = () => useContext(authContext);
import { logInHandler, signUpHandler } from 'utils/auth-utils';

const initialState = {
  isActive: false,
  showPassword: false,
  email: '',
  password: '',
  rememberMe: false,
  signUpFirstName: '',
  signUpLastName: '',
  signUpEmail: '',
  signUpPassword: '',
};

const signInReducer = (state, action) => {
  switch (action.type) {
    case 'TEXT_INPUT':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case 'SIGN_IN_CHECKBOX':
      return {
        ...state,
        rememberMe: action.payload,
      };
    case 'SWITCH_FORM':
      return {
        ...state,
        isActive: !state.isActive,
      };
    case 'PASSWORD_SHOW':
      return {
        ...state,
        showPassword: !state.showPassword,
      };

    case 'SWITCH_AUTH':
      return {
        ...state,
        isAuth: !state.isAuth,
      };

    case 'FILL_GUEST':
      return {
        ...state,
        email: 'johndoe@gmail.com',
        password: 'johnDoe123',
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const AuthProvider = ({ children }) => {
  const [loginState, dispatch] = useReducer(signInReducer, initialState);
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');

    if (token) return { token, isAuth: true };

    return { token: '', isAuth: false };
  });
  // const [isAuth, setIsAuth] = useState(false);
  console.log('isAuth : ', auth.isAuth);
  const contextValue = {
    loginState,
    dispatch,
    signUpHandler,
    logInHandler,
    auth,
    setAuth,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export { AuthProvider, useAuth };
