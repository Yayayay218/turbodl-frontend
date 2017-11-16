import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Match = ({_id, coverPhoto, title, description}) => {
    return (
        <div className="match-list">
            <div className="card">
                <div className="match-label">
                    <p>05:12</p>
                </div>

                <Link to={{
                    pathname: `/watch/${_id}`
                }} className="card-text">
                    <div className="icon-play">
                        <img src="../assets/images/icons/icon-play.svg" alt="" style={{width: '40px', height:'40px'}}/>
                    </div>
                    <img
                        src={coverPhoto}
                    >
                    </img>
                    <div className="card-content">
                        <p>{description}</p>
                        <h3>{title}</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
};

Match.propTypes = {
    // id: PropTypes.string.isRequired,
    coverPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

Match.defaultProps = {
    // id: '',
    coverPhoto: '',
    title: ''
};

export default Match