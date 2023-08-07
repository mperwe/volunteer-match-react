import React from "react";
import NavBar from "../NavBar";
import Hero from "../Hero";
import About from "../About"
import Service from "../Service"
import Contact from "../Contact"
import "./home.css"

const Home = () => {
    return(
        <>
        <NavBar />
        <Hero />
        <About />
        <Service />
        <Contact />
      <footer class="section-footer">
        <div class="container">
          <div>
            <h2>Follow US.</h2>
            <a href="http://instagram.com">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="http://facebook.com">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="http://youtube.com">
              <i class="fab fa-youtube fa-2x"></i>
            </a>
          </div>
          <div>
            <h3>Company Info</h3>
            <ul>
              <li><a href="#">All Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3>Blog Posts</h3>
            <ul>
              <li><a href="#">Post 1.</a></li>
              <li><a href="#">Post 2.</a></li>
              <li><a href="#">Post 3.</a></li>
              <li><a href="#">Post 3.</a></li>
            </ul>
          </div>
          <div>
            <h3>Sign Up</h3>
            <p>Join our Volunteer matching Platform.</p>
            <form name="email-form" onsubmit="event.preventDefault()">
              <div class="email-form">
                <span class="form-control-wrap"
                  ><input
                    type="email"
                    name="email"
                    id="email"
                    size="40"
                    class="form-control"
                    placeholder="E-mail" /></span
                ><button type="submit" value="Submit" class="form-control submit">
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer></>
        
        
    ) 
}

export default Home;