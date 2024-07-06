import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { CreatePost } from "./Pages/CreatePost"
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-congif.js'

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  // const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
      // navigate("/login")
    })
  }

  return (
    <>
      <div className="app">
        <Router>

          <nav>
            <Link to="/" >Home</Link>
            {!isAuth ?
              (<Link to="/login" >Login</Link>)
              : (<>
                  <Link to="/post" >Create Post</Link>
                  <button onClick={signOutUser}>Log Out</button>
                </>)
            }
          </nav>
          <Routes>
            <Route path='/' element={<Home isAuth={isAuth} />} />
            <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
            <Route path='/post' element={<CreatePost isAuth={isAuth}/>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
