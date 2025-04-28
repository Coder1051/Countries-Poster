import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary shadow-sm">
                <div className="container-fluid">

                    <span className="navbar-brand text-white mb-0 h1">Welcome</span>

                    <div className="d-flex">
                        <button className="btn btn-outline-light me-2">Login</button>
                        <button className="btn btn-outline-light">Sign Up</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
