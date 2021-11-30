import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import { toast } from 'react-toastify';
// import Home from './components/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


function Login() {
    const classes = useStyles();
    const navigate = useNavigate()
    useEffect(()=>{
        const isLoggedIn = localStorage.getItem('apna_time_ayega')
        if(isLoggedIn){
             navigate('/')
        }
    },[])
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const login = async ()=>{
        try{
            const res = await axios.post('http://localhost:4000/login',{email,password})
            console.log('ressss=>',res)
            console.log(res.data.message)
            localStorage.setItem('apna_time_ayega',JSON.stringify(res.data.token) )
            localStorage.setItem('_id',JSON.stringify(res.data._id) )
            // setIsAuthenticated(true)\
            
            navigate('/')
        }catch(err){
            // console.log('errr==>',)
            toast(err.response.data.message,{type:'error',autoClose:2000,progress: 0,hideProgressBar: true,theme:'colored'})
        }
    }
    return (
        <div>
            {/* <button onClick={demo} > hus </button> */}
            <div  style={{backgroundColor:'#4C9ED6',paddingTop:'100px',height: '700px'}}  >


                {/* register  <br></br>
           <label> name</label> <input type='text' value={data.name} onChange={handleChange} name='name' />
           <label> email</label> <input type='email' value={data.email} onChange={handleChange} name='email' />
           <label> phone</label> <input type='number' value={data.phone} onChange={handleChange} name='phone' />
           <label> password </label> <input type='password' value={data.password} onChange={handleChange} name='password' />
           <button onClick={submitData} > submit</button> */}




                    <div style={{backgroundColor:'#F1F3F4',borderRadius:'5px',height:'450px', width: '35%', margin: 'auto', display: 'flex', justifyContent: 'center',flexDirection:'column',alignItems:'center' }}>
                    <h1> Login</h1>
                <form className={classes.root} noValidate autoComplete="off">
                  

                            {/* <p style={{margin:'0',padding:'0',fontSize:'8px',color:'red'}} >{err.nameErr} </p> */}
                            
                            <TextField
                                type='text'
                                label="email"
                                value={email}
                                variant="outlined"
                                size="small"
                                onChange={(e)=>setEmail(e.target.value)}
                                name='email'
                            />
                          
                            {/* <p style={{margin:'0',padding:'0',fontSize:'8px',color:'red'}}>{err.phoneErr} </p> */}
                            <br>
                            </br>
                            <TextField
                                type='password'
                                label="password"
                                value={password}
                                variant="outlined"
                                size="small"
                                onChange={(e)=>setPassword(e.target.value)}
                                name='password'
                            />
                            {/* <p style={{margin:'0',padding:'0',fontSize:'8px',color:'red'}}>{err.passwordErr} </p> */}
                            <br>
                            </br>
                        
                        <div style={{marginLeft:'65px'}} >
                            <Button onClick={login} variant="contained" color="primary">Login</Button>
                        </div>
                        <div style={{marginLeft:'50px',marginTop:'20px'}} >
                            <Button  variant="contained" color="primary"> <Link to='/register' style={{textDecoration:'none',color:'white'}} > Register </Link> </Button>
                        </div>
                </form>
                    </div>
            </div>

        </div>
    )
}

export default Login
