import React from 'react'
import "./Header.css";
function Header() {
    return (
        <div className="header">
            <div className="left">
                <h1>BILLUMART</h1>
            </div>
            <div className="right">
                <h1>HOME</h1>
                <h1>ABOUT</h1>
                <h1>TRACK ORDER</h1>
                <h1>CONTACT</h1>
            </div>
        </div>
    )
}

export default Header;
