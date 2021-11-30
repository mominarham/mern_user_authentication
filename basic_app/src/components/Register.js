import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.1),
            width: 200,
        },
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Register() {
    const classes = useStyles();
    const navigate = useNavigate()
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('apna_time_ayega')
        if (isLoggedIn) {
            navigate('/')
        }
    }, [])
    const [err, setErr] = useState({
        nameErr: '',
        emailErr: '',
        phoneErr: '',
        passErr: ''
    })
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const validate = () => {
        const number = /^-?[\d.]+(?:e-?\d+)?$/.test(data.phone)
        if (data.name.length === 0 || data.name.length < 2) {
            setErr({
                // ...err,
                nameErr: 'name should be minimum 3 charachters long'
            })
            return false
        }
        if (!data.email.includes('@') || data.email.length <= 4) {
            console.log('email is 4 charcter lnot long')
            setErr({
                // ...err,
                emailErr: 'please enter valid email'
            })
            return false
        }
        if (number === false || data.phone.length < 0) {
            // console.log('ye type aa raha h ==>', typeof (data.phone))
            // console.log('please type phone number correcttly')
            // console.log( 'flase' )

                    setErr({
                    phoneErr: 'please enter phone number correctly'
                })
                return false
            
        }
        if (data.password.length < 6) {
            setErr({
                ...err,
                passErr: 'password must be 6 charachter long '
            })
            return false
        }

        return true
    }

    const submitData = async () => {
        const isValid = validate()
        if (isValid) {
            try {
                const res = await axios.post('http://localhost:4000/create', data)
                console.log('ress ==>', res)
                toast('User Regostered successfully',{type:'success',autoClose:2000,progress: 0,hideProgressBar: true,theme:'colored'})
                navigate('/login')
                
                // localStorage.setItem('apna_time_ayega', JSON.stringify(res.data))
            } catch (err) {
                console.log('errr => ', err.response.data.message)
                toast(err.response.data.message,{type:'error',autoClose:2000,progress: 0,hideProgressBar: true,theme:'colored'}) 
            }
        } 
        // else {
        //     toast('please fill all the details correctly',{type:'error',autoClose:2000,progress: 0,hideProgressBar: true,theme:'colored'}) 
        //     // setErr({})
        //     // setErr({})
        // }
    }

    const demo =()=>{
        console.log('huaaaa')
        // const data = /^-?[\d.]+(?:e-?\d+)?$/.test('+912542 55252')
        // console.log(('data ==>', data))

        // toast.success('🦄 Wow so easy!', {
        //     position: "top-right",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: 0,
        //     });
        // toast('ye hua kya',{type:'success',autoClose:2000,progress: 0,hideProgressBar: true,theme:'colored'})
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
                    <h1> Register</h1>
                <form className={classes.root} noValidate autoComplete="off">
                  

                            <TextField
                                type='text'
                                label="name"
                                value={data.name}
                                variant="outlined"
                                size="small"
                                onChange={handleChange}
                                name='name'
                            />
                            <p style={{margin:'0',padding:'0',fontSize:'8px',color:'red'}} >{err.nameErr} </p>
                            <br>
                            </br>
                            <TextField
                                type='text'
                                label="email"
                                value={data.email}
                                variant="outlined"
                                size="small"
                                onChange={handleChange}
                                name='email'
                            />
                            <p style={{margin:'0',padding:'0',fontSize:'8px',color:'red'}}>{err.emailErr} </p>
                            <br>
                            </br>
                            <TextField
                                type='text'
                                label="phone"
                                value={data.phone}
                                variant="outlined"
                                size="small"
                                onChange={handleChange}
                                name='phone'
                            />
                            <p style={{margin:'0',padding:'0',fontSize:'8px',color:'red'}}>{err.phoneErr} </p>
                            <br>
                            </br>
                            <TextField
                                type='password'
                                label="password"
                                value={data.password}
                                variant="outlined"
                                size="small"
                                onChange={handleChange}
                                name='password'
                            />
                            <p style={{margin:'0',padding:'0',fontSize:'8px',color:'red'}}>{err.passwordErr} </p>
                            <br>
                            </br>
                        
                        <div style={{marginLeft:'50px'}} >
                            <Button onClick={submitData} variant="contained" color="primary">Register</Button>
                        </div>

                        <div style={{marginLeft:'65px',marginTop:'20px'}} >
                            <Button  variant="contained" color="primary"> <Link to='/login' style={{textDecoration:'none',color:'white'}} > Login </Link> </Button>
                        </div>
                </form>
                    </div>
            </div>

        </div>
    )
}

export default Register
