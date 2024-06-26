import './App.css'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Layout from './layout/Layout.jsx'
import DashBoard from './pages/DashBoard.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Users from './pages/Users.jsx'
import NewUser from './pages/NewUser.jsx'
import {userColumns,hotelColumns} from "./tempData/data.table.js"
import {Routes,Route} from "react-router-dom"
import NewHotel from './pages/NewHotel.jsx'
import RequireAuth from './requireAuth/RequireAuth.jsx'


function App() {  
  return (
    <div>
      <Routes>
          {/* <Route path="/dashboard" element={<DashBoard/>}></Route>
          <Route path="/users" element={<Users columns={userColumns} type={"users"}/>}></Route>
          <Route path="/userProfile" element={<UserProfile/>}></Route>
          <Route path='/newUser' element={<NewUser/>}></Route>
          <Route path="/hotels" element={<Users columns={hotelColumns} type={"hotels"}/>}></Route>
          <Route path="/newHotel" element={<NewHotel/>}></Route> */}
          <Route path="/" element={<Login/>}></Route>

          <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
              <Route path="/dashboard" element={<DashBoard/>}></Route>
              <Route path="/users" element={<Users columns={userColumns} type={"users"}/>}></Route>
              <Route path="/userProfile" element={<UserProfile/>}></Route>
              <Route path='/newUser' element={<NewUser/>}></Route>
              <Route path="/hotels" element={<Users columns={hotelColumns} type={"hotels"}/>}></Route>
              <Route path="/newHotel" element={<NewHotel/>}></Route>
          </Route>
      </Routes>
    </div>
  )
}

export default App;