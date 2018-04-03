import React from 'react'
import {Link} from 'react-router-dom'

export const SearchList = ({items}) => {
    return (
        <div>
            {items.map((item, key) => {
                const {snippet} = item
                return (
                    <Link key={key} className="row search-container"
                          to={{
                            pathname: `/watch/${item.id.videoId}`
                          }}
                    >
                        <div className="col-md-4 thumbnail">
                            <img src={snippet.thumbnails.high.url} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <p className="video-title">{snippet.title}</p>
                        </div>
                        <div className="col-12">
                            <div className="line"></div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}