import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"
import RegisterForm from "../Register/RegisterForm"
import {useEffect, useState} from 'react';

const VolunteerForm = () => {
    return (
        <>
            <NavBar />
            <RegisterForm title="Create Volunteer Account" type="volunteer" />
            <Footer/>
        </>
    )
}


function App(){
    const [users, setUsers] = useState([])
  let apiUrl = "http://localhost:1337/api/users?populate=*"

  useEffect(()=>{
    fetch(apiUrl)
    .then((Response)=>{
      return Response.json()
    })
    .then((data)=>{
      setUsers(data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
}

export default VolunteerForm;