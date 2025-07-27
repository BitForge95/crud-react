import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Update() {

    const navigate = useNavigate()
    const [id,setId] = useState(0)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")

    useEffect(() => {
        setId(Number(localStorage.getItem('id')))
        setName(localStorage.getItem('name'))
        setUsername(localStorage.getItem('username'))
        setEmail(localStorage.getItem('email'))
        setCompany(localStorage.getItem('company'))
    },[])

    const [errors, setErrors] = useState({});
    
        const validate = () => {
            let temp = {};
            temp.name = name ? "" : "Name is required.";
            temp.username = username ? "" : "Username is required.";
            temp.email = email ? "" : "Email is required.";
            temp.company = company ? "" : "Company name is required.";
    
            setErrors(temp);
            return Object.values(temp).every(x => x === "");
        };

    
    const handleSubmit = (e) => {

        if (!validate()) return;

        
        e.preventDefault()
        Axios.put(`https://68822eec66a7eb81224dc0e7.mockapi.io/crud/${id}`, {
            name: name,
            username: username,
            email: email,
            company: {
                name: company,
            }
        })
            .then(() => {
                navigate('/read')
            })
        
    }
  


    return (
        <div className="Form-Container">
            <form onSubmit={handleSubmit}>
                <label>Enter Name:</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                {errors.name && <p className="error">{errors.name}</p>}
                <br/>
                <label>Enter Username:</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                {errors.username && <p className="error">{errors.username}</p>}
                <br/>
                <label>Enter Email:</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {errors.email && <p className="error">{errors.email}</p>}
                <br/>
                <label>Enter Company Name:</label>
                <input type="text" name="company-name" value={company} onChange={(e) => setCompany(e.target.value)}/>
                {errors.company && <p className="error">{errors.company}</p>}
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Update