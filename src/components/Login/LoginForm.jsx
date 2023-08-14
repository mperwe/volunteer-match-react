import React from 'react'

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

export default LoginForm;