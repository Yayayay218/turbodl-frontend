import React from 'react'
import {Link} from 'react-router-dom'

const VideoCard = ({videoId, thumbnail, title}) => {
    return (
        <Link
              className="row search-container"
              to={{
                  pathname: `/watch/${videoId}`
              }}
        >
            <div className="col-md-4 thumbnail">
                <img src={thumbnail} alt=""/>
            </div>
            <div className="col-md-8">
                <p className="video-title">{title}</p>
            </div>
            <div className="col-12">
                <div className="line"></div>
            </div>
        </Link>
    )
}

export default VideoCard