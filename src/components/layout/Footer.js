import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container no-padding" style={{marginTop: '20px', height: '30px', paddingLeft: '36px'}}>
                <Link to="/about">About</Link>
                <Link to="/dmca">DMCA compliance</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
        </footer>
    )
}

export default Footer