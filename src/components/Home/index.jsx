import React from "react";
import NavBar from "../NavBar";
import Hero from "../Hero";
import About from "../About"
import Service from "../Service"
import Contact from "../Contact"
import Footer from "../Footer"
import "./home.css"

const Home = () => {
    return(
        <>
        <NavBar />
        <Hero />
        <About />
        <Service />
        <Contact />
        <Footer />
</>
        
        
    ) 
}

export default Home;