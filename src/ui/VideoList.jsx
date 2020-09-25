import React, { useContext, useMemo } from 'react';
import Video from './Video';
import { videoStore } from '../data/video/VideoContext'

export default function VideoList(){
    const [videoState, videoDispatch] = useContext(videoStore)
    const videosList = useMemo(() => {
        function onClick(video){
            videoDispatch({
                type: 'select',
                value: video
            })
        }
        return videoState.videos.map(item => (
            <Video key={item.title} onClick={onClick} video={item}  />
        ))
    }, [videoState.video, videoDispatch])
    
    console.log('videoState',videoState)
    return(
        <ul className="list" >
            {videosList}
        </ul>
    );
}

