import { Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
// import './App.css'
import ForgotPassword from './pages/ForgotPassword'



function App() {
 
  return (
    <>
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>

    </Routes> 

    </>
  )
}

export default App
