import React from 'react'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'
import DashboardProtected from '../../components/PrivateRoute/DashboardProtected'

type Props = {}

const dashboard = (props: Props) => {
  return (
    <div className='relative top-20'>
    <PrivateRoute>
      <DashboardProtected/>
    </PrivateRoute>
      </div>
  )
}

export default dashboard