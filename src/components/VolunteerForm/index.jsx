import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"
import "./volunteerform.css" 

const VolunteerForm = () => {
    return (
        <>
            <NavBar />
            <section className="section-login">
                <div className="section-main">
                    <div className="section-login-1">
                        <div className="section-login-1-main">
                            <h1 className="section-login-1-title">Voluteer Link</h1>
                            <p className="section-login-1-text">Life-changing moments start here.</p>
                            <div className="section-login-1-img">
                                <img src="signup2.jpg" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="section-login-2">
                        <div className="section-login-2-main">

                            <h1 className="section-login-2-title">Sign Up</h1>
                            <form className="section-login-2-form">
                                <div className="login-form-1">
                                    <label for="input-email">Email</label>
                                    <input type="text" id="input-email" placeholder="frank@example.com" required />
                                </div>
                                <div className="login-form-2">
                                    <label for="input-name">Full Name</label>
                                    <input type="text" id="input-name" placeholder="Kanzu Code" required />
                                </div>
                                <div className="login-form-3">
                                    <label for="input-password">Password</label>
                                    <input type="password" id="input-password" placeholder="At least 8 characters" required />
                                </div>
                                <div className="login-form-4">
                                    <input type="checkbox" id="input-checkbox" />
                                    <p>By creating an account, you agree to the <a href="/terms-and-conditions">Terms & Conditions.</a></p>
                                </div>
                                <div className="login-form-submit-btn">
                                    <button>Create an Account</button>
                                </div>
                                <div className="login-form-5">
                                    <p>Already have an account? <a href="/signin">Sign In</a></p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default VolunteerForm;