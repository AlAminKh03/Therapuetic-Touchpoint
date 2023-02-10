import React,{createContext,useEffect,useState} from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from "../../firebase.config"

interface OnAuthStateProps{
[key:string]:any
}
const defaultOnAuthStateProps: OnAuthStateProps = {
  user: null
};

export const AuthContext = createContext({
  createUser: (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth,email, password);
  },
  signInUser:(email: string, password: string) => {
    return createUserWithEmailAndPassword(auth,email, password);
  },
  user: defaultOnAuthStateProps,
  signOutUser:()=>{
    return signOut(auth)
  },
  manageUser:(userInfo:{displayName?: string | null | undefined; photoURL?: string | null | undefined;})=>{}
})

const auth = getAuth(app)

const AuthProvider = ({children}: { children: React.ReactNode }) => {
const [user,setUser]=useState<any>()

    const createUser=(email:string,password:string)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email:string,password:string)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    const manageUser=(userInfo:{displayName?: string | null | undefined; photoURL?: string | null | undefined;})=>{
      return updateProfile(user, userInfo)
    }
console.log(user)
    const signOutUser=()=>{
        return signOut(auth)
    }
useEffect(()=>{
  const unsbscribe = onAuthStateChanged(auth,currentUser =>{
    console.log(currentUser)
    setUser(currentUser)
  })
  return ()=>unsbscribe()
},[])

    const authInfo={
        createUser,
        signInUser,
        user,
        signOutUser,
        manageUser
    }

  return (
 <AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider> 
  )
}

export default AuthProvider