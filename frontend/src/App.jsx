import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { assets } from './assets/assets'

const App = () => {
  return (
    <div>
      <Navbar />
      <img src={assets.logo} alt="logo"  />
    </div>
  )
}

export default App