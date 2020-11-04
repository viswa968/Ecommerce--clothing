import React from 'react';
import './homepage.style.scss'

//  Homepage is a functional component bcoz we dont need state and lifecycle methods here.
const HomePage = () => (
    <div className="homepage">
       <div className='directory-menu'>
          <div className="menu-item">
              <div className="content">
                  <h1 className="title">HATS</h1>
                  <span className="subtitle">SHOP NOW</span>
              </div>
          </div>
          <div className="menu-item">
              <div className="content">
                  <h1 className="title">jackets</h1>
                  <span className="subtitle">SHOP NOW</span>
              </div>
          </div>
          <div className="menu-item">
              <div className="content">
                  <h1 className="title">sneakers</h1>
                  <span className="subtitle">SHOP NOW</span>
              </div>
          </div>
          <div className="menu-item">
              <div className="content">
                  <h1 className="title">mens</h1>
                  <span className="subtitle">SHOP NOW</span>
              </div>
          </div>
          <div className="menu-item">
              <div className="content">
                  <h1 className="title">women</h1>
                  <span className="subtitle">SHOP NOW</span>
              </div>
          </div>

       </div>
    </div>
);

export default HomePage;