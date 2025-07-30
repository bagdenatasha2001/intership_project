import { Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ForgotPassword from './pages/ForgotPassword'
import CreateNewPassword from './pages/CreateNewPassword'
import PasswordUpdated from './pages/PasswordUpdated'




function App() {
 
  return (
    <>
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
      <Route path='/Confirm' element={<CreateNewPassword/>}/>
      <Route path='/updated' element={<PasswordUpdated/>}/>


    </Routes> 

    </>
  )
}

export default App
