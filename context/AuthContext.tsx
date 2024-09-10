import { createContext, useReducer } from "react";
import { AuthReducer, AuthState } from "./AuthReducer";
import Singup from "@/app/singup";

const defaultValues: AuthState = {
  user: undefined,
  isLogged: false,
};

interface AuthContextProps {
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, defaultValues);

  const login = async (email: String, password: String) => {
    try {
      const response = { name: "" };
      dispatch({
        type: "LOGIN",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (email: String, password: String) => {
    try {
      const response = { name: "" };
      dispatch({
        type: "LOGIN",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        Singup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
