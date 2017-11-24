import React from 'react'
import { Route } from 'react-router-dom'
import Home from '@/components/Home'

const Router = () => (
  <div>
    <Route path='/' component={Home} />
  </div>
)

export default Router