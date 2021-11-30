import React ,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Spinner} from 'react-bootstrap'
function Home() {
    const [loading,setLoading] = useState( false)
    const [user,setUser]= useState({})
    
    const getUser = async ()=>{
        try{
            setLoading(true)
            const user = localStorage.getItem('_id')
            const useerFound =  JSON.parse(user)
            const res =await axios.get(`http://localhost:4000/getUser/${useerFound}`)
            console.log('ye response mila ', res)
            setUser(res.data)
            setLoading(false)
        }catch(err){
            console.log('err ==>',err)
        }
    } 

    useEffect(()=>{
        getUser()
    },[])
    return (
        <div>
            {loading ? <div className='container' >  <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner></div> : <div className='container' > 
                <h4>  name : {user.name}</h4>
                <h4>  email : {user.email}</h4>
                <h4>  phone : {user.phone}</h4>
                </div>}
            
            
        </div>
    )
}

export default Home

