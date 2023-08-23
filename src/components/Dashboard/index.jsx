import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"
import "./dashboard.css"


const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavBar />
      <header className="dash_header">
        <div className="logo">
          <a href="#">Volunteer Link</a>
          <div className="search_box">
            <input type="text" placeholder="Search Opportunities" />
            <i className="fas fa-search"></i>
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
            <a href="#">Applications</a>
            <a href="#">My Account</a>
          </div>
        </nav>

        <div className="main-body">
          <div className="dashboard_hero">
            <h1>Welcome to Volunteer Link</h1>
            <span>Our Matching Platform</span>
          </div>
          <div className="opportunities_list">
            <div className="opportunities_table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date Added</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>23.Aug.2023</td>
                    <td>UNESCO</td>
                    <td>NGO</td>
                    <td className="table_actions"> 
                    <span className="table_icon"><i className="fas fa-eye"></i></span>
                    <span className="table_icon"><i className="fas fa-edit"></i></span>
                    <span className="table_icon"><i className="fas fa-trash-alt"></i></span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>22.Aug.2023</td>

                    <td>URA</td>
                    <td>Government</td>
                    <td className="table_actions">
                    <span className="table_icon"><i className="fas fa-eye"></i></span>
                    <span className="table_icon"><i className="fas fa-edit"></i></span>
                    <span className="table_icon"><i className="fas fa-trash-alt"></i></span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>21.Aug.2023</td>
                    <td>UNICEF</td>
                    <td>NGO</td>
                    <td className="table_actions">
                    <span className="table_icon"><i className="fas fa-eye"></i></span>
                    <span className="table_icon"><i className="fas fa-edit"></i></span>
                    <span className="table_icon"><i className="fas fa-trash-alt"></i></span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>15.Aug.2023</td>
                    <td>SANLAM</td>
                    <td>Community</td>
                    <td className="table_actions">
                    <span className="table_icon"><i className="fas fa-eye"></i></span>
                    <span className="table_icon"><i className="fas fa-edit"></i></span>
                    <span className="table_icon"><i className="fas fa-trash-alt"></i></span>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>10.Aug.2023</td>
                    <td>Twezimbe HQ</td>
                    <td>NGO</td>
                    <td className="table_actions">
                    <span className="table_icon"><i className="fas fa-eye"></i></span>
                    <span className="table_icon"><i className="fas fa-edit"></i></span>
                    <span className="table_icon"><i className="fas fa-trash-alt"></i></span>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>31.July.2023</td>
                    <td>UMEME</td>
                    <td>Government</td>
                    <td className="table_actions">
                    <span className="table_icon"><i className="fas fa-eye"></i></span>
                    <span className="table_icon"><i className="fas fa-edit"></i></span>
                    <span className="table_icon"><i className="fas fa-trash-alt"></i></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="dashboard_sidebar">
          <h4>Categories</h4>
          <div className="dashboard_category">
            <span><i className="fas fa-medkit"></i></span>
            <div className="info">
              <h5>Health</h5>
            </div>
          </div>

          <div class="dashboard_category">
            <i class="fas fa-church"></i>
            <div class="info">
              <h5>Religion</h5>
            </div>
          </div>

          <div class="dashboard_category">
            <i class="fas fa-school"></i>
            <div class="info">
              <h5>Education</h5>
            </div>
          </div>

          <div class="dashboard_category">
            <i class="fas fa-building"></i>
            <div class="info">
              <h5>NGOs</h5>
            </div>
          </div>

          <div class="dashboard_category">
            <i class="fas fa-people-carry"></i>
            <div class="info">
              <h5>Community</h5>
            </div>
          </div>
          <div class="dashboard_category">
            <i class="fas fa-users"></i>
            <div class="info">
              <h5>Government</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Dashboard;