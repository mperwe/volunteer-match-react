import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"
import LoginForm from "./LoginForm"
import "./login.css"

const Login = () => {
    return (
        <>
            <NavBar />
            <LoginForm title="Create Organisation Account" type="organisation" />
            <Footer />
        </>


    )
}

export default Login;