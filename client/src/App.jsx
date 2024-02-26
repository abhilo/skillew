
import { Route, Routes } from 'react-router-dom';
import UserLanding from './pages/UserLanding.jsx'
import ContractorLanding from './pages/ContractorLanding.jsx'
import "./App.css";
import UserLogin from "./pages/UserLogin.jsx"
import UserSignup from "./pages/UserSignup.jsx"
import ContractorLogin from "./pages/ContractorLogin.jsx"
import ContractorSignup from "./pages/ContractorSignup.jsx"


const App = () => {
  return (
    <main className="flex h-screen w-screen">
        <Routes>
          <Route path="/" element={<UserLanding />}/> 

          <Route path="/ContractorLanding" element={<ContractorLanding />}/> 

          <Route path="/Contractorlogin" element={<ContractorLogin/>}/>
          <Route path="/Contractorsignup" element={<ContractorSignup/>}/>
          <Route path="/userlogin" element={<UserLogin/>}/>
          <Route path="/usersignup" element={<UserSignup/>}/>
        </Routes>
    </main>

  ) 
}

export default App