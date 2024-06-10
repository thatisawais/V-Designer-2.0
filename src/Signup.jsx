import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file for styling
import { auth } from './Firebase'; // Import the Firebase app
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');

    const navigate = useNavigate();

    const handleLoginClick = () => {
        // Navigate to the Signup page
        navigate('/login');
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        // Implement signup logic here
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            console.log('User signed up successfully!');
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setCompany('');
            alert("User signed up successfully!");
        } catch (error) {
            console.log(error);
            alert("Error signing up!");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="signup-container">
                <div className='signup-form'>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                        />
                        <button className='button' type="submit" >Sign Up</button>
                    </form>
                    <p>Already have an account? <span className='signin-link' onClick={handleLoginClick}>Sign In</span></p>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Signup;
