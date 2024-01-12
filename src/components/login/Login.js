import { useState } from "react"
import { Container } from "react-bootstrap"

const Login=()=>{

    const [login,setLogin] = useState({
        name: '',
        password:'',        
        email:" "
    })

    const [isSubmitted, setIsSubmitted] = useState(false)


    const handleNameChange=(event)=>{
        setLogin({...login, name:event.target.value})
    }    

    const handleemailChange=(event)=>{
        setLogin({...login,email:event.target.value})
    }

    const handlePasswordChange=(event)=>{
        setLogin({...login,password:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Login form submitted")
        setIsSubmitted(true)
    }
return  (
    <> 
   {!isSubmitted && <div className="container bg-body-tertiary p-3 mb-5 rounded" style={{marginTop:"200px"}}>
       <h3>Login!</h3>
            <form action="#" onSubmit={handleSubmit} >
                <div className="mb-3 ">
                    <label>Name</label>
                    <input type="name" className="form-control" value={login.name} onChange={handleNameChange}  placeholder="Enter your name" required/>
                </div>
                
               
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" value={login.email} onChange={handleemailChange} placeholder="Enter your email"  required/>
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input className="form-control" type="password" value={login.password} onChange={handlePasswordChange} placeholder="Enter password" required/>
                </div>
               <button className="btn btn-dark button-blue" onChange={handleSubmit}>Submit</button>
             
            </form>
           
       
    </div>}
    <Container>
    {isSubmitted &&<div className="container bg-body-tertiary rounded search-form p-3">
        
        <h2 className="text-success">You have successfully Logged in !</h2>
        
        <h3>Your name: {login.name}</h3>
        <h3>Your email: {login.email}</h3>
       
        <button className="btn btn-dark button-blue" onClick={()=>{
            setIsSubmitted(false);
            setLogin({name:"",email:"",})
        }} >Next</button>
    </div>}
    </Container>
    </>
)
}
export default Login