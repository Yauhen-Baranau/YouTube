import React from 'react';
import './VideoItem.css'

class VideoItem extends React.Component {

  getId = () =>{
        this.props.setID(this.props.id)
    }

render() {
    return (
      <div>
          <p><img className='imgItem' onClick={this.getId} src={this.props.videoItem.thumbnails.medium.url}/></p>
          <h4>{this.props.videoItem.title}</h4>
          <h6>{this.props.videoItem.description}</h6>
      </div>
    )
  }
}

export default  VideoItem;