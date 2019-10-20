import React from 'react';
// now insted of take props as argument we destructure the argument as video, so that we can refer video.object instead of props.video.object and so on
const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading.....</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
           
        </div>
    );
    
}
export default VideoDetail;