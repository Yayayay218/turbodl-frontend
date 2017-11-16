import React from 'react';
import {Link} from 'react-router-dom'
import HeaderNav from '../../navigation/HeaderNav'

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-lavi" style={{marginBottom: '2em'}}>
                <div className="container no-padding">
                    <Link className="navbar-brand" to="/"><img src="../../assets/images/lavi-logo.svg" alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="mr-auto"></div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <HeaderNav className="nav-link" filter="livestream">Livestream</HeaderNav>
                            </li>

                            <li className="nav-item">
                                <HeaderNav className="nav-link" filter="high-light">HighLights</HeaderNav>
                            </li>

                            <li className="nav-item">
                                <HeaderNav className="nav-link" filter="full-match">Full Match Replays</HeaderNav>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header