import React from 'react';
import video from'../assets/video/header-video1.mp4'
const Video = () => {
    return (
        <video style={{width:'100%', height:'100%'}} src={video} autoPlay loop muted />
    );
};

export default Video;