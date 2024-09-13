//AuthContext.tsx

import { createContext, useEffect, useReducer } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";
import { authReducer } from "./AuthReducer";

export interface AuthState {
  user?: any;
}

const authStateDefault = {
  user: undefined,
};

interface AuthContextProps {
  state: AuthState;
  signUp: (email: string, password: string) => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<boolean>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: any) {
  const [state, dispatch] = useReducer(authReducer, authStateDefault);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: "login", payload: user });
      }
    });
    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: "login", payload: userCredential.user });
      return true;
    } catch (error: any) {
      console.log("Error al iniciar sesión:", error.message);
      return false;
    }
  };

  const signUp = async (email: string, password: string): Promise<boolean> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: "login", payload: userCredential.user });
      return true;
    } catch (error: any) {
      console.log("Error al registrarse:", error.message);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
