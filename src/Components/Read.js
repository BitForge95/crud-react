import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Read() {

    const [mydata, setMydata] = useState([])

    function getData() {
        Axios.get("https://68822eec66a7eb81224dc0e7.mockapi.io/crud")
            .then((response) => {
                setMydata(response.data)
            })
    }
        
    
    function handleDelete (id){
        Axios.delete(`https://68822eec66a7eb81224dc0e7.mockapi.io/crud/${id}`)
            .then(() => {
                getData();
            })
    }

    useEffect(() => {
        getData();
    },[])

    function setDataToStorage(id,name,username,email,company) {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('username', username)
        localStorage.setItem('email', email)
        localStorage.setItem('company', company.name)

    }

    return (
        <>
            <div className="content-container">
                <div className="bg-gray text-center">
                    <h1>Stake Holders</h1>
                </div>
                <div className="cards-container">
                    {
                        mydata.map((item) => {
                            return (
                                <div class="card" key={item.id}>
                                    <div class="card-header">
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div class="card-body">
                                        <div class="info-group">
                                        <span class="label">{item.username}</span>
                                        </div>
                                        <div class="info-group">
                                        <span class="label">Email</span>
                                        <span class="value">{item.email}</span>
                                        </div>
                                        <div class="info-group">
                                        <span class="label">Company</span>
                                        <span class="value">{item.company.name}</span>
                                        </div>
                                        <div class="divider"></div>
                                    </div>
                                    <div class="card-footer">
                                        
                                        <Link to="/update">
                                            <button class="btn btn-edit" onClick={() => setDataToStorage(item.id,item.name,item.username,item.email,item.company)}>Edit</button>
                                        </Link>
                                        <button class="btn btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Read