import React from 'react'
import {Link} from 'react-router-dom'

const VideoCard = ({videoId, thumbnail, title, clickAble}) => {
    return (
        <div className="row justify-content-center" style={{marginTop: '25px', marginBottom: '10px'}}>
            <div className="col-md-4 col-6">
                <div className="thumb-box">
                    <img src={thumbnail} alt=""/>
                </div>
            </div>
            {
                clickAble ?
                    <Link to={{pathname: `/watch/${videoId}`}}
                          className="col-md-4 col-6 no-padding-left">
                        <p className="title">{title}</p>
                    </Link>
                    :
                    <div
                        className="col-md-4 col-6 no-padding-left">
                        <p className="title">{title}</p>
                    </div>

            }
            {
                clickAble && <div className="col-12" style={{height: '50px'}}></div>
            }
        </div>
    )
}

export default VideoCard