
// import { useContext } from "react"; 
import { useState } from "react"; 
import { Link, useNavigate} from "react-router-dom"; 
import { Text , Heading,Button} from "@chakra-ui/react";
 
const  Login=()=> { 
  const [email, setEmail] = useState(""); 
  const[name,setName]=useState("") 
  const[last,setLast]=useState("") 
  const[number,setNumber]=useState("") 
  const [loading, setLoading] = useState(false); 
  
  const navigate = useNavigate(); 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    setLoading(true); 
    console.log(name); 
    if(name!=="" || email!=="" || last!=="" || number!==""){ 
      alert("Login Successfull") 
      window.location.href="./"
    }else{ 
      alert('Please fill details'); 
    } 
  }; 
  return ( 
    <div className="login-page"> 
      <form onSubmit={handleSubmit} className="form" data-testid="login-form" style={{gap:"50px"}}> 
        
        <div style={{width:"90%",margin:"auto"}}>  
        <div> 
            <Heading mt={"10px"} as="h3">Create New Account</Heading> 
            <label> 
            <Text mt={"10px"} mr={"20px"}>First Name</Text> 
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                
                type="text" 
                placeholder="Name" style={{width:"580px",height:"30px"}} 
              /> 
            </label> 
          </div> 
        <div> 
          <label> 
          <h5 style={{marginRight:"70%"}}>Last Name</h5> 
 
            <input 
              value={last} 
              onChange={(e) => setLast(e.target.value)} 
              
              type="text" 
              placeholder="Last  name" style={{width:"580px",height:"30px"}} 
            /> 
          </label> 
        </div> 
        <div> 
          <label> 
          <h5 style={{marginRight:"70%"}}>Email Address</h5>                 
               <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
             
              type="email" 
              placeholder="email" style={{width:"580px",height:"30px"}} 
            /> 
          </label> 
        </div> 
        
        <div> 
          <label> 
          <h5 style={{marginRight:"70%"}}> Phone Number</h5> 
 
            <input 
              value={number} 
              onChange={(e) => setNumber(e.target.value)} 
              
              type="number" 
              placeholder="Phone Number" style={{width:"580px",height:"30px"}} 
            /> 
            <p style={{marginTop:"10px",color:"grey"}}>Your mobile number will be used to avail benefits such as Nature Basket Cashback and points</p> 
          </label> 
        </div> 
          </div>      
        <div> 
          <Button ml={"300px"} disabled={loading} data-testid="form-submit" type="submit"> 
            SUBMIT 
          </Button> 
          <Text mb={"10px"} ml={"20px"}>All ready have an Account?<Link href="./Login">LOGIN</Link></Text> 
        </div> 
      </form> 
       
    </div> 
  ); 
} 
export default Login;
