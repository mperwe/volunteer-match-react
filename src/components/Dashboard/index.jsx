import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"
import "./dashboard.css"


const Dashboard = () => {
  return (
      <>
          <NavBar />
       
          

  <header class="dash_header">
    <div class="logo">
      <a href="#">Volunteer Link</a>
      <div class="search_box">
        <input type="text" placeholder="Search Opportunities" />
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
    </div>

    <div className="header-icons">
      <i className="fas fa-bell"></i>
      <div className="account">
        <img src="frank.jpg" alt="frank Image" />
        <h4>Frank</h4>
      </div>
    </div>
  </header>
  <div className="dashboard_container">
    <nav>
      <div className="side_navbar">
        <a href="#" className="active">Dashboard</a>
        <a href="#">Profile</a>
        <a href="#">History</a>
        <a href="#">Application</a>
        <a href="#">My Account</a>
        <a href="#">Documnets</a>

      </div>
    </nav>

    <div className="main-body">
      <h2>Dashboard</h2>
      <div className="promo_card">
        <h1>Welcome to Voluteer Link</h1>
        <span>Our Matching Platform</span>
        <button>Learn More</button>
      </div>

      <div className="history_lists">
        <div className="list1">
          <div className="row">
            <h4>Volunteer Opportunities Available</h4>
            <a href="#">See all</a>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Dates</th>
                <th>Name</th>
                <th>Type</th>
                <th>Apply</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2, Aug, 2023</td>
                <td>UNESCO</td>
                <td>NGO</td>
                <td> Apply</td>
              </tr>
              <tr>
                <td>2</td>
                <td>22, Aug, 2023</td>
                
                <td>URA</td>
                <td>Government</td>
                <td>Apply</td>
              </tr>
              <tr>
                <td>3</td>
                <td>2, Sep, 2023</td>
              
                <td>UNICEF</td>
                <td>NGO</td>
                <td>Apply</td>
              </tr>
              <tr>
                <td>4</td>
                <td>1, Dec, 2023</td>
                <td>SANLAM</td>
                <td>Private</td>
                <td>Apply</td>
              </tr>
              <tr>
                <td>5</td>
                <td>11, Dec, 2023</td>
                <td>Twezimbe HQ</td>
                <td>NGO</td>
                <td>Apply</td>
              </tr>
              <tr>
                <td>6</td>
                <td>2, Jan, 2024</td>
                <td>UMEME</td>
                <td>Government</td>
                <td>Apply</td>
              </tr>
            </tbody>
          </table>
        </div>

     
      </div>
    </div>

    <div className="dashboard_sidebar">
      <h4>Account Balance</h4>
      
      <div className="balance">
        <i className="fas fa-dollar icon"></i>
        <div className="info">
          <h5>Dollar</h5>
          <span><i className="fas fa-dollar"></i>25,000.00</span>
        </div>
      </div>
      
      <div className="balance">
        <i class="fa-solid fa-rupee-sign icon"></i>
        <div class="info">
          <h5>PKR</h5>
          <span><i class="fa-solid fa-rupee-sign"></i>300,000.00</span>
        </div>
      </div>

      <div class="balance">
        <i class="fas fa-euro icon"></i>
        <div class="info">
          <h5>Euro</h5>
          <span><i class="fas fa-euro"></i>25,000.00</span>
        </div>
      </div>

      <div class="balance">
        <i class="fa-solid fa-indian-rupee-sign icon"></i>
        <div class="info">
          <h5>INR</h5>
          <span><i class="fa-solid fa-indian-rupee-sign"></i>220,000.00</span>
        </div>
      </div>

      <div class="balance">
        <i class="fa-solid fa-sterling-sign icon"></i>
        <div class="info">
          <h5>Pound</h5>
          <span><i class="fa-solid fa-sterling-sign"></i>30,000.00</span>
        </div>
      </div>

    </div>
  </div>




          <Footer />
      </>
  )
}
export default Dashboard;