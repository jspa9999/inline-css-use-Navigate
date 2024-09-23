import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

let emailInputRef = useRef();
let passwordInputRef=useRef();
let messageInputRef=useRef();
let navigate = useNavigate();


  return (
    <div className="App">
         <form className="fm">
      <h1 style={{backgroundColor:"violet",color:"blue",fontSize:"4rem"}}>Login</h1>
    <div className="dv">
  
        <label className="name">Email</label>
        <input ref={emailInputRef}></input>
        </div>

        <div className="dv">  
        <label className="name">password</label>
        <input ref={passwordInputRef}></input>
        </div>

        <div className="dv">  
        <label className="name">Message</label>
        <input ref={messageInputRef}></input>
        </div>
   
   
      <div>
       <button type="button" onClick={()=>{

        let typedEmail = emailInputRef.current.value;
        let typedPassword = passwordInputRef.current.value;


         if (typedEmail =="sree@gmail.com"&& typedPassword=="sree123") {

          navigate("/Dashboard",{state:{msg:messageInputRef.current.value}})

         } else {
            alert("Username/Password is in correct")
         }
    }}
       >
        Login
        </button>

      
      </div>
    </form> 
    <br></br>
    <br></br>
    <Link to="Signup">Signup</Link>
   
    </div>
  )
}

export default Login