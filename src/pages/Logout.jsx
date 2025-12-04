import React from 'react'
import { Navigate } from 'react-router-dom';

function Logout({setIsLogin}) {

    setIsLogin(prev => prev ===false);
    <Navigate to="/" replace />

  return (
    <div>
        <Navigate to="/" replace />
    </div>
  )
}

export default Logout