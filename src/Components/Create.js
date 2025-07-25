import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Create() {

    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [company,setCompany] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post("https://68822eec66a7eb81224dc0e7.mockapi.io/crud", {name: name, username: username, email: email, company: {name: company}})
            .then((response) => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }
  


    return (
        <div className="Form-Container">
            <form onSubmit={handleSubmit}>
                <label>Enter Name:</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br/>
                <label>Enter Username:</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <br/>
                <label>Enter Email:</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br/>
                <label>Enter Company Name:</label>
                <input type="text" name="company-name" value={company} onChange={(e) => setCompany(e.target.value)}></input>
                <br/>
                <button onClick={() => navigate("/read")}>Submit</button>
            </form>
        </div>
    )
}

export default Create