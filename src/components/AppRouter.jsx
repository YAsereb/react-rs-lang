import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../Router/Routes'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route =>
        <Route path={route.path} element={<route.element />} key={route.path} />)}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default AppRouter