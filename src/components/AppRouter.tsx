import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/context';
import { publicRoutes } from '../Router/Routes'

const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      <Routes>
        {publicRoutes.map(route =>
          <Route path={route.path} element={<route.element />} key={route.path} />)}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </AuthContext.Provider>

  )
}

export default AppRouter