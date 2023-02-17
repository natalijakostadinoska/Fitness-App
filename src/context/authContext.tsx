import {
  createContext,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LOGIN_PAGE, START_PAGE } from '../Routes';

const USER_KEY = 'user';
const PASSWORD_KEY = 'password';

type AuthState = {
  username: string | null;
  password: string | null;
  present: boolean;
};

const enum AuthActionType {
  Login = 'login',
  Register = 'register',
  Logout = 'logout',
}

type LoginPayload = { username: string; password: string };
type RegisterPayload = { username: string; password: string };
type LogoutPayload = never;

type AuthAction =
  | { type: AuthActionType.Login; payload: LoginPayload }
  | { type: AuthActionType.Register; payload: RegisterPayload }
  | { type: AuthActionType.Logout; payload?: LogoutPayload };

const reducer: Reducer<AuthState, AuthAction> = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  const { type, payload } = action;

  switch (type) {
    case AuthActionType.Login: {
      return {
        ...state,
        present: true,
      };
    }

    case AuthActionType.Register: {
      return {
        ...state,
        username: payload.username,
        password: payload.password,
        present: true,
      };
    }

    case AuthActionType.Logout: {
      return {
        ...state,
        present: false,
      };
    }

    default:
      return state;
  }
};

const loadUser = () => {
  return localStorage.getItem(USER_KEY);
};

const loadPassword = () => {
  return localStorage.getItem(PASSWORD_KEY);
};

const initialState: AuthState = {
  username: loadUser(),
  password: loadPassword(),
  present: Boolean(loadUser()),
};

type AuthContext = {
  state: AuthState;
  login: (payload: LoginPayload) => void;
  register: (payload: RegisterPayload) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContext>({
  state: initialState,
  login: () => Error('Not Implemented'),
  register: () => Error('Not Implemented'),
  logout: () => Error('Not Implemented'),
});

export const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleLogin = (payload: LoginPayload) => {
    const savedUsername = localStorage.getItem(USER_KEY);
    const savedPassword = localStorage.getItem(PASSWORD_KEY);

    if (
      payload.username !== savedUsername ||
      payload.password !== savedPassword
    ) {
      toast('Wrong username and password');
      return;
    }

    dispatch({
      type: AuthActionType.Login,
      payload: payload,
    });

    navigate(START_PAGE);
  };

  const handleRegister = (payload: RegisterPayload) => {
    localStorage.setItem(USER_KEY, payload.username);
    localStorage.setItem(PASSWORD_KEY, payload.password);

    dispatch({
      type: AuthActionType.Register,
      payload: payload,
    });

    navigate(START_PAGE);
  };

  const handleLogout = () => {
    dispatch({
      type: AuthActionType.Logout,
    });

    navigate(LOGIN_PAGE);
  };

  return (
    <AuthContext.Provider
      value={{
        state: state,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth cannot be used outsize an AuthProvide');
  }

  return context;
};
