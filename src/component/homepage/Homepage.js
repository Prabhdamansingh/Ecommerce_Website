import React from 'react';
import './Homepage.scss';

const Homepage = (props) => {
    return (
        <div class="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">COATS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SHOES</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WATCHES</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
