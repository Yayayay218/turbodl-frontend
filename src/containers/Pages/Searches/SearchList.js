import React from 'react'
import VideoCard from '../../../components/Card/VideoCard'

export const SearchList = ({items}) => {
    return (
        <div>
            {items.map((item, key) => {
                const {snippet} = item
                return (
                    <VideoCard
                        key={key}
                        videoId={item.id.videoId}
                        thumbnail={snippet.thumbnails.high.url}
                        title={snippet.title}
                    />
                )
            })}
        </div>
    )
}