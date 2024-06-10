import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Footer from './Footer';
import './home.css'; // Import the CSS file

const Home = () => {

    const navigate = useNavigate(); // Initialize the navigate function

    const handleCreate = () => {
        // Navigate to the Signup page
        navigate('/upload-pattern');
    };

    const handlelogout = () => {
        // Navigate to the Signup page
        navigate('/');
    };

    return (
        <div className='home-box'>
            <header className='home-header'>
                <div className='logo'>
                    <h1>V-Designers</h1>
                    <div className='navbar-buttons'>
                        <button className='navbar-button' onClick={handleCreate}>Create Patterns</button>
                        <button className='navbar-button' onClick={handlelogout}>Log Out</button>
                    </div>
                </div>
                <div className='search'>
                    <input type="text" placeholder="Search..." />
                </div>
            </header>
            <main className='home-main'>
                <section className="home-section">
                    <h2>Featured Patterns</h2>
                    <div className='featured-post'>
                        <div className="home-pattern">
                            <h3>Floral</h3>
                            <img src="/src/assets/1.jpg" alt="Floral Pattern" />
                            <p>Elegance</p>
                        </div>
                        <div className="home-pattern">
                            <h3>Leaf</h3>
                            <img src="/src/assets/2.jpg" alt="Leaf Pattern" />
                            <p>Nature</p>
                        </div>
                        <div className="home-pattern">
                            <h3>Geometric</h3>
                            <img src="/src/assets/3.jpg" alt="Geometric Pattern" />
                            <p>Symmetry</p>
                        </div>
                        <div className="home-pattern">
                            <h3>Abstract</h3>
                            <img src="/src/assets/4.jpg" alt="Abstract Pattern" />
                            <p>Creativity</p>
                        </div>
                        <div className="home-pattern">
                            <h3>Striped</h3>
                            <img src="/src/assets/5.png" alt="Striped Pattern" />
                            <p>Boldness</p>
                        </div>
                        <div className="home-pattern">
                            <h3>Polka Dots</h3>
                            <img src="/src/assets/6.png" alt="Polka Dots Pattern" />
                            <p>Playfulness</p>
                        </div>
                        <div className="home-pattern">
                            <h3>Chevron</h3>
                            <img src="/src/assets/7.png" alt="Chevron Pattern" />
                            <p>Modernity</p>
                        </div>
                        <div className="home-pattern">
                            <h3>Paisley</h3>
                            <img src="/src/assets/8.png" alt="Paisley Pattern" />
                            <p>Tradition</p>
                        </div>
                        <div className="home-pattern">
                            <h3>Animal Print</h3>
                            <img src="/src/assets/9.jpeg" alt="Animal Print Pattern" />
                            <p>Wildness</p>
                        </div>
                        <div className="home-pattern">
                            <h3>Damask</h3>
                            <img src="/src/assets/10.jpeg" alt="Damask Pattern" />
                            <p>Luxury</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
