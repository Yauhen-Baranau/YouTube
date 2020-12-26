import axios from 'axios';

    export default function getByKeyWord(value) {
           let youtube = axios.create({
                baseURL: 'https://www.googleapis.com/youtube/v3/', 
                })
                    return(
                      youtube.get( 'search',{
                          params: {
                              part: 'snippet',
                              maxResults: 5,
                              key:'AIzaSyDO-4V-34UzSj8Mi9Yapss7gCiuo56UXyw',
                              type: 'video',
                              q: value,
                            }
                      })
                    )
    }

  
       