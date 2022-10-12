import React, { createContext, useState } from "react";
import * as auth from "../services/auth";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(email: string, senha: string): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider : React.FC = (({children}) => {
  const [user, setUser] = useState<Object | null>(null);

  async function signIn(email: String, password: String) {
    const response =  await auth.signIn(email, password);
    
    response.token ? setUser(response) : console.log("Usuário não existe");
    
    
  }

  return(
    <AuthContext.Provider value={{signed: !!user, user, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}) 
export default AuthContext;