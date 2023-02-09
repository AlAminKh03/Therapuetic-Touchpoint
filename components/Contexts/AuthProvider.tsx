import React,{createContext} from 'react'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from "../../firebase.config"

type Props = {}

export const AuthContext = createContext({
  createUser: (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth,email, password);
  }
})

const auth = getAuth(app)

const AuthProvider = ({children}: { children: React.ReactNode }) => {

    const createUser=(email:string,password:string)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        createUser
    }

  return (
 <AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider> 
  )
}

export default AuthProvider