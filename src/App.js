import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import Home from "./components/Home"
import VolunteerForm from "./components/VolunteerForm"
import Contact from "./components/Contact"
import Register from "./components/Register"
import NotFound from "./components/NotFound"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/register/organization" element={<Register />} />
          <Route exact path="/register/volunteer" element={<VolunteerForm />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
