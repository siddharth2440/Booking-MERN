import './App.css'
import Home from './pages/Home.jsx'
import { Routes,Route } from 'react-router-dom'
import Hotels from './pages/Hotels.jsx'
import Hotel from './pages/Hotel.jsx'
import Login from './components/Login.jsx'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/hotels' element={<Hotels/>}></Route>
      <Route path='/hotels/:hotelId' element={<Hotel/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default App;