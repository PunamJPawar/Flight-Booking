import { useState } from "react"
import { Container } from "react-bootstrap"
const SignUp=()=>{

    const[sign,setSign]=useState({
        name:'',
        age: 0,
        email:'',
        password:'',
        contact: 0,

    })

    const [isSubmitted, setIsSubmitted] = useState(false)


    const handleNameChange=(event)=>{
        setSign({...sign,name:event.target.value})
    }

    const handleEmailChange=(event)=>{
        setSign({...sign,email:event.target.value})
    }
    const handlePasswordChange=(event)=>{
        setSign({...sign,password:event.target.value})
    }

    const handleAgeChange=(event)=>{
        setSign({...sign,age:event.target.value})
    }

    const handleContactChange=(event)=>{
        setSign({...sign,contact:event.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault(e)
        alert('Signup form is submitted');
        setIsSubmitted(true)
    }
    return(
        <>
       {!isSubmitted && <div className="container bg-body-tertiary p-3">
            
            <h2>Sign Up</h2>
            <form action="#" onSubmit={handleSubmit}>
            <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="name" className="form-control" value={sign.name} onChange={handleNameChange}  placeholder="Enter your name" required/>
                    </div>
    
                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input type="email" className="form-control" value={sign.email} onChange={handleEmailChange}  placeholder="Enter your email" required/>
                    </div>
    
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={sign.password}onChange={handlePasswordChange}  placeholder="Password" required/>
                    </div>
    
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" value={sign.age} onChange={handleAgeChange}  placeholder="Enter your age" required/>
                    </div>
    
                    <div className="mb-3">
                        <label className="form-label">Contact Number</label>
                        <input type="number" className="form-control" value={sign.contact} onChange={handleContactChange}  placeholder="Enter your number" required/>
                    </div>
    
                    <button className="btn btn-dark button-blue" onChange={handleSubmit}>Submit</button>
            </form>
    
        </div>}
    
       <Container style={{marginTop:'100px'}} className="bg-body-tertiary rounded mb-3 p-3" >
        {isSubmitted && <div>
          <h1 className="text-success">You have created your account successfully!</h1>
          <table> 
            <tr>
                <th>Please Check your details:</th>
                <th></th>
            </tr>
    
            <tr>
                <td>Name:</td>
                <td>{sign.name}</td>
            </tr>
    
            <tr>
                <td>Email:</td>
                <td>{sign.email}</td>
            </tr>
            <tr>
                <td>Password:</td>
                <td>{sign.password}</td>
            </tr>
            <tr>
                <td>Contact:</td>
                <td>{sign.contact}</td>
            </tr>
            <tr>
                <td>Age:</td>
                <td>{sign.age}</td>
            </tr>
          </table>
        </div>}
       </Container>
        </>
    )
    }
    export default SignUp