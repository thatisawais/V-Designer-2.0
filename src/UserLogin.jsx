import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase'; // Import the Firebase app
import { signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';

const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password)
            console.log('User signed in successfully!');
            navigate('/home')
        } catch (error) {
            console.log(error);
            alert("Error signing in!");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <div className="login-form">
                    <h2>Login</h2>
                    {error && <p className="error-message">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="E-mail"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button className='button' type="submit" >Login </button>
                    </form>
                    <p><span className='signup-link' >Forgotten Password ?</span></p>
                    <p>Don’t have an account? <span className='signup-link' onClick={handleSignupClick}>Sign up</span></p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UserLogin;