import './VideoItem.css';
import React from 'react';

// create a functional component for listing indevidual video item to the component Video LIst
//console.log(props); that is props = {videoitem: {…}}. because we pass a prop videoitem in the parent component VideoList and inside the child component VideoItem so we can destructure with parameter with an that array  ({videoitem})
const VideoItem = ({videoitem,onVideoSelect}) => {
    return (
    // pass an event onClick with the nested callback onVideoSelec with argument videoitem - which we were created at App.js and passed both App and VideoList as well. 
    <div onClick={() => onVideoSelect(videoitem)} 
    
    // basically when we are communicating from a parent down to child we can do that very easy with the prop system, but anytime that we want to communicate from a child's back to some parent component we usually make use of a callback which is exactly what we did in this component by creating a nested call back function.
    
    className="video-item item">
        <img className="ui image" src={videoitem.snippet.thumbnails.medium.url}  alt={videoitem.snippet.title}/>
        <div className="content">
            <div className="header">
                {videoitem.snippet.title}
            </div>
        </div>
    </div>
    );
}

export default VideoItem;