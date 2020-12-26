import React from 'react';
import Video from './Video'
import VideoItemsList from './VideoItemsList'


// showing component video elements
class Search extends React.Component {

    state = {
        selectedVideoId: null,
    }
// selected id of the video for viewing
    setID = (id) => {
        this.setState({selectedVideoId:id})
    }

   render() {
       let id = (this.state.selectedVideoId!==null)? this.state.selectedVideoId : this.props.videoList[0].id.videoId;
        return (
          <div>
              <div className='video'>
                <Video  videoId={id} />
              </div>
                <VideoItemsList setID={this.setID} videoList={this.props.videoList} /> 
          </div> 
          )
        }
  }

export default  Search;


