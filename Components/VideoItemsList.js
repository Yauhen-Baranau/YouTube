import React from 'react';
import VideoItem from './VideoItem'
import './VideoItemsList.css'

//video list
class VideoItemsList extends React.Component {

render() {
   let videoListCode = this.props.videoList.map(v => {
           return(  <li key={v.id.videoId}>
                        <VideoItem setID={this.props.setID} id={v.id.videoId} videoItem={v.snippet}/>
                    </li>)}
                 )
  return (
     <ul className='list'>{videoListCode}</ul> 
    )
  }
}

export default  VideoItemsList;