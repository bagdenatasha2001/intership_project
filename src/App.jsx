import { Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ForgotPassword from './pages/ForgotPassword'
import CreateNewPassword from './pages/CreateNewPassword'
import PasswordUpdated from './pages/PasswordUpdated'
import Dashboard from './pages/Dashboard'




function App() {
 
  return (
    <>
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path="/dashboard" element={<Dashboard />} />  
     <Route path='/forgot-password' element={<ForgotPassword/>}/> 
     <Route path='/reset-password' element={<CreateNewPassword/>}/>
      <Route path='/password-updated' element={<PasswordUpdated/>}/> 


    </Routes> 

    </>
  )
}

export default App
