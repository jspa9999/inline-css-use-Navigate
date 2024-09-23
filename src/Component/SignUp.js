import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
   
         <div className="App">
         <form className="fm">
          <h1>Sign up</h1>
    <div className="dv">
        <label className="name">Name</label>
        <input></input>
        </div>

        <div className="dv">  
        <label className="name">DOB</label>
        <input></input>
        </div>
       
        <div className="dv">  
        <label className="name">Mobile No</label>
        <input></input>
        </div>
       
        <div className="dv">  
        <label className="name">place</label>
        <input></input>
        </div>
       
        <div className="dv">  
        <label className="name">gender</label>
        <input></input>
        </div>
       
        <div className="dv">  
        <label className="name">marital status</label>
        <input></input>
        </div>


      <div>
       <button type="button">sign up</button>
      </div>
    </form>
    <br></br>
    <br></br>
    <Link to="/">Login</Link>
    </div>
  )
}

export default SignUp