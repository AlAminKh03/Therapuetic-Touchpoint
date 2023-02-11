import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Contexts/AuthProvider'
import Router from 'next/router'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user,loading } = useContext(AuthContext)

  if(loading){
    return <p>Loading....</p>
  }

  useEffect(() => {
    if (!user) {
      const from = Router.asPath
      Router.push(`/login?from=${from}`)
    }
  }, [user])

  if (user) {
    return <React.Fragment>{children}</React.Fragment>
  }

  return null
}

export default PrivateRoute