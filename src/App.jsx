import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import HomeRoutes from './routes/HomeRoutes'
import LoginRoutes from './routes/LoginRoutes'
import AboutRoutes from './routes/AboutRoutes'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import ProductsRoutes from './routes/ProductsRoutes'
import ProtectedRoutes from './routes/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleLogIn = () => {
    localStorage.setItem("token", "true");
    navigate("/");
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>

        {
          (!localStorage.getItem("token")) && (
            <li>
              <button onClick={handleLogIn}>Log In</button>
            </li>
          )
        }


        {
          (localStorage.getItem("token")) && (
            <li>
              <button onClick={handleLogOut}>Log Out</button>
            </li>
          )
        }
      </nav>
      <Routes>

        <Route path='/Login' element={<LoginRoutes />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<HomeRoutes />} />
          <Route path='/About' element={<AboutRoutes />} />
          <Route path='/Products/*' element={<ProductsRoutes />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
