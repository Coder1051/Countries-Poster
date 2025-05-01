import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginModel from '../components/loginModel';
import SignUpModel from './SignUpModel';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false); // correct state

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary shadow-sm">
                <div className="container-fluid">
                    <span className="navbar-brand text-white mb-0 h1">Welcome</span>
                    <div className="d-flex">
                        <button className="btn btn-outline-light me-2" onClick={() => setShowLogin(true)}>Login</button>
                        <button className="btn btn-outline-light" onClick={() => setShowSignUp(true)}>Sign Up</button> {/* Fixed here */}
                    </div>
                </div>
            </nav>

            <LoginModel show={showLogin} onClose={() => setShowLogin(false)} />
            <SignUpModel show={showSignUp} onClose={() => setShowSignUp(false)} /> {/* Fixed here */}
        </>
    );
};

export default Header;

