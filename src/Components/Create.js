import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");

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
        e.preventDefault();

        if (!validate()) return;

        Axios.post("https://68822eec66a7eb81224dc0e7.mockapi.io/crud", {
            name,
            username,
            email,
            company: { name: company }
        })
        .then((response) => {
            console.log(response);
            navigate("/read");
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div className="Form-Container">
            <form onSubmit={handleSubmit} noValidate>
                <label>Enter Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <p className="error">{errors.name}</p>}
                <br />

                <label>Enter Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                {errors.username && <p className="error">{errors.username}</p>}
                <br />

                <label>Enter Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p className="error">{errors.email}</p>}
                <br />

                <label>Enter Company Name:</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                {errors.company && <p className="error">{errors.company}</p>}
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Create;
