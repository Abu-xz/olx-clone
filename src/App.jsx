import { Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import SellProduct from './pages/SellProduct'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/setup'
import { useNavigate } from 'react-router-dom'
import Loader from './components/Loader'
import { ToastContainer } from 'react-toastify'

function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setIsLogged(true);
        if (location.pathname === "/login" || location.pathname === "/signup") {
          navigate("/", { replace: true });
        }
      } else {
        setIsLogged(false);

        // Allow navigation to /signup, but redirect to /login if it's not /signup
        if (location.pathname !== "/signup") {
          navigate("/login", { replace: true });
        }
      }

      return () => unSubscribe();
    })
  }, [navigate])



  return (
    loading ? <Loader />
      :
      <>
        <ToastContainer theme='dark' />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home isLogged={isLogged} />} />
          <Route path='/create' element={<SellProduct />} />
        </Routes>
      </>
  )
}

export default App
