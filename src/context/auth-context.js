import { createContext, useContext, useReducer } from 'react';

const authContext = createContext();
const useAuth = () => useContext(authContext);

const initialState = {
  isActive: false,
  showPassword: false,
  email: '',
  password: '',
  rememberMe: false,
  userName: '',
  signUpEmail: '',
  signUpPassword: '',
  signUpConfirmPassword: '',
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
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const AuthProvider = ({ children }) => {
  const [loginState, dispatch] = useReducer(signInReducer, initialState);

  const contextValue = {
    loginState,
    dispatch,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export { AuthProvider, useAuth };
