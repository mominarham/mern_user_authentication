import React,{useEffect,useState} from 'react'
import {Navigate,Outlet} from 'react-router-dom';
// import Login from './components/Login';
import NavbarComponent from './NavbarComponent';



function ProtectedRoutes() {
//     let auth = false
//     // const auth = async()=>{
//     //     const res = await fetch('http://localhost:4000/allUser',{headers:{
//     //         'x-access-token': localStorage.getItem('apna_time_ayega')
//     //     }})
//     //     console.log('thi is response from auth ===>',res.json()) 
//     // }
    
//     const isAuth =  async ()=>{
//         const token =  localStorage.getItem('apna_time_ayega')
//         if(token){
//             let parse = JSON.parse(token)
//             let decode = jwt.decode(parse)
//             // console.log('decode token ===>',decode.email)
//             console.log('token is present ')
//             const res = await axios.post('http://localhost:4000/findUser',{email:decode.email})
           
//            console.log( 'ye response ila ===>',res)
//             if(res.status === 200){
//                 console.log( 'yaha tak aa rha h ')
//                 auth =  true
//             }
//         }else{
//             console.log('token not present ')
//             auth =  false
//         }
//     }
    
//    console.log('ye auth return ho raha h ==>',auth)
    const getToken =localStorage.getItem('apna_time_ayega')
     const isAuth =()=>{
        if(!getToken){
            return false
        }else{
            return true
        }
    }
    const auth = isAuth()
    return  auth ?
    <> 
    <NavbarComponent/>
    <Outlet />
    </>: <Navigate to="/login" />;
      
}

export default ProtectedRoutes
