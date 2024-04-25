import React from 'react';
import './style.css';
import TemporaryDrawer from './drawer';
import Buttton from '../button';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <h1 className='logo'>
                CryptoTracker<span style={{ color: 'var(--primary)' }}>.</span>
            </h1>
            <div className='links'>
                <Link to="/">
                    <p className="link">Home</p>
                </Link>
                <Link to="/compare">
                    <p className="link">Compare</p>
                </Link>
                <Link to="/watchlist">
                    <p className="link">Watchlist</p>
                </Link>
                <Link to="/dashboard">
                    <Buttton 
                    text={"Dashboard"} 
                    outLined={false}
                    onClick={() => console.log("btn Clicked")}
                />
                </Link>
            </div>
            <div className="mobile-drawer">
                <TemporaryDrawer />
            </div>
        </div>
    )
}

export default Header
