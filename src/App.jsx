import { Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import SellProduct from './pages/SellProduct'

function App() {


  return (

    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<SellProduct />} />

    </Routes>

  )
}

export default App
