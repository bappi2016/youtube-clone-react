import React from 'react';
import SearchBar from './SearchBar';
import youtube,{baseParams} from '../api/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';



class App extends React.Component {
    // we take another state that will update when user click on single item
    state = { videos: [],selectedVideo: null }; // we can also pass this state as a prop to communicate or send data  between parent to child.
    // this function will return a list of videos and then set them as state of our app component. That's going to allow our app component to update itself or render itself which will render those newly fethch videos out as a list onto the screen.
    componentDidMount() {
        this.onQuerySubmiT('React development');
    }



    onQuerySubmiT = async searchQuery => {
        const response = await youtube.get('/search' , {
            params : {
                ...baseParams,
                q: searchQuery
            }
        });
        // console.log(response);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
         })
    };

    // now create a callback method   which will take the video item as an arguments and invoke by click event when user click a single video item.

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video})
    }



    render(){

        return (
            <div className=" ui container" style={{marginTop:'10px'}}>
            {/* now pass the callback function 'onQuerySubmit' as a props name onFormSubmit */}
                <SearchBar onQuerySubmit = {this.onQuerySubmiT}/>
                <div className="ui grid">
                 <div className="ui row">
                  <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo}/>
                    {/* now here we insert another component VideoList and create/pass a props videos */}
                    {/* the properties videos value will be the state videos as the name implies */}
                    {/* we also have to confirm that we pass this props videos in the actual or child component VideoList as 'props.videos'.This props is an array so we can use any array properties with it like length-props.videos.length  */}
                    </div>
                    <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
                    {/* we  have to pass a reference/prop(onVideoSelect) to the call back function(onVideoSelect) to invoke the selected video.not mendetory to be idetical name */}
                    </div>
                 </div>
                </div>

            </div>
        );

    }
};

export default App;