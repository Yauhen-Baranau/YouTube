import React from 'react';
import './Video.css'

class Video extends React.PureComponent {

render() {
        return (
            <div className='videoContainer'>
              <iframe className={'frame'} src={'https://www.youtube.com/embed/'+this.props.videoId}/>
            </div>
          )
    }
}

export default  Video;