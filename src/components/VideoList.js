import React from 'react';
import VideoItem from './VideoItem';

// now create a functional component which will create the list of videos as passing state as a props

// const VideoList = (props) => {
    //console.log(props);// {videos: Array(5)}
    // we can destructuring the props as and array videos.
    // now we passed the callback (onVideoSelect) from the app as a prop.This is how we pass or communicate from child to parent
    const VideoList = ({videos,onVideoSelect}) => {
    const renderedList = videos.map((videoitem) =>{
        // now we can fetch or travarsed every item on VideoItem.
        // the prop (onVideoSelect) from the VideoList pass down to the VideoItem.
        return <VideoItem key={videoitem.id.videoId} onVideoSelect=
        {onVideoSelect} videoitem={videoitem}/>
    });

    return <div className="ui relaxed divided list"> {renderedList} </div>
    
};

export default VideoList;