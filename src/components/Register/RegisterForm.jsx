import React from 'react'

const RegisterForm = () => {
    const handleRegister = () => {
        console.log("click")
    }

    return (
        <form onSubmit={handleRegister}>
            <div className="organizationContainerWrapper">
                <div className="rightContainer">
                    <div className="signUpContainer">
                        <h3>Create Organization Account</h3>
                        <div className="inputBox">
                            <input type="text" placeholder="Organisation Name" required />
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="Contact Number" required />
                        </div>
                        <div className="inputBox">
                            <input type="email" placeholder="Email address" required />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Re Enter Password" required />
                        </div>
                        <div className="agreeCheckbox">
                            <input type="checkbox" required />
                            <p>I agree with <a>Terms</a> and <a>Privacy</a></p>
                        </div>
                        <div className="buttonContainer">
                            <button type="submit" className="signUpButton orgbutton">
                                SIGN UP
                            </button>
                        </div>
                        <p className="accountExists">Already have an account? <a href="#">Log In</a></p>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default RegisterForm;