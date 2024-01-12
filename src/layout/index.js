import React from 'react'

import './general.css'

import { Outlet as RouterOutlet } from "react-router-dom";
function Layout() {
  return (
    <div>
        <RouterOutlet />
    </div>
  )
}

export default Layout