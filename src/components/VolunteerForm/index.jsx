import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"
import RegisterForm from "../Register/RegisterForm"

const VolunteerForm = () => {
    return (
        <>
            <NavBar />
            <RegisterForm title="Create Volunteer Account" type="volunteer" />
            <Footer/>
        </>
    )
}

export default VolunteerForm;