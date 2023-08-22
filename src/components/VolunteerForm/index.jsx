import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"
import RegisterForm from "../Register/RegisterForm"
import {useEffect, useState} from 'react';

const VolunteerForm = () => {
    const [users, setUsers] = useState([])
  let apiUrl = "http://localhost:1337/api/users?populate=*"

  useEffect(()=>{
    async function getData(){
      try {
        const responseData = await fetch(apiUrl)
        if (responseData){
          const jsonData = await responseData.json()
          setUsers(jsonData)
    }
  } catch (error) {
      console.log(error)
    }}
  },[])
  
    return (
        <>
            <NavBar />
            <RegisterForm title="Create Volunteer Account" type="volunteer" />
            <Footer/>
        </>
    )
}
export default VolunteerForm;