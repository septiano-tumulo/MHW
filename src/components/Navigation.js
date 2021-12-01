import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container px-4 px-lg-5 my-2">
                <Link className="navbar-brand text-white fs-4 border border-2 px-3 rounded bg-dark" to="/">MHW</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active text-white fs-5" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item "><Link className="nav-link text-white fs-5" to="/about">About</Link></li>                        
                    </ul>                   
                </div>
            </div>
        </nav>
    );
}

export default Navigation;