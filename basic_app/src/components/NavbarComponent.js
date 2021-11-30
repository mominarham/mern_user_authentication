import React,{useContext}  from 'react'
import {Link,useNavigate} from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';
import Button from '@material-ui/core/Button';

// import {AuthState} from './ForAuth'
function NavbarComponent() {

    // const [setIsAuthenticated] = useContext(AuthState)
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem('apna_time_ayega')
        // setIsAuthenticated(false)
        navigate('/login')
        
    }

    
    //     <div>
    //      navbar 

            
    //         <Link to='/'>home</Link><br></br>
    //         <Link to='/contact'>contact</Link><br></br>
    //         <Link to='/about'>about</Link><br></br>
    //         <Link to='/userProfile' >profile</Link><br></br>


    //    <button onClick={logout} > logout</button>
    //     </div>

   

    return (
      <div className='container' >
          
  <Navbar bg="light">
    <Container>
     
      <Nav className="me-auto">
        <Nav.Link  > <Link to='/' style={{textDecoration:'none',color:'black'}}  > Home </Link> </Nav.Link>
        </Nav>
        <Nav.Link  >  <Button onClick={logout} > logout </Button>  </Nav.Link>
    </Container>
  </Navbar>

      </div>
    );
}

export default NavbarComponent

