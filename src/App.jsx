
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
function App() {
 

  return (
 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
   
    </Routes>
    </BrowserRouter>
 
  )
}

export default App
