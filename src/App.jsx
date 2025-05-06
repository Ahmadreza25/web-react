import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import LoginPage from './Pages/LoginPage/LoginPage'


const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App