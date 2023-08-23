import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import RegisterForm from "./RegisterForm"
import "./register.css"

const Register = () => {
    return (
        <>
            <NavBar />
            <RegisterForm title="Create Organisation Account" type="organisation" />
            <Footer />
        </>
    )
}

export default Register;