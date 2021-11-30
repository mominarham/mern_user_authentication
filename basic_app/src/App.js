// import {useState,createContext} from 'react';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes'
import About from './components/About';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';
// import Navbar from './components/Navbar
import 'react-toastify/dist/ReactToastify.css';
// import {ToastContainer} from 'react-toastify'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import ForAuth from './components/ForAuth';
import { toast } from 'react-toastify';
toast.configure()

function App() {

  return (
    <>
       {/* <ForAuth> */}
       {/* <ToastContainer hideProgressBar={true} autoClose={3000}/> */}
    <BrowserRouter>
    
          
        <Routes>
          
          <Route  path='/' element={<ProtectedRoutes/>} >
            <Route  path='/' element={<Home/>} />
            {/* <Route  path='/userProfile' element={<UserProfile/>} /> */}
            <Route  path='/about' element={<About/>} />
            {/* <Route  path='/contact' element={<Contact/>} /> */}
          </Route>
          
          <Route exact path='/register' element={<Register/>} />
          
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/*' element={<Login/>} />
        </Routes>
      
    </BrowserRouter>
    {/* </ForAuth> */}
    </>
  );
}

export default App;
