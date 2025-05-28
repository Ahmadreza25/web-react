import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import LoginPage from './Pages/LoginPage/LoginPage'
import MessagePage from './Pages/MessagePage/MessagePage'
import MainPage from './Pages/MainPage/MainPage'
import Education from './Pages/Education/Education'
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage'


const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path='/MessagePage' element={<MessagePage />}/>
                <Route path='/MainPage' element={<MainPage />}/>
                <Route path='/Education' element={<Education />}/>
                <Route path='/AboutUsPage' element={<AboutUsPage />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App