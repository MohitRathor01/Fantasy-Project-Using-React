import React from 'react';

const firstpage = () => {
  return (
    <div>
      <div className="custom-card position-relative">
        <div className="card bg-dark text-white">
          <img className="card-img custom-background" src="Images/bg.jpg" alt="Card image" />
          <div
            className="col-10 col-sm-6 text-center position-absolute py-4 custom-box top-50 start-50 translate-middle"
            style={{ backgroundColor: '#0e0e0ea1', zIndex: '11', borderRadius: '10px' }}
          >
            <ul className="navbar-nav me-auto mb-lg-0 custom-ul">
              <li className="nav-item">
                <div to="/Play" className="nav-link py-4 custom-active btn" aria-current="page">
                  <h2 className="text-center custom-heading">Play Fantasy Sports and Win upto</h2>
                  <h2 className="text-center custom-heading">₹10,00,000 Daily</h2>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default firstpage;
