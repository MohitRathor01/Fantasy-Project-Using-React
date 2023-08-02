import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: '#333', color: '#fff' }} >
            <div className="footer-content">
                <div className="left-section">
                    <h2>Contact</h2>
                    <p>Email:Halaplay123@gmail.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
              
            </div>
            <div className="bottom-bar">
                <p>&copy; {new Date().getFullYear()} HalaPlay. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
