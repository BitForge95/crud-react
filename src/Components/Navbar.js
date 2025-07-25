import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/read">Basic Crud App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to='/read'>Users</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to='/create'>Add</Link>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        A Basic CRUD App 
                    </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar