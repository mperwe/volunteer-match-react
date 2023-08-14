import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"
import "./volunteerform.css" 

const VolunteerForm = () => {
    return (
        <>
            <NavBar />
            <div class="organizationContainerWrapper">
    <div class="rightContainer">
      <div class="signUpContainer">
        <h3>Create Volunteer Account</h3>
        <div class="inputBox">
        <input type="text" placeholder="Full Name" />
        </div>
        <div class="inputBox">
        <input type="text" placeholder="Contact Number" />
        </div>
        <div class="inputBox">
          <input type="text" placeholder="Email address" />
        </div>
        <div class="inputBox">
          <input type="text" placeholder="Password" />
        </div>
        <div class="inputBox">
          <input type="text" placeholder="Re Enter Password" />
        </div>
        <div class="agreeCheckbox">
          <input type="checkbox" />
          <p>I agree with <a>Terms</a> and <a>Privacy</a></p>
        </div>
        <div class="buttonContainer">
          <button type="button" class="signUpButton orgbutton">
            SIGN UP
          </button>
        </div>
        <p className="accountExists">Already have an account? <a href="#">Log In</a></p>
      </div>
    </div>
  </div>
            <Footer/>
        </>
    )
}

export default VolunteerForm;