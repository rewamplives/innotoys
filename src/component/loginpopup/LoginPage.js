import React from 'react'
import { Button} from "@mui/material";
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../../assets/css/LoginPopup.css';

export default function LoginPopup({setShowLogin}) {

  const [currentState, setCurrentState] =useState("Login");

  return (
    <>
    <div className='login-page'>
     <form className='login-popup-container'>
        <div className="login-popup-title">
           <h2>{currentState}</h2>
           <CloseIcon onClick ={()=>setShowLogin(false)} style={{width:"16px",cursor:"pointer"}}/>
        </div>
        <div className="login-popup-input">
          {currentState === 'Login'?<></>:
          <input placeholder="First Name"type='name'  />}
           {currentState === 'Login'?<></>:
            <input  placeholder='Last Name'type='name' />} 
           <input  placeholder="Email Id" type='email' />
           <input  placeholder="New Password" type='password' />
          {currentState === 'Login'?<></>:
              <input placeholder='Confirm Password'type='password'/>}
        </div>
        <Button style={{
               backgroundColor:"#c2c2c2",
               color:"#111",
              textTransform: "none",
              padding: "12px",
              minHeight:"35px",
              maxHeight:"35px",
              fontWeight:600,border:"none",fontSize:"15px",borderRadius:"5px"}}size="small">
                     
                {currentState === "Sign Up"?"Register":"Login"}
              </Button>
        <div className="login-popup-condition">
          
          <input type='checkbox' required/>

          <p>Remember Me</p>
        </div>
        {currentState === "Login"?<p>Create a new account? <span style={style.span} onClick={()=>setCurrentState("Sign Up")}>Register</span></p>
        :
        <p>Already have an Account?<span style={style.span} onClick={()=>setCurrentState("Login")}>Login</span></p>
        }
      
     </form>
    </div>
    </>
  )
}

const style ={
  span:{
    color: "#446df5",
    fontWeight:600,
    cursor:"pointer"
  }
}



