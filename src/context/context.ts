import { createContext, } from "react";

interface AuthContextInterface {
  isLogin: boolean,
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextInterface | null>(null);
