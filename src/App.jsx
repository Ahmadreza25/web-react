import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import LoginPage from './Pages/LoginPage/LoginPage'
import MessagePage from './Pages/MessagePage/MessagePage'
import MainPage from './Pages/MainPage/MainPage'


const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path='/MessagePage' element={<MessagePage />}/>
                <Route path='/MainPage' element={<MainPage />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App