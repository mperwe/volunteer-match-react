import React from 'react'
import {useEffect, useState} from 'react';

const LoginForm = ({title, type}) => {
    const handleLogin = () => {
        console.log("click")
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="organizationContainerWrapper">
                <div className="rightContainer">
                    <div className="loginContainer">
                        <h3>Login to Volunteer Link App</h3>
                        <div className="inputBox">
                            <input type="email" placeholder="Email address" required />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="buttonContainer">
                            <button type="submit" className="loginButton orgbutton">
                                SIGN IN
                            </button>
                        </div>
                        <p className="accountExists">Do not have an account? <a href="/register/volunteer">Sign Up</a></p>
                    </div>
                </div>
            </div>

        </form>
    )
}


function App(){
    const[organisation, setOrganisation] = useState([])
  let apiUrl = "http://localhost:1337/api/organisations?populate=*"

  useEffect(()=>{
    fetch(apiUrl)
    .then((Response)=>{
      return Response.json()
    })
    .then((data)=>{
      setOrganisation(data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
}

export default LoginForm;